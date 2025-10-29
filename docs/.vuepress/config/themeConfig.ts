/*
 * @Author: WeiJianYe
 * @Date: 2025-10-28 16:45:36
 * @LastEditors: git config Wcacciatori
 * @LastEditTime: 2025-10-29 14:52:37
 * @FilePath: \blog\docs\.vuepress\config\themeConfig.ts
 * @Description: 
 * 
 * Copyright (c) 2025 by Wcacciatori, All Rights Reserved. 
 */
import { VdoingThemeConfig } from "vuepress-theme-vdoing/types";

export default <VdoingThemeConfig>{
  logo: 'https://s3.bmp.ovh/imgs/2022/12/02/bc7428e3916c3a4c.jpg',
  base: '/',
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
  bodyBgImg:'/头像.jpg',
  bodyBgImgOpacity: 0.2,
  lastUpdated: '上次更新', 

  // 页脚
  footer: {
    createYear: 2022,
    copyrightInfo: `<a href='https://beian.miit.gov.cn'>粤ICP备2022067627号-1</a>  
      <a href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44011302003646'>粤公网安备 44011302003646号</a>
      `
  },
}