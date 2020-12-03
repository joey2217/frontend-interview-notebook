// type Sidebar = {
//   [sidebarId: string]:
//   | {
//     [sidebarCategory: string]: SidebarItem[];
//   }
//   | SidebarItem[];
// };

module.exports = {
  docs: [
    'doc1', 'mdx'
  ],
  base: [
    'base/html', 'base/css', 'base/js', 'base/computer-operating-system', 'base/computer-network', 'base/puzzle', 'base/algorithm', 'base/interview-questions', 'base/tool'
  ],
  js: [
    'js/built-in-types', 'js/equality-comparisons-and-sameness', 'js/prototype'
  ],
};

// someSidebar: {
//   JavaScript: ['js-built-in-types', 'js-equality-comparisons-and-sameness', 'js-prototype'],
//     Base: ['base-html', 'base-css', 'base-js', 'base-computer-operating-system', 'base-computer-network', 'base-puzzle', 'base-algorithm', 'base-interview-questions', 'base-tool'],
//   },