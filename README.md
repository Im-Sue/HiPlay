<h1 align="center">Ant-Design-Pro-Vue-Extends</h1>

## 写在前面

本项目是基于Ant-Design-Pro-Vue, 结合实际开发需求的扩展.

### 扩展点:

* 国际化支持: 支持从远程服务器加载数据, 实现国际化(包括: 菜单国际化, 浏览器tab标题的国际化, ui文案的国际化)
* 动态菜单支持: 支持从远程服务器加载数据, 实现菜单的动态化(与原pro的区别为,菜单数据不再与路由数据直接相关)
* 默认改为按需加载(原pro默认使用全量加载)

### 如何加载自己项目的国际化数据

当前项目使用了vuex, 因此这个数据实际是存储在vuex中.

[src/store/modules/language-select.js](src/store/modules/language-select.js)

方法说明:

`loadLanguageList` 加载区域语言列表

`loadLanguageData` 加载特定区域语言数据

数据格式:

区域语言列表数据格式参考:
 
[public/api/language-list.json](public/api/language-list.json)

区域语言数据格式参考: 

[public/api/language-data-zh-CN.json](public/api/language-data-zh-CN.json)

### 如何加载自己项目的动态菜单数据

当前项目使用了vuex, 因此这个数据实际是存储在vuex中.

[src/store/modules/menu.js](src/store/modules/menu.js)

方法说明:

`loadMenuData` 加载菜单数据

数据格式:

菜单数据格式参考:

[public/api/menu.json](public/api/menu.json)

### 菜单属性说明


| 属性名 | 是否数据类型 | 是否必须  | 作用 | 其它说明 |
| --- | --- | :-: | :-- | :-- |
| path | String | 是 |  1.访问路径 2.作为组件的key(用于选中菜单的高亮)|  |
| meta | Object | 是 | 菜单其它信息 |  |
| meta.title | String | 是 | 菜单名称 |  |
| icon | string | 否 | 菜单图标 |  |
| permission | array<string> | 是 | 该界面下拥有哪些可控制的权限 |  |


## 如果只需要一个空的项目可以使用`blank`分支

## 原pro相关


- 原pro预览: https://preview.pro.loacg.com
- 原pro首页: https://pro.loacg.com
- 原pro文档: https://pro.loacg.com/docs/getting-started
- 原pro更新日志: https://pro.loacg.com/docs/changelog
- 原pro的github: https://github.com/sendya/ant-design-pro-vue
- 原pro常见问题: https://pro.loacg.com/docs/faq
- ant design of vue: https://ant-design-vue.gitee.io/docs/vue/introduce-cn/


Overview
----

基于 [Ant Design of Vue](https://vuecomponent.github.io/ant-design-vue/docs/vue/introduce-cn/) 实现的 [Ant Design Pro](https://pro.ant.design/) 

![工作台-多标签模式](https://images.gitee.com/uploads/images/2019/0613/132353_128368f6_364524.jpeg)

![工作台+设置菜单](https://images.gitee.com/uploads/images/2019/0613/132352_f9b684b1_364524.png)

![个人设置](https://images.gitee.com/uploads/images/2019/0613/132352_bfba8339_364524.png)


环境和依赖
----

- node
- yarn
- webpack
- eslint
- @vue/cli ~3
- [ant-design-vue](https://github.com/vueComponent/ant-design-vue) - Ant Design Of Vue 实现
- [vue-cropper](https://github.com/xyxiao001/vue-cropper) - 头像裁剪组件
- [@antv/g2](https://antv.alipay.com/zh-cn/index.html) - Alipay AntV 数据可视化图表
- [Viser-vue](https://viserjs.github.io/docs.html#/viser/guide/installation)  - antv/g2 封装实现
- vue-i18n 国际化实现
- axios web请求插件

> 请注意，我们强烈建议本项目使用 [Yarn](https://yarnpkg.com/) 包管理工具，这样可以与本项目演示站所加载完全相同的依赖版本 (yarn.lock) 。由于我们没有对依赖进行强制的版本控制，采用非 yarn 包管理进行引入时，可能由于 Pro 所依赖的库已经升级版本而引入了新版本所导致的问题。作者可能会由于时间问题无法及时排查而导致您采用本项目作为基项目而出现问题。



- 安装依赖
```
yarn install
```

- 开发模式运行
```
yarn run serve
```

- 编译项目
```
yarn run build
```

- 静态代码检查
```
yarn run lint
```



其他说明
----

- **关于 Issue 反馈 (重要!重要!重要!) 请在开 *Issue* 前，先阅读该内容：[Issue / PR 编写建议](https://github.com/sendya/ant-design-pro-vue/issues/90)** 

- 项目使用的 [vue-cli3](https://cli.vuejs.org/guide/), 请更新您的 cli

- 关闭 Eslint (不推荐) 移除 `package.json` 中 `eslintConfig` 整个节点代码, `vue.config.js` 下的 `lintOnSave` 值改为 `false`

- 修改 Ant Design 配色，在文件 `vue.config.js` 中，其他 less 变量覆盖参考 [ant design](https://ant.design/docs/react/customize-theme-cn) 官方说明
```ecmascript 6
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          /* less 变量覆盖，用于自定义 ant design 主题 */

          'primary-color': '#F5222D',
          'link-color': '#F5222D',
          'border-radius-base': '4px',
        },
        javascriptEnabled: true,
      }
    }
  }
```
- **使用polyfill兼容至 IE10**

## 浏览器兼容

Modern browsers and IE10.

| [<img src="https://images.gitee.com/uploads/images/2019/0613/132353_cf329e68_364524.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://images.gitee.com/uploads/images/2019/0613/132354_a291092d_364524.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://images.gitee.com/uploads/images/2019/0613/132352_6c488490_364524.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://images.gitee.com/uploads/images/2019/0613/132359_a82d00df_364524.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://images.gitee.com/uploads/images/2019/0613/132354_0dd2780e_364524.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --- | --- | --- | --- | --- |
| IE10, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |
