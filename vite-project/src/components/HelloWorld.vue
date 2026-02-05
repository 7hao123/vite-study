<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
const isClient = ref(false)

onMounted(() => {
  isClient.value = true
})
</script>

<template>
  <div class="ssr-indicator">
    <h1 style="color: #42b883;">🎉 SSR 服务器端渲染成功！</h1>
    <p v-if="!isClient" style="background: #ffd700; padding: 10px; border-radius: 5px;">
      ⚡ 这段文字是在服务器端渲染的
    </p>
    <p v-else style="background: #42b883; color: white; padding: 10px; border-radius: 5px;">
      ✅ 客户端已激活（Hydrated）
    </p>
  </div>

  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="__blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.ssr-indicator {
  margin: 20px 0;
  padding: 20px;
  border: 3px solid #42b883;
  border-radius: 10px;
  background: #f0f9ff;
}

.read-the-docs {
  color: #888;
}
</style>
