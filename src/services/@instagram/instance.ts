import AppProviderInstance from "../provider-instance";
import type { ServicesUnifiedApi } from "../services";
import InstagramProviderConfig from "./config";
import type { ServiceApi } from "./type";

const userCache = new Map<string, ServicesUnifiedApi.User>();
const postsCache = new Map<string, ServicesUnifiedApi.Post[]>();

class InstagramProviderInstance extends AppProviderInstance {
  constructor() {
    super(InstagramProviderConfig, (instance) => ({
      findUsersByName: async (username) =>
        instance
          .get<ServiceApi.Instagram.FindUsersResponseType>("/search", {
            params: {
              query: username,
            },
          })
          .then((res) =>
            res.data.users
              .filter(({ user }) => user !== null && user !== undefined)
              .map<ServicesUnifiedApi.User>(({ user }) =>
                sanitizeUserObject(user),
              ),
          )
          .catch((err) => {
            console.error(err);
            return [];
          }),

      findUserByName: async (username) => {
        const cacheKey = `user_${username}`;
        if (userCache.has(cacheKey)) {
          return userCache.get(cacheKey) ?? null;
        }

        try {
          const userResponse =
            await instance.get<ServiceApi.Instagram.FindUserResponseType>(
              "/id",
              {
                params: {
                  username,
                },
              },
            );

          const searchResponse =
            await instance.get<ServiceApi.Instagram.FindUsersResponseType>(
              "/search",
              {
                params: {
                  query: username,
                },
              },
            );

          const foundUser = searchResponse.data.users.find(
            (item) => item.user.username === username,
          );

          const userData = {
            id: userResponse.data.user_id,
            username: userResponse.data.username,
            profile_pic_url: foundUser?.user.profile_pic_url ?? "",
            is_private: false,
            pk: userResponse.data.user_id,
            is_verified: foundUser?.user.is_verified ?? false,
            full_name: foundUser?.user.full_name ?? userResponse.data.username,
            search_social_context: null,
            unseen_count: null,
            live_broadcast_visibility: null,
            live_broadcast_id: null,
            latest_reel_media: null,
            seen: null,
            is_unpublished: null,
          };

          const sanitizedUser = sanitizeUserObject(userData);
          
          userCache.set(cacheKey, sanitizedUser);
          
          return sanitizedUser;
        } catch (err) {
          console.error(err);
          return null;
        }
      },

      findPosts: async (username) => {
        const cacheKey = `posts_${username}`;
        if (postsCache.has(cacheKey)) {
          return postsCache.get(cacheKey) ?? [];
        }

        try {
          const userResponse = await instance
            .get<ServiceApi.Instagram.FindUserResponseType>("/id", {
              params: {
                username,
              },
            })
            .catch((err) => {
              console.error("Failed to get user ID for posts:", err);
              return null;
            });

          if (!userResponse) {
            return [];
          }

          const postsResponse = await instance
            .get<ServiceApi.Instagram.FindPostsResponseType>("/user-feeds2", {
              params: {
                id: userResponse.data.user_id,
                count: "12",
              },
            })
            .catch((err) => {
              console.error("Failed to fetch posts:", err);
              return null;
            });

          if (!postsResponse) {
            return [];
          }

          const posts = postsResponse.data.data.user.edge_owner_to_timeline_media.edges.map<ServicesUnifiedApi.Post>(
            (edge) => {
              const post = edge.node;
              return {
                id: post.id,
                mediaPreviewUrl: post.display_url ?? post.thumbnail_src,
              };
            },
          );

          postsCache.set(cacheKey, posts);
          
          return posts;
        } catch (err) {
          console.error("Error in findPosts:", err);
          return [];
        }
      },
    }));
  }
}

export default new InstagramProviderInstance();

function sanitizeUserObject(
  user: ServiceApi.Instagram.User,
): ServicesUnifiedApi.User {
  return {
    id: user.id,
    profilePicUrl: user.profile_pic_url ?? "",
    username: user.username,
    selectable: true,
  };
}
