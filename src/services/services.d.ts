import type { AxiosInstance } from "axios";

export declare namespace ServicesUnifiedApi {
  interface User {
    id: string;
    username: string;
    profilePicUrl: string;
    selectable: boolean;
  }

  interface Post {
    id: string;
    mediaPreviewUrl?: string;
  }

  interface Instance {
    instance: AxiosInstance;
    utils: {
      findUsersByName(username: string): Promise<User[]>;
      findUserByName(username: string): Promise<User | null>;
      findPosts(username: string): Promise<Post[]>;
    };
  }
}
