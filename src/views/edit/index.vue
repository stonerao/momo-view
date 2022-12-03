<template>
  <div class="edit-index full">
    <div class="edit-nav">
      <m-nav></m-nav>
    </div>
    <!-- 组件 -->
    <div class="edit-commons">

    </div>
    <div class="edit-view">
      <!-- 编辑 -->
      <div class="edit-viewer">
        <div class="edit-viewer-cont" :style="viewStyle">

        </div>
      </div>
      <!-- 底部信息 -->
      <div class="edit-view-nav">
        <div>
          <span class="edit-view-text">宽度：</span>
          <a-input class="edit-view-inp" v-model:value="config.width" size="small" placeholder="宽度" @change="setConfig(config)"/>
        </div>
        <div>
          <span class="edit-view-text">长度：</span>
          <a-input class="edit-view-inp" v-model:value="config.height" size="small" placeholder="高度" @change="setConfig(config)"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/style/edit.less'
import Nav from '@/components/edit/nav.vue'
export default {
  data() {
    return {
      config: {
        width: 1920,
        height: 1080
      },
      viewStyle: {
        width: '1920px',
        height: '1080px'
      }, // 预览dom相关配置
    }
  },
  mounted() {
    console.log(`the component is now mounted.`)
  },
  methods: {
    // 根据配置整体更新
    setConfig(opts = this.config) {
      console.log(opts)
      Object.keys(opts).forEach((key) => {
        switch (key) {
          case 'width':
            this.viewConfig.width = `${opts[key]}px`;
            break;
          case 'height':
            this.viewConfig.height = `${opts[key]}px`;
            break;
          default: break;
        }
      })
    }
  },
  components: {
    'm-nav': Nav
  }
}
</script>