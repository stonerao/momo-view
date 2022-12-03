import axios from '@/require/index'
import Utils from '@/utils/index'
// 基础组件实例
class BaseCom {
    constructor() {
        this.type = ''; // 当前组件类型
        this.name = ''; // 名称
        this.desc = ''; // 说明
        this.id = '';
        this.style = {
            width: '100px',
            height: '100px',
        }; // 初始化样式参数
        this.config = {};
    }

    /**
     * 设置默认参数
     * @param {Object} config 基础配置
     */
    setDefaluteConfig(config) {
        this.config = Utils.copy(config, {

        });
    }

    // 初始化创建时触发
    create() {
        // 判断当前是否需要

        // 读取数据

        this.mounted();
    }

    // 加载完成
    mounted() {

    }

    // 请求数据
    require(url) {}

    // 设置当前数据
    setSourceData(opts) {}

    // 设置当前参数值
    setCurrentValue(val) {}

    // 更新
    update() {}
}

export default BaseCom;