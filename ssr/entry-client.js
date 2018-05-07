// entry-client.js
import { createApp } from './app'
const { app, router } = createApp()
router.onReady(() => {
  app.$mount('#app') // 调用app实例对象 $mount方法 最终就是插入DOM
})