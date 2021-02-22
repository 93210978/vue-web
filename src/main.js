/*
 * @Author: 陆伟
 * @Date: 2021-02-05 15:40:44
 * @LastEditTime: 2021-02-22 14:11:13
 * @LastEditors: 陆伟
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App)

app.use(router)
app.use(Antd);

app.mount('#app')