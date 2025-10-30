import { VdoingThemeConfig } from "vuepress-theme-vdoing/types";

export default <VdoingThemeConfig>{
  logo: 'https://raw.githubusercontent.com/Wcacciatori/imgs/main/imgs/20251029200734947.png',
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
    'https://raw.githubusercontent.com/Wcacciatori/imgs/main/imgs/20251029202245101.jpg',
    'https://raw.githubusercontent.com/Wcacciatori/imgs/main/imgs/20251030164329448.jpg',
    'https://raw.githubusercontent.com/Wcacciatori/imgs/main/imgs/20251030164310020.png',
    'https://raw.githubusercontent.com/Wcacciatori/imgs/main/imgs/20251030164247373.jpg',
    'https://raw.githubusercontent.com/Wcacciatori/imgs/main/imgs/20251030164210262.jpg',
    'https://raw.githubusercontent.com/Wcacciatori/imgs/main/imgs/20251030164208077.jpg',
    'https://raw.githubusercontent.com/Wcacciatori/imgs/main/imgs/20251030164206847.jpg',
    'https://raw.githubusercontent.com/Wcacciatori/imgs/main/imgs/20251030164205712.jpg',
    'https://raw.githubusercontent.com/Wcacciatori/imgs/main/imgs/20251030164201471.jpg',
    'https://raw.githubusercontent.com/Wcacciatori/imgs/main/imgs/20251030164155284.png',
    'https://raw.githubusercontent.com/Wcacciatori/imgs/main/imgs/20251030164157525.jpg',
    'https://raw.githubusercontent.com/Wcacciatori/imgs/main/imgs/20251030164154055.jpg',
    'https://raw.githubusercontent.com/Wcacciatori/imgs/main/imgs/20251030164152761.jpg',
    'https://raw.githubusercontent.com/Wcacciatori/imgs/main/imgs/20251030164149226.jpg',
    'https://raw.githubusercontent.com/Wcacciatori/imgs/main/imgs/20251030164150437.jpg',
    'https://raw.githubusercontent.com/Wcacciatori/imgs/main/imgs/20251030164140890.jpg'
  ],
  bodyBgImgOpacity: 0.8,
  bodyBgImgInterval: 8,
  lastUpdated: '上次更新', 

  // 页脚
  footer: {
    createYear: 2022
  },
}