<!--
 * @Author: 陆伟
 * @Date: 2021-02-05 16:09:35
 * @LastEditTime: 2021-02-05 16:09:35
 * @LastEditors: 陆伟
 * @Description: 
-->
<template>
  <el-button type="primary" @click="toHome">去首页</el-button>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const toHome = () => {
      router.push('/')
    }
    return { toHome }
  }
}
</script>