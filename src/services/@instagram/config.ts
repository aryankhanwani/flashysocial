import type { ServiceProvider } from "..";

export default {
  appKey: "instagram",
  appLabel: "Instagram",
  enabled: true,
  services: [
    {
      key: "followers",
      label: "Followers",
      unitPrice: 0.014,
      requiresArticlesSelection: false,
      morph: {
        min: 0,
        max: 15_000,
        step: 100,
        defaultValue: 0,
        required: true,
      },
    },
    {
      key: "likes",
      label: "Likes",
      unitPrice: 0.01,
      requiresArticlesSelection: true,
      morph: {
        min: 0,
        max: 5_000,
        step: 100,
        defaultValue: 0,
        required: true,
      },
    },
    {
      key: "comments",
      label: "Comments",
      unitPrice: 0.7,
      requiresArticlesSelection: true,
      morph: {
        min: 0,
        max: 300,
        step: 10,
        defaultValue: 0,
        required: true,
      },
    },
    {
      key: "views",
      label: "Views",
      unitPrice: 0.0006,
      requiresArticlesSelection: true,
      morph: {
        min: 0,
        max: 200_000,
        step: 100,
        defaultValue: 0,
        required: true,
      },
    },
  ],
} satisfies ServiceProvider.Config;
