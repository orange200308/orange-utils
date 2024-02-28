import { createApp } from 'vue'
import router from '@/router/index.ts'
import Antd from 'ant-design-vue'
import './style.css'
import 'ant-design-vue/dist/reset.css'
import App from './App.vue'

// ConfigProvider.config({
//   theme:{
//     primaryColor:'#319891'
//   }
// })
const app = createApp(App)
app.use(Antd).use(router)
app.mount('#app')
