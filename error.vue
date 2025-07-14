<template>
  <div class="error-page">
    <div class="error-container">
      <!-- 404动画图标 -->
      <div class="error-icon">
        <div class="number-404">
          <span class="four">4</span>
          <span class="zero">0</span>
          <span class="four">4</span>
        </div>
        <div class="floating-elements">
          <div class="element element-1">🔧</div>
          <div class="element element-2">⚙️</div>
          <div class="element element-3">🛠️</div>
          <div class="element element-4">📱</div>
        </div>
      </div>

      <!-- 错误信息 -->
      <div class="error-content">
        <h1 class="error-title">页面走丢了</h1>
        <p class="error-message">
          抱歉，您访问的页面不存在或已被移动
        </p>
        <p class="error-description">
          可能是链接有误，或者页面已经被删除
        </p>
      </div>

      <!-- 操作按钮 -->
      <div class="error-actions">
        <button @click="goHome" class="primary-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9,22 9,12 15,12 15,22"></polyline>
          </svg>
          回到首页
        </button>
        <button @click="goBack" class="secondary-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15,18 9,12 15,6"></polyline>
          </svg>
          返回上页
        </button>
      </div>

      <!-- 推荐工具 -->
      <div class="recommended-tools">
        <h3 class="recommend-title">或者试试这些工具</h3>
        <div class="tools-list">
          <div v-for="tool in recommendedTools" :key="tool.id" @click="navigateToTool(tool)" class="tool-item">
            <span class="tool-icon">{{ tool.icon }}</span>
            <span class="tool-name">{{ tool.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 背景装饰 -->
    <div class="background-decoration">
      <div class="decoration-circle circle-1"></div>
      <div class="decoration-circle circle-2"></div>
      <div class="decoration-circle circle-3"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 设置页面标题
useHead({
  title: '404 - 页面未找到',
  meta: [
    { name: 'description', content: '抱歉，您访问的页面不存在' }
  ]
});

// 推荐工具列表
const recommendedTools = [
  { id: 'freebie', name: '喜加一日历', icon: '🎮', route: '/freebie' },
  { id: 'color', name: '颜色选择器', icon: '🎨', route: '/color-picker' },
  { id: 'qr', name: '二维码生成', icon: '📱', route: '/qr-generator' },
  { id: 'password', name: '密码生成器', icon: '🔐', route: '/password-generator' }
];

// 回到首页
const goHome = () => {
  navigateTo('/');
};

// 返回上一页
const goBack = () => {
  if (process.client && window.history.length > 1) {
    window.history.back();
  } else {
    navigateTo('/');
  }
};

// 跳转到工具
const navigateToTool = (tool: any) => {
  if (tool.id === 'freebie') {
    navigateTo('/freebie');
  } else {
    // 其他工具暂时跳转到首页
    navigateTo('/');
  }
};
</script>

<style scoped>
.error-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.error-container {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 60px 40px;
  text-align: center;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  z-index: 2;
}

.error-icon {
  margin-bottom: 40px;
  position: relative;
}

.number-404 {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.number-404 span {
  font-size: 120px;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: bounce 2s infinite;
}

.number-404 .zero {
  animation-delay: 0.2s;
}

.number-404 .four:last-child {
  animation-delay: 0.4s;
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.element {
  position: absolute;
  font-size: 24px;
  animation: float 3s ease-in-out infinite;
}

.element-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.element-2 {
  top: 30%;
  right: 15%;
  animation-delay: 0.5s;
}

.element-3 {
  bottom: 30%;
  left: 20%;
  animation-delay: 1s;
}

.element-4 {
  bottom: 20%;
  right: 10%;
  animation-delay: 1.5s;
}

.error-content {
  margin-bottom: 40px;
}

.error-title {
  font-size: 36px;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 16px;
}

.error-message {
  font-size: 18px;
  color: #4a5568;
  margin-bottom: 8px;
}

.error-description {
  font-size: 16px;
  color: #718096;
  margin: 0;
}

.error-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.primary-button {
  background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(72, 187, 120, 0.3);
}

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(72, 187, 120, 0.4);
}

.secondary-button {
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  border: 2px solid #667eea;
  padding: 12px 26px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.secondary-button:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
}

.recommended-tools {
  border-top: 1px solid #e2e8f0;
  padding-top: 30px;
}

.recommend-title {
  font-size: 18px;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 20px;
}

.tools-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
}

.tool-item {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.tool-item:hover {
  background: #edf2f7;
  border-color: #667eea;
  transform: translateY(-2px);
}

.tool-icon {
  font-size: 24px;
}

.tool-name {
  font-size: 14px;
  font-weight: 500;
  color: #4a5568;
}

.background-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.decoration-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: pulse 4s ease-in-out infinite;
}

.circle-1 {
  width: 200px;
  height: 200px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.circle-2 {
  width: 150px;
  height: 150px;
  top: 60%;
  right: 15%;
  animation-delay: 1s;
}

.circle-3 {
  width: 100px;
  height: 100px;
  bottom: 20%;
  left: 20%;
  animation-delay: 2s;
}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-10px);
  }

  60% {
    transform: translateY(-5px);
  }
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@keyframes pulse {

  0%,
  100% {
    transform: scale(1);
    opacity: 0.3;
  }

  50% {
    transform: scale(1.1);
    opacity: 0.1;
  }
}

@media (max-width: 768px) {
  .error-container {
    padding: 40px 24px;
    margin: 16px;
  }

  .number-404 span {
    font-size: 80px;
  }

  .error-title {
    font-size: 28px;
  }

  .error-message {
    font-size: 16px;
  }

  .error-actions {
    flex-direction: column;
    align-items: center;
  }

  .primary-button,
  .secondary-button {
    width: 100%;
    max-width: 200px;
    justify-content: center;
  }

  .tools-list {
    grid-template-columns: repeat(2, 1fr);
  }

  .floating-elements {
    display: none;
  }
}
</style>