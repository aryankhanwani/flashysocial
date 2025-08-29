import { env } from "@/env";
import type { CreateAxiosDefaults } from "axios";

export default () =>
  ({
    baseURL: "https://instagram-looter2.p.rapidapi.com",
    headers: {
      "x-rapidapi-key": env.INSTAGRAM_API_KEY,
      "x-rapidapi-host": "instagram-looter2.p.rapidapi.com",
    },
  }) satisfies CreateAxiosDefaults;
