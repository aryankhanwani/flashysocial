/* eslint-disable @typescript-eslint/no-explicit-any */

export declare namespace ServiceApi {
  namespace Instagram {
    interface FindUsersResponseType {
      status: string;
      hashtags: any[];
      places: any[];
      users: Array<{ position: number; user: User }>;
      attempts: string;
    }

    interface FindUserResponseType {
      status: boolean;
      username: string;
      user_id: string;
      attempts: string;
    }

    interface FindPostsResponseType {
      data: {
        user: {
          edge_owner_to_timeline_media: {
            count: number;
            page_info: {
              has_next_page: boolean;
              end_cursor: string;
            };
            edges: Array<{
              node: Post;
            }>;
          };
        };
      };
    }

    interface User {
      pk: string;
      username: string;
      is_verified: boolean;
      full_name: string;
      search_social_context: any;
      unseen_count: any;
      live_broadcast_visibility: any;
      live_broadcast_id: any;
      latest_reel_media: any;
      seen: any;
      profile_pic_url: string;
      is_unpublished: any;
      id: string;
    }

    interface Post {
      __typename: string;
      id: string;
      gating_info: any;
      fact_check_overall_rating: any;
      fact_check_information: any;
      media_overlay_info: any;
      sensitivity_friction_info: any;
      sharing_friction_info: {
        should_have_sharing_friction: boolean;
        bloks_app_url: any;
      };
      dimensions: {
        height: number;
        width: number;
      };
      display_url: string;
      display_resources: Array<{
        src: string;
        config_width: number;
        config_height: number;
      }>;
      is_video: boolean;
      media_preview: string | null;
      tracking_token: string;
      has_upcoming_event: boolean;
      edge_media_to_tagged_user: {
        edges: any[];
      };
      dash_info: {
        is_dash_eligible: boolean;
        video_dash_manifest: any;
        number_of_qualities: number;
      };
      has_audio: boolean;
      video_url: string;
      video_view_count: number;
      edge_media_to_caption: {
        edges: Array<{
          node: {
            text: string;
          };
        }>;
      };
      shortcode: string;
      edge_media_to_comment: {
        count: number;
        page_info: {
          has_next_page: boolean;
          end_cursor: string;
        };
      };
      edge_media_to_sponsor_user: {
        edges: any[];
      };
      is_affiliate: boolean;
      is_paid_partnership: boolean;
      comments_disabled: boolean;
      taken_at_timestamp: number;
      edge_media_preview_like: {
        count: number;
        edges: any[];
      };
      owner: {
        id: string;
        username: string;
      };
      location: any;
      nft_asset_info: any;
      viewer_has_liked: boolean;
      viewer_has_saved: boolean;
      viewer_has_saved_to_collection: boolean;
      viewer_in_photo_of_you: boolean;
      viewer_can_reshare: boolean;
      thumbnail_src: string;
      thumbnail_resources: Array<{
        src: string;
        config_width: number;
        config_height: number;
      }>;
      coauthor_producers: any[];
      pinned_for_users: any[];
      like_and_view_counts_disabled: boolean;
      product_type: string;
    }
  }
}
