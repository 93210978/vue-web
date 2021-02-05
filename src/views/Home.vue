<!--
 * @Author: 陆伟
 * @Date: 2021-02-05 16:09:16
 * @LastEditTime: 2021-02-05 16:12:40
 * @LastEditors: 陆伟
 * @Description: 
-->
<template>
  <el-button type="primary" @click="toDetail">去详情</el-button>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const toDetail = () => {
      router.push('detail')
    }
    return { toDetail }
  }
}
</script>