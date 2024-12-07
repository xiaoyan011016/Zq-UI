import { defineConfig } from 'vitepress'

/* 
  需要将.vitepress目录下自带的catch缓存目录删除，否则github无法加载样式
*/

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Zq UI",
  description: "高仿UI组件库",
  base:"/Zq-UI/", //托管github会将仓库名Zq-UI添加作为前缀:/github/Zq-UI这种，添加加载确保可以正确访问路径加载资源
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
