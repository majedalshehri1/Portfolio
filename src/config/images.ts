export const PROJECT_IMAGES = {
  // Main project thumbnails
  talaqa: "project-talaqa_bxfo0o",
  yusr: "project-yusr_rkvvx6",

  // Talaqa project gallery
  talaqaMedal: "talaqa-2nd-place-medal_hg280u",
  talaqaAward: "talaqa-2nd-place_vnbyek",
  talaqaPoster: "talaqa-our-poster_dpbhnt",
} as const;

export const BLOG_IMAGES = {
  // Add your blog images here
  // Example: cypressGuide: "blog/cypress-guide_abc123",
} as const;

export type ProjectImageKey = keyof typeof PROJECT_IMAGES;
