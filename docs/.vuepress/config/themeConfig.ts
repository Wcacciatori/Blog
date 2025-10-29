import { VdoingThemeConfig } from "vuepress-theme-vdoing/types";

export default <VdoingThemeConfig>{
  logo: 'https://raw.githubusercontent.com/Wcacciatori/imgs/main/imgs/20251029200734947.png',
  nav: [
    { text: '首页', link: '/' },
    { text: '成电', items: [
        { text: '成电1', link: '/Basic1/' },
        { text: '成电2', link: '/Basic2/' }
      ] 
    },
    {
      text: '学习', items: [
        { text: 'JavaSE', link: '/JavaSE/' },
        { text: 'JavaEE', link: '/JavaEE/' }
      ]
    },
  ],
  sidebar: 'structuring',

  // // 编辑此页配置
  // repo: 'Peter-JXL/vuepress-learn',
  // docsDir: 'docs',
  // editLinks: true,
  // editLinkText: '编辑此页',
  bodyBgImg:'https://raw.githubusercontent.com/Wcacciatori/imgs/main/imgs/20251029202245101.jpg',
  bodyBgImgOpacity: 0.5,
  lastUpdated: '上次更新', 

  // 页脚
  footer: {
    createYear: 2022
  },
}