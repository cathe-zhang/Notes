(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{201:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("每次渲染时调用。该方法会创建一个虚拟DOM，是一个class组件唯一必需的方法。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("在组件接收新的props或state时调用，可以说是react性能优化中最重要的一环。可以在此对比更新前后两个props和state是否相同来决定返回值，返回false则可以阻止更新。")]),t._v(" "),t._m(6),t._v(" "),e("p",[t._v("组件接收到新的props或state重新渲染完成之后立即被调用，可以在这里访问并修改DOM。")]),t._v(" "),e("p",[t._v("注意:")]),t._v(" "),t._m(7),t._v(" "),e("p",[t._v("使用示例：")]),t._v(" "),t._m(8),t._m(9),t._v(" "),e("p",[t._v("组件即将卸载时调用。为防止不必要的性能消耗，应该在此方法中清除组件中的定时器和事件监听器。")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),e("p",[t._v("组件即将挂载时调用，只调用一次，此时可以修改state，但还不能访问DOM节点。")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),e("p",[t._v("组件接收到新的props或state即将进行重新渲染之前被调用。")]),t._v(" "),e("p",[t._v("注意:")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000004168886?utm_source=tag-newest",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://segmentfault.com/a/1190000004168886?utm_source=tag-newest"),e("OutboundLink")],1)])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"react的生命周期概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react的生命周期概述"}},[this._v("#")]),this._v(" React的生命周期概述")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"常用的声明周期方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用的声明周期方法"}},[this._v("#")]),this._v(" 常用的声明周期方法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"render"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#render"}},[this._v("#")]),this._v(" "),s("code",[this._v("render")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"componentdidmount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#componentdidmount"}},[this._v("#")]),this._v(" "),s("code",[this._v("componentDidMount")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("组件挂载完成时调用，只调用一次。此方法被调用时，DOM已经加载完成，可以使用 "),s("code",[this._v("React.findDOMNode()")]),this._v("  访问真实的DOM节点。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"shouldcomponentupdate-nextprops-nextstate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shouldcomponentupdate-nextprops-nextstate"}},[this._v("#")]),this._v(" "),s("code",[this._v("shouldComponentUpdate(nextProps, nextState)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"componentdidupdate-prevprops-prevstate-snapshot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#componentdidupdate-prevprops-prevstate-snapshot"}},[this._v("#")]),this._v(" "),s("code",[this._v("componentDidUpdate(prevProps, prevState, snapshot)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("首次渲染不会执行此方法")]),this._v(" "),s("li",[this._v("如果组件实现了 "),s("code",[this._v("getSnapshotBeforeUpdate()")]),this._v(" 生命周期（不常用），则它的返回值将作为 "),s("code",[this._v("componentDidUpdate()")]),this._v(" 的第三个参数 “snapshot” 参数传递。否则此参数将为 undefined。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidUpdate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("prevProps")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 典型用法（不要忘记比较 props）：")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userID "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" prevProps"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchData")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"componentwillunmount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#componentwillunmount"}},[this._v("#")]),this._v(" "),s("code",[this._v("componentWillUnmount")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"过时的声明周期方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#过时的声明周期方法"}},[this._v("#")]),this._v(" 过时的声明周期方法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"unsafe-componentwillmount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unsafe-componentwillmount"}},[this._v("#")]),this._v(" "),s("code",[this._v("UNSAFE_componentWillMount")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"unsafe-componentwillreceiveprops-nextprops"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unsafe-componentwillreceiveprops-nextprops"}},[this._v("#")]),this._v(" "),s("code",[this._v("UNSAFE_componentWillReceiveProps")]),this._v("(nextProps)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("父组件的props改变时调用，"),s("code",[this._v("nextProps")]),this._v(" 为改变后的props。可以在这个方法中更新state以触发render重新渲染组件。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"unsafe-componentwillupdate-prevprops-prevstate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unsafe-componentwillupdate-prevprops-prevstate"}},[this._v("#")]),this._v(" "),s("code",[this._v("UNSAFE_componentWillUpdate(prevProps, prevState)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("不要在此方法中更新props或state")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[this._v("#")]),this._v(" 参考资料")])}],!1,null,null,null);s.default=n.exports}}]);