import { loadMenuData$ } from '@/api/menu.js'

const menu = {
  state: {
    // 菜单数据
    menuData: []
  },

  mutations: {
    SET_MENU_DATA: (state, { menuData }) => {
      state.menuData = menuData
    }
  },

  actions: {
    // 加载语言数据
    async loadMenuData ({ commit }) {
      // TODO 实际项目开发修改 `loadMenuData$` 方法为正确的后台地址, 就可以动态构建菜单了
      const res = await loadMenuData$()
      console.log('菜单数据:', res)
      // 实际项目开发的时候, 不需要进行eval转换
      commit('SET_MENU_DATA', { menuData: eval(res) }) //eslint-disable-line
    }
  }
}

export default menu
