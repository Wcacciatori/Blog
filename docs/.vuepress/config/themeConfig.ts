import { VdoingThemeConfig } from "vuepress-theme-vdoing/types";

export default <VdoingThemeConfig>{
  logo: 'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171252440.jpg',
  nav: [
    { text: '首页', link: '/' },
    { text: '成电', items: [
        { text: '本科相关(软院)', link: '/software/' },
        { text: '硕士相关(计院&国卓院)', link: '/computer/' }
      ] 
    },
    { text: '计算机', items: [
      { text: '嵌入式', link: '/embedded/' },
      { text: '大模型', link: '/LLM/' }
    ] 
  },
    {
      text: 'tips', items: [
        { text: '网站搭建', link: '/Blog/' }
      ]
    },
  ],
  sidebar: 'structuring',

  // // 编辑此页配置
  // repo: 'Peter-JXL/vuepress-learn',
  // docsDir: 'docs',
  // editLinks: true,
  // editLinkText: '编辑此页',
  bodyBgImg:[
    'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171428743.jpg',
    'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171428742.jpg',
    'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171428741.jpg',
    'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171428739.jpg',
    'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171428738.jpg',
    'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171428737.jpg',
    'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171428736.jpg',
    'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171428735.jpg',
    'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171428734.jpg',
    'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171428733.png',
    'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171428732.png',
    'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171428727.jpg',
    'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171428728.jpg',
    'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171428730.jpg',
    'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171428731.jpg',
    'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171428726.jpg',
    'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171428725.jpg',
  ],
  bodyBgImgOpacity: 0.8,
  bodyBgImgInterval: 8,
  lastUpdated: '上次更新', 

  // 页脚
  footer: {
    createYear: 2022
  },
}