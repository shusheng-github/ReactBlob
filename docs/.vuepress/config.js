/*
 * @Author: Shusheng
 * @Date: 2020-12-10 20:54:41
 * @LastEditTime: 2021-11-01 20:59:00
 * @LastEditors: Shusheng
 * @Description:
 */
const AutoSlidbarOptions = require('../../config/AutoSlidbarOptions');

module.exports = {
  title: '前端之道',
  description: 'shusheng study react',
  themeConfig: {
    // 导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/noteDocs/JavaScript/' },
      { text: 'React', link: '/noteDocs/react/' },
      { text: 'External', link: 'https://google.com' },
    ],
    // 侧边栏
    sidebar: AutoSlidbarOptions(),
  },
};
