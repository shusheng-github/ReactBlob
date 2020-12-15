module.exports = {
  title: 'JavaScript',
  description: 'shusheng study react',
  themeConfig: {
    // 导航栏
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Guide', link: '/JavaScript/'},
      {text: 'External', link: 'https://google.com'},
    ],
    // 侧边栏
    sidebar: [
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
    ],
    sidebarDepth: 3, //左侧导航显示的层级
  },
};
