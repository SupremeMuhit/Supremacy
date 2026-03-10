import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "𝖘𝖚𝖕𝖗𝖊𝖒𝖆𝖈𝖞",
  description: "Supreme's Awesome Rules",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "𝖘𝖚𝖕𝖗𝖊𝖒𝖆𝖈𝖞",
        collapsed: false,
        items: [
          { text: "𝖘𝖚𝖕𝖗𝖊𝖒𝖆𝖈𝖞", link: "/getstarted" },
          { text: "Rules", link: "/rules" },
          { text: "Banned Stuffs", link: "/banned" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
