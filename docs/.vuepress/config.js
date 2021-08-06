/*
 * @Author: Shusheng
 * @Date: 2020-12-10 20:54:41
 * @LastEditTime: 2021-08-06 11:03:08
 * @LastEditors: Shusheng
 * @Description:
 */
module.exports = {
  title: '前端之道',
  description: 'shusheng study react',
  themeConfig: {
    // 导航栏
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Guide', link: '/JavaScript/'},
      {text: 'React', link: '/react/'},
      {text: 'External', link: 'https://google.com'},
    ],
    // 侧边栏
    sidebar: {
      '/JavaScript/': [
        {
          title: 'JavaScript', // 必要的
          path: '/JavaScript/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 3, // 可选的, 默认值是 1
          children: [
            {title: 'this', path: '/JavaScript/this'},
            {title: 'variable', path: '/JavaScript/variable'},
          ],
          initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        },
        {
          title: 'http',
          children: [
            {title: 'this', path: '/JavaScript/this'},
            {title: 'variable', path: '/JavaScript/variable'},
          ],
          initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        },
        // sidebarDepth: 3, //左侧导航显示的层级
      ],
      '/react/': [
        {
          title: '目录',
          children: [
            {
              title: 'react-reconciler',
              path: '/react/ReactReconciler/index',
              children: [{title: 'ReactWorkTags', path: '/react/ReactReconciler/ReactWorkTags'}],
            },
            {title: 'variable', path: '/JavaScript/variable'},
          ],
          initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        },
      ],
    },
  },
};
