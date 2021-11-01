const path = require('path');
const dirTree = require('directory-tree');
const DOCS_PATH = path.resolve(__dirname, '../docs/noteDocs');

console.log('DOCS_PATH :>> ', DOCS_PATH);

function slidbarOptioins(tree = [], map = {}) {
  if (!Array.isArray(tree)) return [];
  return tree.map((item) => {
    if (item.type === 'directory') {
      return {
        title: item.name,
        path: `/noteDocs${item.path.split('noteDocs')[1]}/`,
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 3, // 可选的, 默认值是 1
        children: slidbarOptioins(item.children),
      };
    } else {
      return {
        title: item.name.replace(`${item.name.split('-')[0]}-`, '').replace(/\.md/, ''),
        path: `/noteDocs${item.path.split('noteDocs')[1].replace(/\.md/, '')}`,
      };
      // if (['README.md', 'index.md'].includes(item.name)) {
      //   return {
      //     title: item.name.replace(/\.md/, ''),
      //     path: `/noteDocs${item.path.split('noteDocs')[1].replace(/(README|index)\.md/, '')}`,
      //     collapsable: true, // 可选的, 默认值是 true,
      //     sidebarDepth: 3, // 可选的, 默认值是 1
      //   };
      // }
    }
  });
}

function handleSlidbar(tree) {
  const hashMap = {};
  for (let item of tree) {
    hashMap[item.path] = item.children
  }
  return hashMap;
}

function AutoSlidbarOptions(docsPath = DOCS_PATH) {
  const filteredTree = dirTree(docsPath, {
    extensions: /\.md$/,
    normalizePath: true,
    exclude: /(README|index)\.md/,
    attributes: ['size', 'type', 'extension'],
  });
  const result = slidbarOptioins(filteredTree.children);
  return handleSlidbar(result);
}

module.exports = AutoSlidbarOptions;
