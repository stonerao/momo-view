<template>
  <div class="edit-index full">
    <div class="edit-nav">
      <m-nav></m-nav>
    </div>
    <!-- 组件 -->
    <div class="edit-commons">
      <div class="edit-view-head">
        <div :class="navComId === item.id ?'active':''" v-for="item in navComItems" :key="item.id" @click="(navComId = item.id)">{{ item.name }}</div>
      </div>
      <div>
        <!-- 工程 -->
        <div v-if="(navComId === 0)"></div>
        <!-- 组件 -->
        <div v-if="(navComId === 1)">
          <div v-for="(item, key) in librarys">
            <div class="edit-commons-name">{{ key }}</div>
            <div class="edit-coms-main">
              <!-- 组件 -->
              <div draggable="true" @dragstart="drag($event, chart)" class="edit-coms-box" v-for="chart in item"
                :key="chart.name">
                <div class="edit-coms-icon iconfont">&#xeb96;</div>
                <div>{{ chart.name }}</div>
              </div>
              <!--  -->
            </div>
          </div>
        </div>
        <!--  -->
        <!-- 已添加组件列表 -->
        <div v-if="(navComId === 2)"></div>
      </div>
    </div>
    <div class="edit-view">
      <!-- 编辑 -->
      <div class="edit-viewer main-view" @click="viewMainClick">
        <div class="edit-viewer-cont main-view" @drop="drop" @dragover="allowDrop" :style="viewStyle">
          <div class="edit-viewer-com" 
          @mousedown="selectComEvent($event, item)" 
          @mousemove="moveCom($event, item)"
          @mouseup="moveUpCom($event)"
          :style="item.style" v-for="item in componentItems" :key="item.id">
            <!-- 拾取面板 -->
            <div :class="{'edit-viewer-plane': selectId === item.id }">
            </div>
            <!-- 动态添加组件 -->
            <keep-alive>
              <component v-bind:is="`e-${item.component.name}`"></component>
            </keep-alive>
          </div>
        </div>
        <!-- v-if="isConfPlane" -->
      </div>
      
      <m-conf-plane ref="config-plane"></m-conf-plane>
      <!-- 底部信息 -->
      <div class="edit-view-nav">
        <div>
          <span class="edit-view-text">宽度：</span>
          <a-input class="edit-view-inp" v-model:value="config.width" size="small" placeholder="宽度"
            @change="setConfig(config)" />
        </div>
        <div>
          <span class="edit-view-text">长度：</span>
          <a-input class="edit-view-inp" v-model:value="config.height" size="small" placeholder="高度"
            @change="setConfig(config)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/style/edit.less'
import Nav from '@/components/edit/nav.vue'
import library from '@/components/library/index'
import DragEvent from '@/event/drag'
import ViewCom from '@/event/viewCom'
import Utils from '@/utils/index'
import ConfigPlane from './configPlane.vue'

export default {
  data() {
    return {
      comStartNum: 0, // 组件起始数
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
      librarys: [],
      navComItems: [
        { name: '工程', id: 0 },
        { name: '组件', id: 1 },
        { name: '列表', id: 2 },
      ],
      navComId: 1,
      ...ViewCom.data,
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
      Object.keys(opts).forEach((key) => {
        switch (key) {
          case 'width':
            this.viewStyle.width = `${parseInt(opts[key])}px`;
            break;
          case 'height':
            this.viewStyle.height = `${parseInt(opts[key])}px`;
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
      const config = com.component.defaultConfig;
      const comId = Utils.getComId(config.type);
      // const config = com.component.getConfig('config');
      const option = {
        style: {
          ...config.style,
          left: opts.x + 'px',
          top: opts.y + 'px'
        }, // 组件样式相关
        component: com, // 组件
        id: comId, // 组件ID 固定无法更改
        name: `${config.name}_${this.comStartNum++}`// 组件名称 可更改
      };
      this.componentItems.push(option);

      console.log(option);
      
    },
    ...DragEvent,
    ...ViewCom.methods
  },
  components: {
    'm-nav': Nav,
    'm-conf-plane': ConfigPlane
  },
  watch: {
    ...ViewCom.watch
  }
}
</script>