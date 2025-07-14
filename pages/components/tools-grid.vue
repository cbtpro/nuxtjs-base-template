<template>
  <div class="tools-container">
    <!-- 页面头部 -->
    <div class="tools-header">
      <div class="header-content">
        <h1 class="page-title">🛠️ 实用小工具集合</h1>
        <p class="page-subtitle">精选实用工具，提升工作效率</p>
      </div>

      <!-- 视图切换按钮 -->
      <div class="view-toggle">
        <button @click="viewMode = 'grid'" :class="['toggle-btn', { active: viewMode === 'grid' }]" title="网格视图">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
          </svg>
        </button>
        <button @click="viewMode = 'list'" :class="['toggle-btn', { active: viewMode === 'list' }]" title="列表视图">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="8" y1="6" x2="21" y2="6"></line>
            <line x1="8" y1="12" x2="21" y2="12"></line>
            <line x1="8" y1="18" x2="21" y2="18"></line>
            <line x1="3" y1="6" x2="3.01" y2="6"></line>
            <line x1="3" y1="12" x2="3.01" y2="12"></line>
            <line x1="3" y1="18" x2="3.01" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>

    <!-- 工具列表 -->
    <div :class="['tools-grid', viewMode]">
      <div v-for="tool in tools" :key="tool.id" :class="['tool-card', viewMode]" @click="navigateToTool(tool)">
        <div class="tool-icon">
          <span class="icon-emoji">{{ tool.icon }}</span>
        </div>
        <div class="tool-content">
          <h3 class="tool-title">{{ tool.title }}</h3>
          <p class="tool-description">{{ tool.description }}</p>
          <div class="tool-meta">
            <span :class="['tool-status', tool.status]">{{ getStatusText(tool.status) }}</span>
            <span class="tool-category">{{ tool.category }}</span>
          </div>
        </div>
        <div class="tool-arrow">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9,18 15,12 9,6"></polyline>
          </svg>
        </div>
      </div>
    </div>

    <!-- 空状态 -->
    <div v-if="tools.length === 0" class="empty-state">
      <div class="empty-icon">🔧</div>
      <h3>暂无工具</h3>
      <p>更多实用工具正在开发中...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Tool {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  status: 'active' | 'beta' | 'coming-soon';
  route: string;
}

const viewMode = ref<'grid' | 'list'>('grid');

const tools: Tool[] = [
  {
    id: 'freebie-calendar',
    title: '喜加一日历',
    description: '追踪游戏限免和免费活动，永远不错过免费游戏',
    icon: '🎮',
    category: '游戏工具',
    status: 'active',
    route: '/module-0-home'
  },
  {
    id: 'color-picker',
    title: '颜色选择器',
    description: '专业的颜色选择和调色板工具，支持多种颜色格式',
    icon: '🎨',
    category: '设计工具',
    status: 'active',
    route: '/color-picker'
  },
  {
    id: 'qr-generator',
    title: '二维码生成器',
    description: '快速生成各种类型的二维码，支持自定义样式',
    icon: '📱',
    category: '实用工具',
    status: 'active',
    route: '/qr-generator'
  },
  {
    id: 'password-generator',
    title: '密码生成器',
    description: '生成安全可靠的随机密码，可自定义长度和字符类型',
    icon: '🔐',
    category: '安全工具',
    status: 'active',
    route: '/password-generator'
  },
  {
    id: 'json-formatter',
    title: 'JSON格式化',
    description: '格式化和验证JSON数据，支持压缩和美化',
    icon: '📋',
    category: '开发工具',
    status: 'beta',
    route: '/json-formatter'
  },
  {
    id: 'image-compressor',
    title: '图片压缩器',
    description: '在线压缩图片文件，保持质量的同时减小文件大小',
    icon: '🖼️',
    category: '图片工具',
    status: 'beta',
    route: '/image-compressor'
  },
  {
    id: 'unit-converter',
    title: '单位转换器',
    description: '支持长度、重量、温度等多种单位的快速转换',
    icon: '📏',
    category: '计算工具',
    status: 'coming-soon',
    route: '/unit-converter'
  },
  {
    id: 'markdown-editor',
    title: 'Markdown编辑器',
    description: '实时预览的Markdown编辑器，支持导出多种格式',
    icon: '📝',
    category: '编辑工具',
    status: 'coming-soon',
    route: '/markdown-editor'
  }
];

const getStatusText = (status: string) => {
  const statusMap = {
    'active': '可用',
    'beta': '测试版',
    'coming-soon': '即将推出'
  };
  return statusMap[status as keyof typeof statusMap] || '未知';
};

const navigateToTool = (tool: Tool) => {
  if (tool.status === 'coming-soon') {
    // 显示即将推出的提示
    alert(`${tool.title} 即将推出，敬请期待！`);
    return;
  }

  if (tool.id === 'freebie-calendar') {
    // 跳转到喜加一页面
    navigateTo(tool.route);
  } else {
    // 其他工具的跳转逻辑
    navigateTo(tool.route);
  }
};
</script>

<style scoped>
.tools-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.tools-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 2px solid #e2e8f0;
}

.header-content {
  flex: 1;
}

.page-title {
  font-size: 32px;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-size: 18px;
  color: #718096;
  margin: 0;
}

.view-toggle {
  display: flex;
  background: #f7fafc;
  border-radius: 12px;
  padding: 4px;
  gap: 4px;
}

.toggle-btn {
  background: transparent;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  color: #718096;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.toggle-btn:hover {
  background: #edf2f7;
  color: #4a5568;
}

.toggle-btn.active {
  background: white;
  color: #667eea;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.tools-grid {
  display: grid;
  gap: 20px;
  transition: all 0.3s ease;
}

.tools-grid.grid {
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
}

.tools-grid.list {
  grid-template-columns: 1fr;
}

.tool-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  overflow: hidden;
}

.tool-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.tool-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
}

.tool-card:hover::before {
  transform: scaleX(1);
}

.tool-card.grid {
  flex-direction: column;
  text-align: center;
}

.tool-card.grid .tool-content {
  text-align: center;
}

.tool-card.list {
  flex-direction: row;
  text-align: left;
}

.tool-card.list .tool-content {
  flex: 1;
  text-align: left;
}

.tool-icon {
  flex-shrink: 0;
}

.icon-emoji {
  font-size: 48px;
  display: block;
  margin-bottom: 8px;
}

.tool-card.list .icon-emoji {
  font-size: 40px;
  margin-bottom: 0;
}

.tool-content {
  flex: 1;
}

.tool-title {
  font-size: 20px;
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 8px 0;
}

.tool-description {
  font-size: 14px;
  color: #718096;
  line-height: 1.5;
  margin: 0 0 16px 0;
}

.tool-meta {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
}

.tool-card.list .tool-meta {
  justify-content: flex-start;
}

.tool-status {
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
}

.tool-status.active {
  background: #c6f6d5;
  color: #22543d;
}

.tool-status.beta {
  background: #fed7d7;
  color: #742a2a;
}

.tool-status.coming-soon {
  background: #e2e8f0;
  color: #4a5568;
}

.tool-category {
  font-size: 12px;
  color: #a0aec0;
  background: #f7fafc;
  padding: 4px 8px;
  border-radius: 6px;
}

.tool-arrow {
  color: #cbd5e0;
  transition: all 0.3s ease;
  display: none;
}

.tool-card.list .tool-arrow {
  display: block;
}

.tool-card:hover .tool-arrow {
  color: #667eea;
  transform: translateX(4px);
}

.empty-state {
  text-align: center;
  padding: 80px 20px;
  color: #718096;
}

.empty-icon {
  font-size: 64px;
  margin-bottom: 16px;
}

.empty-state h3 {
  font-size: 24px;
  margin-bottom: 8px;
  color: #4a5568;
}

@media (max-width: 768px) {
  .tools-header {
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
  }

  .page-title {
    font-size: 24px;
  }

  .page-subtitle {
    font-size: 16px;
  }

  .view-toggle {
    align-self: center;
  }

  .tools-grid.grid {
    grid-template-columns: 1fr;
  }

  .tool-card {
    padding: 20px;
  }

  .tool-card.list {
    flex-direction: column;
    text-align: center;
  }

  .tool-card.list .tool-content {
    text-align: center;
  }

  .tool-card.list .tool-meta {
    justify-content: center;
  }

  .tool-card.list .tool-arrow {
    display: none;
  }
}
</style>