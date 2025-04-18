import { defineConfig } from 'vitepress'
import tabsPlugin from '@red-asuka/vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Miko Docs",
  description: "A VitePress Site",
  lastUpdated: true,
  markdown: {
    config: (md) => {
      tabsPlugin(md)
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '主页',
        link: '/'
      },
      {
        text: '功能直男',
        link: '/start'
      },
      {
        text: '交流反馈',
        link: '/Feedback'
      },
      {
        text: '开发指北',
        link: '/java'
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
      },
      {
        text: '支持作者',
        items: [
          {
            text: 'Hiatus',
            link: '/donation#hiatus'
          },
          {
            text: '月信',
            link: '/donation#月信'
          }
        ]
      },
    ],
    lastUpdatedText: "最后更新",
    outlineTitle: "本页目录",
    editLink: {
      pattern: "https://github.com/mapleleafsb/miko-docs/blob/main/:path",
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
