<template>
  <a-dropdown>
    <span class="action ant-dropdown-link user-dropdown-menu">
      <a-icon type="global"/>
    </span>
    <a-menu slot="overlay" class="user-dropdown-menu-wrapper">
      <a-menu-item v-for="(item,idx) in languageList" :key="idx" @click="handleLanguageChange(item.code)">
        {{ item.name }}
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
import { mapActions } from 'vuex'
import { setDocumentTitle, domTitle } from '@/utils/domUtil'
import WinterUtil from '@/utils/WinterUtil'
import moment from 'moment'

const localeSessionKey = '_i18n-'
export default {
  name: 'LanguageSelect',
  components: {},
  created () {
    console.log('路由变化...')
    this.loadLanguageList()
    const _this = this
    let localeKey = WinterUtil.getJsSessionItem(localeSessionKey)
    if (WinterUtil.strIsBlank(localeKey)) {
      localeKey = 'zh-CN'
    }
    this.changeLanguage(localeKey).then(() => {
      _this.setBrowserTabTitle(_this.$route)
    })
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        this.setBrowserTabTitle(val)
      },
      // 深度观察监听
      deep: false
    }
  },
  methods: {
    ...mapActions(['loadLanguageList', 'loadLanguageData']),
    setBrowserTabTitle (routeInfo) {
      if (routeInfo && routeInfo.meta && routeInfo.meta.title && routeInfo.meta.title !== '') {
        setDocumentTitle(this.$t(routeInfo.meta.title) + ' - ' + domTitle)
      }
    },
    async changeLanguage (selectedLanguage) {
      this.locale = selectedLanguage
      moment.locale(selectedLanguage)
      const res = await this.loadLanguageData({ selectedLanguage })
      this.$i18n.locale = selectedLanguage
      this.$i18n.setLocaleMessage(selectedLanguage, res)
    },
    handleLanguageChange (selectedLanguage) {
      const _this = this
      this.changeLanguage(selectedLanguage).then(() => {
        WinterUtil.setJsSessionItem(localeSessionKey, selectedLanguage)
        _this.setBrowserTabTitle(_this.$route)
      })
    }
  },
  computed: {
    selectedLanguage () {
      return this.$store.state.language.selectedLanguage
    },
    languageList () {
      return this.$store.state.language.languageList
    }
  }
}
</script>
