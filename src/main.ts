import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(vue => {
  vue.config.globalProperties.csLog = (val: any) => {
    console.log(val)
  }
})
app.mount('#app')
