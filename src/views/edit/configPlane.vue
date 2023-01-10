<template>
    <div class="conf-plane" :style="{ 'width': width + 'px', 'right': `${show ? 0: -width}px` }">
        <!-- nav -->
        <div class="conf-plane-nav">
            <div v-for="item in nav" :key="item.id" @click="selectId = item.id" class="conf-nav"
                :class="{ 'conf-nav-acive': selectId === item.id }">
                {{ item.name }}
            </div>
        </div>

        <!-- 操作配置相关 -->
        <div>
            <!-- 基础配置 -->
            <div class="conf-plane-opt" v-if="selectId === 1"></div>
            <!-- 事件相关 -->
            <div class="conf-plane-opt" v-else-if="selectId === 2"></div>
            <!-- 高级 -->
            <div class="conf-plane-opt" v-else-if="selectId === 3"></div>
        </div>

        <!-- 关闭icon -->
        <div class="conf-over-icon" @click="show = !show">
            
        </div>
    </div>
</template>

<script>
// 右侧操作面板
export default {
    data() {
        return {
            nav: [
                { name: '基础', id: 0 },
                { name: '事件', id: 1 },
                { name: '高级', id: 2 }
            ],
            selectId: 0,
            show: true,
            width: 300
        }
    },
    methods: {

    },
    watch: {
        selectId(val) {

        }
    }
}
</script>

<style lang="less">
.conf-plane-nav {
    display: flex;
    border-bottom: 1px solid #ccc;
    user-select: none;
}

.conf-nav {
    width: 100%;
    // background: #ddd;
    color: #444;
    text-align: center;
    cursor: pointer;
    line-height: 30px;
    transition: all .2s;
}

.conf-nav-acive {
    background: #efefef;
    color: #e82e2e;
}

.conf-over-icon {
    user-select: none;
    @border: 2px solid #aaa;
    @size: 40px;
    position: absolute;
    height: @size;
    width: @size * 0.3;
    left: 0;
    top: 50%;
    transform: translate(-100%, -50%);
    z-index: 20;
    background: #fff;
    border-top: @border;
    border-bottom: @border;
    border-left: @border;
    cursor: pointer;
}
</style>
