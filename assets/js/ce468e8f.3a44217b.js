(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1455],{2122:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},9756:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}r.d(t,{Z:function(){return n}})},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=i,h=m["".concat(o,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(h,l(l({ref:t},p),{},{components:r})):n.createElement(h,l({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8721:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return o},default:function(){return p}});var n=r(2122),i=r(9756),a=(r(7294),r(3905)),l={id:"topics",title:"Topics"},s={unversionedId:"algorithms/topics",id:"algorithms/topics",isDocsHomePage:!1,title:"Topics",description:"Arrays",source:"@site/../contents/algorithms/topics.md",sourceDirName:"algorithms",slug:"/algorithms/topics",permalink:"/algorithms/topics",editUrl:"https://github.com/yangshun/tech-interview-handbook/edit/master/contents/../contents/algorithms/topics.md",version:"current",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1563155561,formattedLastUpdatedAt:"7/15/2019",frontMatter:{id:"topics",title:"Topics"}},o=[{value:"Arrays",id:"arrays",children:[]},{value:"Strings",id:"strings",children:[]},{value:"Sorting",id:"sorting",children:[]},{value:"Linked Lists",id:"linked-lists",children:[]},{value:"Stacks",id:"stacks",children:[]},{value:"Queues",id:"queues",children:[]},{value:"Hash tables",id:"hash-tables",children:[]},{value:"Trees",id:"trees",children:[]},{value:"Binary Search Trees",id:"binary-search-trees",children:[]},{value:"Heaps / Priority Queues",id:"heaps--priority-queues",children:[]},{value:"Graphs",id:"graphs",children:[]},{value:"Dynamic Programming",id:"dynamic-programming",children:[]},{value:"System Design",id:"system-design",children:[]}],u={toc:o};function p(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"arrays"},"Arrays"),(0,a.kt)("h2",{id:"strings"},"Strings"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Prefix trees (Tries)"),(0,a.kt)("li",{parentName:"ul"},"Suffix trees"),(0,a.kt)("li",{parentName:"ul"},"Suffix arrays"),(0,a.kt)("li",{parentName:"ul"},"KMP"),(0,a.kt)("li",{parentName:"ul"},"Rabin-Karp"),(0,a.kt)("li",{parentName:"ul"},"Boyer-Moore")),(0,a.kt)("h2",{id:"sorting"},"Sorting"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bubble sort"),(0,a.kt)("li",{parentName:"ul"},"Insertion sort"),(0,a.kt)("li",{parentName:"ul"},"Merge sort"),(0,a.kt)("li",{parentName:"ul"},"Quick sort"),(0,a.kt)("li",{parentName:"ul"},"Selection sort"),(0,a.kt)("li",{parentName:"ul"},"Bucket sort"),(0,a.kt)("li",{parentName:"ul"},"Radix sort"),(0,a.kt)("li",{parentName:"ul"},"Counting sort")),(0,a.kt)("h2",{id:"linked-lists"},"Linked Lists"),(0,a.kt)("h2",{id:"stacks"},"Stacks"),(0,a.kt)("h2",{id:"queues"},"Queues"),(0,a.kt)("h2",{id:"hash-tables"},"Hash tables"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Collision resolution algorithms")),(0,a.kt)("h2",{id:"trees"},"Trees"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"BFS"),(0,a.kt)("li",{parentName:"ul"},"DFS (inorder, postorder, preorder)"),(0,a.kt)("li",{parentName:"ul"},"Height")),(0,a.kt)("h2",{id:"binary-search-trees"},"Binary Search Trees"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Insert node"),(0,a.kt)("li",{parentName:"ul"},"Delete a node"),(0,a.kt)("li",{parentName:"ul"},"Find element in BST"),(0,a.kt)("li",{parentName:"ul"},"Find min, max element in BST"),(0,a.kt)("li",{parentName:"ul"},"Get successor element in tree"),(0,a.kt)("li",{parentName:"ul"},"Check if a binary tree is a BST or not")),(0,a.kt)("h2",{id:"heaps--priority-queues"},"Heaps / Priority Queues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Insert"),(0,a.kt)("li",{parentName:"ul"},"Bubble up"),(0,a.kt)("li",{parentName:"ul"},"Extract max"),(0,a.kt)("li",{parentName:"ul"},"Remove"),(0,a.kt)("li",{parentName:"ul"},"Heapify"),(0,a.kt)("li",{parentName:"ul"},"Heap sort")),(0,a.kt)("h2",{id:"graphs"},"Graphs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Various implementations",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Adjacency matrix"),(0,a.kt)("li",{parentName:"ul"},"Adjacency list"),(0,a.kt)("li",{parentName:"ul"},"Adjacency map"))),(0,a.kt)("li",{parentName:"ul"},"Single-source shortest path"),(0,a.kt)("li",{parentName:"ul"},"Dijkstra"),(0,a.kt)("li",{parentName:"ul"},"Bellman-Ford"),(0,a.kt)("li",{parentName:"ul"},"Topo sort"),(0,a.kt)("li",{parentName:"ul"},"MST"),(0,a.kt)("li",{parentName:"ul"},"Prim algorithm"),(0,a.kt)("li",{parentName:"ul"},"Kruskal's algorithm"),(0,a.kt)("li",{parentName:"ul"},"Union Find Data Structure"),(0,a.kt)("li",{parentName:"ul"},"Count connected components in a graph"),(0,a.kt)("li",{parentName:"ul"},"List strongly connected components in a graph"),(0,a.kt)("li",{parentName:"ul"},"Check for bipartite graph")),(0,a.kt)("h2",{id:"dynamic-programming"},"Dynamic Programming"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Count Change"),(0,a.kt)("li",{parentName:"ul"},"0-1 Knapsack")),(0,a.kt)("h2",{id:"system-design"},"System Design"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.hiredintech.com/system-design/"},"http://www.hiredintech.com/system-design/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.quora.com/How-do-I-prepare-to-answer-design-questions-in-a-technical-interview?redirected_qid=1500023"},"https://www.quora.com/How-do-I-prepare-to-answer-design-questions-in-a-technical-interview?redirected_qid=1500023")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://blog.gainlo.co/index.php/2015/10/22/8-things-you-need-to-know-before-system-design-interviews/"},"http://blog.gainlo.co/index.php/2015/10/22/8-things-you-need-to-know-before-system-design-interviews/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/donnemartin/system-design-primer"},"https://github.com/donnemartin/system-design-primer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/jwasham/coding-interview-university/blob/master/extras/cheat%20sheets/system-design.pdf"},"https://github.com/jwasham/coding-interview-university/blob/master/extras/cheat%20sheets/system-design.pdf"))))}p.isMDXComponent=!0}}]);