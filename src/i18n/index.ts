import i18n from 'i18next'
import type { Resource } from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources: Resource = {
  en: {
    translation: {
      world: 'World',
      hello: '<0>Hello， {{name}}</0>',
    },
  },
  zh: {
    translation: {
      world: '世界',
      hello: '<0>你好， {{name}}</0>',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'zh',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
