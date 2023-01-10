import BaseCom from '@/tools/baseCom'
import * as echarts from 'echarts';
import Config from './config'
class InitCom extends BaseCom {
    constructor(config) {
        super();
        console.log(config)
        this.chart = null;
    }

    /**
    * 设置默认参数
    * @param {Object} config 基础配置
    */
    setDefaluteConfig(config) {
        this.config = Utils.copy(config, Config);
    }

    init(opts) {
        const { el } = opts;
        
        this.chart = echarts.init(el);

        // 指定图表的配置项和数据
        const option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        this.chart.setOption(option);
    }

    mounted() {
        console.log('mounted')
    }
}

export default InitCom;