<!--
 * @Author: 陆伟
 * @Date: 2021-02-05 16:09:16
 * @LastEditTime: 2021-02-22 14:15:32
 * @LastEditors: 陆伟
 * @Description: 
-->
<template>
  <a-button type="primary" @click="toDetail">去详情</a-button>
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