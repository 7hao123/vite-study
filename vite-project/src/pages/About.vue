<script setup lang="ts">
import { ref } from 'vue'
import { navigate } from '../router.js'

const teamMembers = ref([
  { name: '张三', role: '前端工程师', emoji: '👨‍💻' },
  { name: '李四', role: '设计师', emoji: '🎨' },
  { name: '王五', role: '后端工程师', emoji: '⚙️' }
])

const techStack = ref([
  'Vue 3',
  'Vite',
  'TypeScript',
  'Static Site Generation'
])

const goHome = () => {
  navigate('/')
}
</script>

<template>
  <div class="about-page">
    <div class="header">
      <h1>📖 关于我们</h1>
      <p class="description">了解我们的团队和技术栈</p>
    </div>

    <div class="content-section">
      <div class="section">
        <h2>👥 团队成员</h2>
        <div class="team-grid">
          <div v-for="member in teamMembers" :key="member.name" class="member-card">
            <div class="emoji">{{ member.emoji }}</div>
            <h3>{{ member.name }}</h3>
            <p>{{ member.role }}</p>
          </div>
        </div>
      </div>

      <div class="section">
        <h2>🛠️ 技术栈</h2>
        <div class="tech-stack">
          <span v-for="tech in techStack" :key="tech" class="tech-tag">
            {{ tech }}
          </span>
        </div>
      </div>

      <div class="section">
        <h2>🎯 项目特色</h2>
        <ul class="features-list">
          <li>✨ 静态站点生成（SSG）</li>
          <li>📱 响应式设计</li>
          <li>🚀 客户端路由导航</li>
          <li>⚡ 极速的开发体验</li>
          <li>🎨 现代化的 UI 设计</li>
        </ul>
      </div>
    </div>

    <div class="footer">
      <button @click="goHome" class="back-link">← 返回首页</button>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

.header {
  text-align: center;
  padding: 3rem 0;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  border-radius: 16px;
  margin-bottom: 3rem;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.description {
  font-size: 1.1rem;
  opacity: 0.95;
}

.content-section {
  margin-bottom: 2rem;
}

.section {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.section h2 {
  color: #f5576c;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.member-card {
  text-align: center;
  padding: 1.5rem;
  background: #fff5f7;
  border-radius: 12px;
  border: 2px solid #ffe0e6;
  transition: transform 0.3s;
}

.member-card:hover {
  transform: scale(1.05);
}

.emoji {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.member-card h3 {
  color: #333;
  margin-bottom: 0.3rem;
}

.member-card p {
  color: #666;
  font-size: 0.9rem;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.tech-tag {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  font-weight: 500;
  font-size: 0.95rem;
}

.features-list {
  list-style: none;
  padding: 0;
}

.features-list li {
  padding: 0.8rem 0;
  font-size: 1.1rem;
  color: #333;
  border-bottom: 1px solid #f0f0f0;
}

.features-list li:last-child {
  border-bottom: none;
}

.footer {
  text-align: center;
  padding: 2rem;
}

.back-link {
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

.back-link:hover {
  background: #764ba2;
}
</style>
