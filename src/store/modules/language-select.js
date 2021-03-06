import { loadLanguageList$, loadLanguageData$ } from '@/api/language.js'
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import enUS from 'ant-design-vue/lib/locale-provider/en_US'
// TODO 如果需要新增其它语言支持, 需要映入对应语言包
// import zhTW from 'ant-design-vue/lib/locale-provider/zh_TW'

const language = {
  state: {
    // 已选的语言
    selectedLanguage: '',
    // 语言数据
    languageData: {},
    // 可选的语言列表
    languageList: [],
    locale: zhCN,
    localeStr: 'zh-CN',
    i18nMap: {
      'zh-CN': zhCN,
      'en-US': enUS
      // TODO 如果需要新增其它语言支持, 这里也要做相应的映射
      // 'zh-TW': zhTW
    }
  },

  mutations: {
    SET_LANGUAGE_DATA: (state, { languageData, selectedLanguage }) => {
      state.languageData = languageData
      state.selectedLanguage = selectedLanguage
      state.locale = state.i18nMap[selectedLanguage]
      state.localeStr = selectedLanguage
    },
    SET_LANGUAGE_LIST: (state, { languageList }) => {
      state.languageList = languageList
    }
  },

  actions: {
    // 加载语言数据
    async loadLanguageData ({ commit }, { selectedLanguage = 'zh_CN' }) {
      const res = await loadLanguageData$({ languageCode: selectedLanguage })
      return new Promise((resolve, reject) => {
        console.log('语言数据变化:', res)
        commit('SET_LANGUAGE_DATA', { languageData: res, selectedLanguage })
        resolve(res)
      })
    },

    // 获取可选语言列表
    async loadLanguageList ({ commit }) {
      const res = await loadLanguageList$()
      console.log('语言列表:', res)
      commit('SET_LANGUAGE_LIST', { languageList: res })
    }

  }
}

export default language
