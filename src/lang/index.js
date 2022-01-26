import Vue from 'vue'
import VueI18n, { LocaleMessages } from 'vue-i18n'
import * as cookie from '@/utils/cookies'

// 由window取設定，稍後我們會在main.js設置一些相關設定
const config = window['config']
Vue.use(VueI18n)

// 啟用i18N
const i18n = new VueI18n({
  locale: '',
  messages: {},
  silentTranslationWarn: true
})

// 預設語言
cookie.setLanguage('zh_tw')

const loadedLanguages = []

//取得現在的語言設定
export const getLocale = () => {
  const cookieLanguage = cookie.getLanguage()
  // from cookie
  if (cookieLanguage) {
    return cookieLanguage
  }

  // from default config
  if (config.LOCALE) {
    return config.LOCALE
  }
  return 'zh_tw'
}

const locale = getLocale()

// 設置語言的事件
const setI18nLanguage = (lang) => {
  i18n.locale = lang
  cookie.setLanguage(lang)
  console.log('###set lang: ', lang)
  return lang
}

export const loadLanguageAsync = async (lang) => {
  // 如果配置到同樣的語言value時
  if (i18n.locale === lang) {
    return setI18nLanguage(lang)
  }

  // 如果已經載入該語言時
  if (loadedLanguages.includes(lang)) {
    return setI18nLanguage(lang)
  }

  // 如果沒有載入語言時
  const messages = await getMessages(lang)
  i18n.setLocaleMessage(lang, messages)
  loadedLanguages.push(lang)
  return setI18nLanguage(lang)
}

// Fetch對應的json語言包
const getMessages = async (locale) => {
  // ElementUI中使用的locale key稍微不同，格式必須正確
  const elementUILocMap = {
    en: 'en',
    zh_tw: 'zh-TW',
  }
  let langFile
  if (locale === 'zh_tw') {
    langFile = await (await fetch(`locale/zh.json`)).json()
  } else if (locale === 'en') {
    langFile = await (await fetch(`locale/en.json`)).json()
  }

  const elLangFile = await import(/* webpackChunkName: "lang-elementui-[request]" */`element-ui/lib/locale/lang/${elementUILocMap[locale]}`)
  return { ...langFile, ...elLangFile.default}
}

loadLanguageAsync(locale)

export default i18n