const path = require("path");
module.exports = {
  base: "/Blog/",
  dest: "dist",
  title: "难凉热血",
  markdown: {
    lineNumbers: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "public", "assets")
      }
    }
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        href: `/logo.png`
      }
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      }
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black"
      }
    ],
    [
      "meta",
      {
        name: "msapplication-TileColor",
        content: "#000000"
      }
    ]
  ],
  themeConfig: {
    repo: "NLRX-WJC/Blog",
    editLinks: true,
    docsDir: "docs",
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdated: "上次更新",
    sidebarDepth: 0,
    logo: '/logo.png',
    sidebar: [
      {
        title: "关于作者",
        collapsable: true,
        path: '/about/',
      },
      {
        title: "React",
        collapsable: true,
        sidebarDepth: 2,
        children: [
          ["react/01.React基础.md", "01.React基础"],
        ]
      },
      {
        title: "JavaScript",
        collapsable: true,
        sidebarDepth: 2,
        children: [
          ["javascript/01.原生JS封装_new函数，实现new关键字的功能.md", "01.原生JS封装_new函数，实现new关键字的功能"],
          ["javascript/02.通俗易懂了解函数的防抖和节流.md", "02.通俗易懂了解函数的防抖和节流"],
          ["javascript/03.原生JS实现call,apply,bind函数.md", "03.原生JS实现call,apply,bind函数"],
          ["javascript/04.javaScript中this到底指向谁.md", "04.javaScript中this到底指向谁"],
          ["javascript/05.JavaScript中继承的多种方式和优缺点.md", "05.JavaScript中继承的多种方式和优缺点"],
        ]
      },
      {
        title: "webpack",
        collapsable: true,
        sidebarDepth: 2,
        children: [
          ["webpack/01.常用的webpack优化方法.md", "01.常用的webpack优化方法"],
          ["webpack/02.从0开始编写webpack插件.md", "02.从0开始编写webpack插件"]
        ]
      },
      {
        title: "数据结构",
        collapsable: true,
        sidebarDepth: 2,
        children: [
          ["data-structure/01.原生JS实现栈结构.md", "01.原生JS实现栈结构"],
          ["data-structure/02.原生JS实现队结构.md", "02.原生JS实现队结构"],
          ["data-structure/03.原生JS实现单向链表.md", "03.原生JS实现单向链表"],
          ["data-structure/04.原生JS实现双向链表.md", "04.原生JS实现双向链表"],
          ["data-structure/05.原生JS实现二叉搜索树.md", "05.原生JS实现二叉搜索树"],
          ["data-structure/06.原生JS实现集合结构.md", "06.原生JS实现集合结构"],
        ]
      },
      {
        title: "使用TypeScript重构axios",
        collapsable: true,
        children: [
          ["axios/01.写在最前面.md", "01.写在最前面"],
          ["axios/02.项目起手，跑通流程.md", "02.项目起手，跑通流程"],
          ["axios/03.实现基础功能：处理get请求url参数.md", "03.实现基础功能：处理get请求url参数"],
          ["axios/04.实现基础功能：处理post请求参数.md", "04.实现基础功能：处理post请求参数"],
          ["axios/05.实现基础功能：处理请求的header.md", "05.实现基础功能：处理请求的header"],
          ["axios/06.实现基础功能：获取响应数据.md", "06.实现基础功能：获取响应数据"],
          ["axios/07.实现基础功能：处理响应header.md", "07.实现基础功能：处理响应header"],
          ["axios/08.实现基础功能：处理响应data.md", "08.实现基础功能：处理响应data"],
          ["axios/09.异常处理：基础版.md", "09.异常处理：基础版"],
          ["axios/10.异常处理：增强版.md", "10.异常处理：增强版"],
          ["axios/11.接口扩展.md", "11.接口扩展"],
          ["axios/12.增加参数.md", "12.增加参数"],
          ["axios/13.让响应数据支持泛型.md", "13.让响应数据支持泛型"],
          ["axios/14.实现拦截器.md", "14.实现拦截器"],
          ["axios/15.默认配置.md", "15.默认配置"],
          ["axios/16.请求和响应数据配置化.md", "16.请求和响应数据配置化"],
          ["axios/17.增加axios.create接口.md", "17.增加axios.create接口"],
          ["axios/18.请求取消功能：总体思路.md", "18.请求取消功能：总体思路"],
          ["axios/19.请求取消功能：实现第二种使用方式.md", "19.请求取消功能：实现第二种使用方式"],
          ["axios/20.请求取消功能：实现第一种使用方式.md", "20.请求取消功能：实现第一种使用方式"],
          ["axios/21.请求取消功能：添加axios.isCancel接口.md", "21.请求取消功能：添加axios.isCancel接口"],
          ["axios/21.请求取消功能：添加axios.isCancel接口.md", "21.请求取消功能：添加axios.isCancel接口"],
          ["axios/22.请求取消功能：收尾.md", "22.请求取消功能：收尾"],
          ["axios/23.添加withCredentials属性.md", "23.添加withCredentials属性"],
          ["axios/24.防御XSRF攻击.md", "24.防御XSRF攻击"],
          ["axios/25.文件上传下载进度监控.md", "25.文件上传下载进度监控"],
        ]
      },
      {
        title: "逐行剖析Vue.js源码",
        collapsable: true,
        children: [
          {
            title: "写在最前面",
            collapsable: true,
            path: '/learn-vue-source-code/start/',
          },
          {
            title: "变化侦测篇",
            collapsable: true,
            path: '/learn-vue-source-code/reactive/',
            children: [
              ["/learn-vue-source-code/reactive/", "综述"],
              ["/learn-vue-source-code/reactive/object", "Object的变化侦测"],
              ["/learn-vue-source-code/reactive/array", "Array的变化侦测"]
            ]
          },
          {
            title: "虚拟DOM篇",
            collapsable: true,
            path: '/learn-vue-source-code/virtualDOM/',
            children: [
              ["/learn-vue-source-code/virtualDOM/", "Vue中的虚拟DOM"],
              ["/learn-vue-source-code/virtualDOM/patch", "Vue中的DOM-Diff"],
              ["/learn-vue-source-code/virtualDOM/updataChildren", "更新子节点"],
              ["/learn-vue-source-code/virtualDOM/optimizeUpdataChildren", "优化更新子节点"]
            ]
          },
          {
            title: "模板编译篇",
            collapsable: true,
            path: '/learn-vue-source-code/complie/',
            children: [
              ["/learn-vue-source-code/complie/", "综述"],
              ["/learn-vue-source-code/complie/parse", "模板解析阶段(整体运行流程)"],
              ["/learn-vue-source-code/complie/HTMLParse", "模板解析阶段(HTML解析器)"],
              ["/learn-vue-source-code/complie/textParse", "模板解析阶段(文本解析器)"],
              ["/learn-vue-source-code/complie/optimize", "优化阶段"],
              ["/learn-vue-source-code/complie/codegen", "代码生成阶段"],
              ["/learn-vue-source-code/complie/summary", "总结"]
            ]
          },
          {
            title: "生命周期篇",
            collapsable: true,
            path: '/learn-vue-source-code/lifecycle/',
            children: [
              ["/learn-vue-source-code/lifecycle/", "综述"],
              ["/learn-vue-source-code/lifecycle/newVue", "初始化阶段(new Vue)"],
              ["/learn-vue-source-code/lifecycle/initLifecycle", "初始化阶段(initLifecycle)"],
              ["/learn-vue-source-code/lifecycle/initEvents", "初始化阶段(initEvents)"],
              ["/learn-vue-source-code/lifecycle/initInjections", "初始化阶段(initInjections)"],
              ["/learn-vue-source-code/lifecycle/initState", "初始化阶段(initState)"],
              ["/learn-vue-source-code/lifecycle/templateComplie", "模板编译阶段"],
              ["/learn-vue-source-code/lifecycle/mount", "挂载阶段"],
              ["/learn-vue-source-code/lifecycle/destory", "销毁阶段"]
            ]
          },
          {
            title: "实例方法篇",
            collapsable: true,
            path: '/learn-vue-source-code/instanceMethods/data',
            children: [
              ["/learn-vue-source-code/instanceMethods/data", "数据相关的方法"],
              ["/learn-vue-source-code/instanceMethods/event", "事件相关的方法"],
              ["/learn-vue-source-code/instanceMethods/lifecycle", "生命周期相关的方法"]
            ]
          },
          {
            title: "全局API篇",
            collapsable: true,
            path: '/learn-vue-source-code/globalAPI/',
            children: [["/learn-vue-source-code/globalAPI/", "全局API分析"]]
          },
          {
            title: "过滤器篇",
            collapsable: true,
            path: '/learn-vue-source-code/filter/',
            children: [
              ["/learn-vue-source-code/filter/", "用法回顾"],
              ["/learn-vue-source-code/filter/filterPrinciple", "工作原理"],
              ["/learn-vue-source-code/filter/parseFilters", "解析过滤器"]
            ]
          },
          {
            title: "指令篇",
            collapsable: true,
            path: '/learn-vue-source-code/directives/customDirectives',
            children: [["/learn-vue-source-code/directives/customDirectives", "自定义指令"]]
          },
          {
            title: "内置组件篇",
            collapsable: true,
            path: '/learn-vue-source-code/BuiltInComponents/keep-alive',
            children: [["/learn-vue-source-code/BuiltInComponents/keep-alive", "keep-alive"]]
          }
        ]
      },
    ]
  },
  plugins: [
    ["@vuepress/back-to-top", true],
    [
      "vuepress-plugin-medium-zoom",
      {
        options: {
          margin: 24,
          background: "white",
          scrollOffset: 0
        }
      }
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "文档内容有更新，点击刷新立即查看新内容。",
          buttonText: "刷新"
        }
      }
    ]
  ]
};
