import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Miko Docs",
  description: "A VitePress Site",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '主页',
        link: '/'
      },
      {
        text: '功能指男',
        link: '/start'
      },
      {
        text: '交流反馈',
        link: '/Feedback'
      }
    ],

    sidebar: [
      {
        text: '使用指南',
        items: [
          {
            text: '模块介绍',
            link: '/Introduction'
          },
          {
            text: '快速开始',
            link: '/start'
          },
          {
            text: '交流反馈',
            link: '/Feedback'
          },
        ]
      },
      {
        text: '开发指北',
        items: [
          {
            text: 'Java脚本',
            link: '/java'
          }
        ]
      }
    ],
    lastUpdatedText: "最后更新",
    outlineTitle: "本页目录",
    editLink: {
      pattern: "https://github.com/mapleleafsb/miko-docs/main/:path",
      text: "在 github 上编辑此页",
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Xposed-Modules-Repo/miko.client'
      }
    ]
  }
})
