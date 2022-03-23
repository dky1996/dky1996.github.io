module.exports = {
  lang: "zh-CN",
  title: "dky1996的小站",
  description: "分享技术与快乐！",
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "/assets/icon.jpg",
    navbar: [
      { text: "首页", link: "/" },
      { text: "目录", link: "/content/" },
      { text: "前端", link: "/frontend/" },
      { text: "其他", link: "/others/" },
    ],
    contributors: false,
  },
  head: [["link", { rel: "icon", href: "/assets/icon.jpg" }]],
  dest: "./dist",
  plugins: [
    [
      "@vuepress/plugin-search",
      {
        // 排除首页
        isSearchable: (page) => page.path !== "/",
      },
    ],
    ["@vuepress/plugin-shiki", { theme: "one-dark-pro" }],
  ],
};
