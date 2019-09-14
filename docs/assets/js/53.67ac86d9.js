(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{216:function(t,s,n){"use strict";n.r(s);var e=n(0),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),n("blockquote",[n("p",[n("a",{attrs:{href:"https://segmentfault.com/a/1190000015798675?utm_source=tag-newest",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),n("OutboundLink")],1)])]),t._v(" "),n("p",[t._v("备注：\n似乎有出现Jenkins自动化构建时yarn install找不到commitlint包的情况，重新执行即可。")])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"commitlint钩子配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commitlint钩子配置","aria-hidden":"true"}},[this._v("#")]),this._v(" CommitLint钩子配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("安装 "),s("code",[this._v("commitlint")]),this._v(" 和 "),s("code",[this._v("husky")]),this._v(" 依赖")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-cmd line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("npm install --save-dev @commitlint/config-conventional @commitlint/cli\nnpm install --save-dev husky\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("新建 "),s("code",[this._v("commitlint.config.js")]),this._v(" 文件")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@commitlint/config-conventional'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("@commitlint/config-conventional")]),this._v("提供了官方的规则扩展：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交\nci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交\ndocs：文档更新\nfeat：新增功能\nmerge：分支合并 Merge branch ? of ?\nfix：bug 修复\nperf：性能, 体验优化\nrefactor：重构代码(既没有新增功能，也没有修复 bug)\nstyle：不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)\ntest：新增测试用例或是更新现有测试\nrevert：回滚某个更早之前的提交\nchore：不属于以上类型的其他类型\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"3"}},[s("li",[this._v("配置 "),s("code",[this._v("package.json")]),this._v(" 文件\n添加husky字段：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-cmd line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('"husky": {\n  "hooks": {\n    "commit-msg": "commitlint -e $HUSKY_GIT_PARAMS"\n  }\n},\n')])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br"),s("span",{staticClass:"line-number"},[this._v("3")]),s("br"),s("span",{staticClass:"line-number"},[this._v("4")]),s("br"),s("span",{staticClass:"line-number"},[this._v("5")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"4"}},[s("li",[this._v("测试")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-git line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[this._v("git add .\ngit commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[this._v('"foo: this will fail"')]),this._v("\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br")])])}],!1,null,null,null);s.default=a.exports}}]);