import BaseCom from '@/tools/baseCom'
class InitCom extends BaseCom {
    constructor(config) {
        super();
    }

    /**
    * 设置默认参数
    * @param {Object} config 基础配置
    */
    setDefaluteConfig(config) {
        this.config = Utils.copy(config, {

        });
    }

    mounted() {
        console.log('mou')
    }
}

export default InitCom;