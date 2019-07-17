按需加载 减小打包
====



## 按需引入组件依赖

`Ant Design Pro Vue` 默认编码工作并不支持按需引入，不过可以通过以下操作结合 [Ant Design Of Vue](https://vuecomponent.github.io/ant-design-vue/docs/vue/introduce-cn/) 官方文档来进行按需引入。

- 增加项目按需引入依赖
- 修改引入组件方式



1. 增加按需引入所需依赖  `babel-plugin-import` 
并且修改文件 `babel.config.js` 
   ```ecmascript 6
   module.exports = {
     presets: [
       '@vue/app'
     ],
     plugins: [
       [ "import", {
         "libraryName": "ant-design-vue",
         "libraryDirectory": "es",
         "style": "css"
       } ]
     ]
   }
   ```


2. 修改引入组件方式 (注意，这只是一个例子，请完整引入你所需要的组件)

   文件 `@/core/lazy_lib/components_use.js`
   

   ```javascript
   
/* eslint-disable */
/**
 * 该文件是为了按需加载，剔除掉了一些不需要的框架组件。
 * 减少了编译支持库包大小
 *
 * 当需要更多组件依赖时，在该文件加入即可
 */
import Vue from 'vue'
import {
  LocaleProvider,
  Layout,
  Input,
  InputNumber,
  Button,
  Switch,
  Radio,
  Checkbox,
  Select,
  Card,
  Form,
  Row,
  Col,
  Modal,
  Table,
  Tabs,
  Icon,
  Badge,
  Popover,
  Dropdown,
  List,
  Avatar,
  Breadcrumb,
  Steps,
  Spin,
  Menu,
  Drawer,
  Tooltip,
  Alert,
  Tag,
  Divider,
  DatePicker,
  TimePicker,
  Upload,
  Progress,
  Skeleton,
  Popconfirm,
  message,
  notification
} from 'ant-design-vue'
// import VueCropper from 'vue-cropper'

Vue.use(LocaleProvider)
Vue.use(Layout)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Button)
Vue.use(Switch)
Vue.use(Radio)
Vue.use(Checkbox)
Vue.use(Select)
Vue.use(Card)
Vue.use(Form)
Vue.use(Row)
Vue.use(Col)
Vue.use(Modal)
Vue.use(Table)
Vue.use(Tabs)
Vue.use(Icon)
Vue.use(Badge)
Vue.use(Popover)
Vue.use(Dropdown)
Vue.use(List)
Vue.use(Avatar)
Vue.use(Breadcrumb)
Vue.use(Steps)
Vue.use(Spin)
Vue.use(Menu)
Vue.use(Drawer)
Vue.use(Tooltip)
Vue.use(Alert)
Vue.use(Tag)
Vue.use(Divider)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Upload)
Vue.use(Progress)
Vue.use(Skeleton)
Vue.use(Popconfirm)
// Vue.use(VueCropper)
Vue.use(notification)

Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$message = message
Vue.prototype.$notification = notification
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning
   ```


3. 修改 `main.js` 文件,将 `import './core/use'` 改为 `import './core/lazy_use'` 文件即可，如下

   ```javascript
   
   // ie polyfill
   import '@babel/polyfill'
   
   import Vue from 'vue'
   import App from './App.vue'
   import router from './router'
   import store from './store/'
   import { VueAxios } from './utils/request'
   
   // mock
   import './mock'
   
   import bootstrap from './core/bootstrap'
   import './core/lazy_use'
   import './permission' // permission control
   import './utils/filter' // global filter
   
   Vue.config.productionTip = false
   
   // mount axios Vue.$http and this.$http
   Vue.use(VueAxios)
   
   new Vue({
     router,
     store,
     created () {
       bootstrap()
     },
     render: h => h(App)
   }).$mount('#app')

   ```

**具体完整实现可参考分支 [feature/demand_load](https://github.com/sendya/ant-design-pro-vue/tree/feature/demand_load)**







## 其他 减少打包大小



1.   Ant Design Vue 1.2.x 版本起，采用的 ant-design 官方方案 svg Icon 组件，整个项目打包会变大很多，图标进行按需加载可参考 https://github.com/HeskeyBaozi/reduce-antd-icons-bundle-demo
2. moment 按需加载 可参考 https://github.com/jmblog/how-to-optimize-momentjs-with-webpack