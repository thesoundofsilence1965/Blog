(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{430:function(t,s,a){t.exports=a.p+"assets/img/1.94be0e21.png"},431:function(t,s,a){t.exports=a.p+"assets/img/2.44c78bb5.png"},432:function(t,s,a){t.exports=a.p+"assets/img/3.4f9a6d86.png"},433:function(t,s,a){t.exports=a.p+"assets/img/4.fc61c3f9.png"},434:function(t,s,a){t.exports=a.p+"assets/img/5.23bb9867.png"},617:function(t,s,a){"use strict";a.r(s);var n=a(28),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"旋转数组的最小数字"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#旋转数组的最小数字"}},[t._v("#")]),t._v(" 旋转数组的最小数字")]),t._v(" "),n("h2",{attrs:{id:"题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),n("p",[t._v("把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。\n输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。\n例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为 1。\nNOTE：给出的所有元素都大于 0，若数组大小为 0，请返回 0。。")]),t._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),n("p",[t._v("设置 "),n("code",[t._v("left")]),t._v(", "),n("code",[t._v("right")]),t._v(" 指针分别指向 "),n("code",[t._v("numbers")]),t._v(" 数组左右两端，"),n("code",[t._v("mid = mid = Math.floor((left + right) / 2)")]),t._v(" 为每次二分的中点），可分为以下三种情况：")]),t._v(" "),n("ul",[n("li",[t._v("当 "),n("code",[t._v("numbers[mid] > numbers[right]")]),t._v(" 时： "),n("code",[t._v("mid")]),t._v(" 一定在左排序数组中，即旋转点 "),n("code",[t._v("mid")]),t._v(" 一定在 "),n("code",[t._v("[mid+1,right]")]),t._v(" 闭区间内，因此执行 "),n("code",[t._v("left = mid + 1")]),t._v("；")]),t._v(" "),n("li",[t._v("当 "),n("code",[t._v("numbers[mid] < numbers[right]")]),t._v(" 时： "),n("code",[t._v("mid")]),t._v(" 一定在右排序数组中，即旋转点 "),n("code",[t._v("mid")]),t._v(" 一定在 "),n("code",[t._v("[left,mid+1]")]),t._v(" 闭区间内，因此执行 "),n("code",[t._v("right = mid")]),t._v("；")]),t._v(" "),n("li",[t._v("当 "),n("code",[t._v("numbers[mid] === numbers[right]")]),t._v(" 时： 无法判断 "),n("code",[t._v("mid")]),t._v(" 在哪个排序数组中，即无法判断旋转点 "),n("code",[t._v("mid")]),t._v(" 在"),n("code",[t._v("[mid+1,right]")]),t._v("还是"),n("code",[t._v("[left,mid+1]")]),t._v("区间中。解决方案： 执行"),n("code",[t._v("right=right-1")]),t._v(" 缩小判断范围")])]),t._v(" "),n("p",[t._v("当 "),n("code",[t._v("left===right")]),t._v(" 时跳出二分循环，并返回 "),n("code",[t._v("numbers[left]")]),t._v(" 即可。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(430),alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:a(431),alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:a(432),alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:a(433),alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:a(434),alt:""}})]),t._v(" "),n("h2",{attrs:{id:"代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("minArray")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("numbers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("numbers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" numbers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    mid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("numbers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" numbers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("numbers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" numbers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      right"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" numbers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);