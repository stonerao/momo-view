<template>
  <div class="edit-index full">
    <div class="edit-nav">
      <m-nav></m-nav>
    </div>
    <!-- 组件 -->
    <div class="edit-commons">
      <div v-for="(item, key) in librarys">
        <div class="edit-commons-name">{{ key }}</div>
        <div class="edit-coms-main">
          <!-- 组件 -->
          <div draggable="true" @dragstart="drag($event, chart)" class="edit-coms-box" v-for="chart in item" :key="chart.name">
            <div class="edit-coms-icon iconfont">&#xeb96;</div>
            <div>{{chart.name}}</div>
          </div>
          <!--  -->
        </div>
      </div>
    </div>
    <div class="edit-view">
      <!-- 编辑 -->
      <div class="edit-viewer">
        <div class="edit-viewer-cont" @drop="drop" @dragover="allowDrop" :style="viewStyle">
          <div class="edit-viewer-com" :style="item.style" v-for="item in componentItems" :key="item.id">
            <keep-alive>
              <component v-bind:is="`e-${item.component.name}`"></component>
            </keep-alive>
          </div>
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
import library from '@/components/library/index'
import DragEvent from '@/utils/drag'
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
      componentItems: [
      ], // 需要渲染的组件
      librarys: []
    }
  },
  created() {
    this.libraryManage();
  },
  mounted() {
    console.log(library)
  },
  methods: {
    // 根据配置整体更新
    setConfig(opts = this.config) {
      console.log(opts)
      Object.keys(opts).forEach((key) => {
        switch (key) {
          case 'width':
            this.viewStyle.width = `${parseInt(opts[key])}px`;
            break;
          case 'height': 
          this.viewStyle.height = `${parseInt(opts[key])}px` 
            break;
          default: break;
        }
      })
    },
    // 组件列表管理
    libraryManage() {
      this.librarys = {};

      library.forEach((elem) => {
        // 查找是否有数据
        if (!this.librarys[elem.type]) this.librarys[elem.type] = [];

        this.librarys[elem.type].push(elem);
      })
    },

    // 添加组件
    addCom(opts) {
      // 根据名称找到对应组件
      // const com = this.librarys.find(item => item.name === opts.name);
      if (!this.librarys[opts.type]) return;
      const com = this.librarys[opts.type].find((item) => item.name === opts.name);
      console.log(com.component.defaultConfig.style)
      this.componentItems.push({
        style: {
          ...com.component.defaultConfig.style,
          left: opts.x + 'px',
          top: opts.y + 'px'
        },
        component: com
      })
    },
    ...DragEvent
  },
  components: {
    'm-nav': Nav
  } 
}
</script>