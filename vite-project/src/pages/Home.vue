<script setup lang="ts">
import { ref } from 'vue'
import { navigate } from '../router.js'

const currentTime = ref(new Date().toLocaleString('zh-CN'))

const goToAbout = () => {
  navigate('/about')
}
</script>

<template>
  <div class="home-page">
    <div class="hero">
      <h1>🏠 欢迎来到首页</h1>
      <p class="subtitle">这是一个类似 VitePress 的静态站点生成器</p>
    </div>

    <div class="features">
      <div class="feature-card">
        <h2>⚡ 纯静态生成</h2>
        <p>构建时生成所有 HTML，无需服务器运行时</p>
      </div>
      <div class="feature-card">
        <h2>🎨 现代化设计</h2>
        <p>使用 Vue 3 + Vite 构建</p>
      </div>
      <div class="feature-card">
        <h2>🚀 客户端路由</h2>
        <p>SPA 体验，快速页面切换</p>
      </div>
    </div>

    <div class="info">
      <p>⏰ 页面生成时间: {{ currentTime }}</p>
      <button @click="goToAbout" class="link-button">关于我们 →</button>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  text-align: center;
  padding: 3rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 16px;
  margin-bottom: 3rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.feature-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid #e9ecef;
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.feature-card h2 {
  color: #667eea;
  margin-bottom: 1rem;
}

.info {
  text-align: center;
  padding: 2rem;
  background: #fff9e6;
  border-radius: 12px;
  border: 2px dashed #ffd700;
}

.info p {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.link-button {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: #667eea;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: background 0.3s;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.link-button:hover {
  background: #764ba2;
}
</style>
