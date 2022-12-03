import BaseCom from '@/tools/baseCom'
import * as echarts from 'echarts';
class InitCom extends BaseCom {
    constructor(config) {
        super();
        
        this.chart = null;
    }

    /**
    * 设置默认参数
    * @param {Object} config 基础配置
    */
    setDefaluteConfig(config) {
        this.config = Utils.copy(config, {

        });
    }

    init(opts) {
        const { el } = opts;
        
        this.chart = echarts.init(el);

        // 指定图表的配置项和数据
        const option = {
            xAxis: {
                type: 'category',
                boundaryGap: false
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '30%']
            },
            visualMap: {
                type: 'piecewise',
                show: false,
                dimension: 0,
                seriesIndex: 0,
                pieces: [
                    {
                        gt: 1,
                        lt: 3,
                        color: 'rgba(0, 0, 180, 0.4)'
                    },
                    {
                        gt: 5,
                        lt: 7,
                        color: 'rgba(0, 0, 180, 0.4)'
                    }
                ]
            },
            series: [
                {
                    type: 'line',
                    smooth: 0.6,
                    symbol: 'none',
                    lineStyle: {
                        color: '#5470C6',
                        width: 5
                    },
                    markLine: {
                        symbol: ['none', 'none'],
                        label: { show: false },
                        data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }]
                    },
                    areaStyle: {},
                    data: [
                        ['2019-10-10', 200],
                        ['2019-10-11', 560],
                        ['2019-10-12', 750],
                        ['2019-10-13', 580],
                        ['2019-10-14', 250],
                        ['2019-10-15', 300],
                        ['2019-10-16', 450],
                        ['2019-10-17', 300],
                        ['2019-10-18', 100]
                    ]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        this.chart.setOption(option);
    }

    mounted() {
        console.log('mou')
    }
}

export default InitCom;