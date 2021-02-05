/*
 * @Author: 陆伟
 * @Date: 2021-02-05 16:06:48
 * @LastEditTime: 2021-02-05 16:06:58
 * @LastEditors: 陆伟
 * @Description: 
 */
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'

// createRouter 创建路由实例
const router = createRouter({
  // hash模式：createWebHashHistory、history模式：createWebHistory
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/detail', component: Detail },
  ]
})

// 抛出路由实例, 在 main.js 中引用
export default router