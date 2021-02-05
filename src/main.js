/*
 * @Author: 陆伟
 * @Date: 2021-02-05 15:40:44
 * @LastEditTime: 2021-02-05 16:08:27
 * @LastEditors: 陆伟
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App)

app.use(router)
app.use(ElementPlus)

app.mount('#app')