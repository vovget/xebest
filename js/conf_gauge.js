/***********************************************************************************/
// 仪表盘
var g1 = echarts.init(document.getElementById('gauge_main'));

option_g1 = {
    tooltip : {
        // formatter: "{a} <br/>{b} : {c}"
        formatter: "{a} : {c}"
    },
    series: [
        {
            name: '漯河冷库运行能效比',
            type: 'gauge',
            min: 1,
            max: 6,
            splitNumber: 5, // 分割数（大）
            radius: '90%',
            detail: {formatter:'{value}'},
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [0.4, '#c23630'],
                        [0.8, '#63869d'],
                        [1, '#c23630']
                    ],
                    width: 26, // 扇形厚度
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 24
                }
            },
            axisLabel: { // 坐标轴小标记
                textStyle: { // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    fontSize: 24,
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            // axisTick: { // 坐标轴小标记
            //     length: 15, // 属性length控制线长
            //     lineStyle: { // 属性lineStyle控制线条样式
            //         color: 'auto',
            //         shadowColor: '#fff', //默认透明
            //         shadowBlur: 10
            //     }
            // },
            // splitLine: { // 分隔线
            //     length: 25, // 属性length控制线长
            //     lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
            //         width: 3,
            //         color: '#fff',
            //         shadowColor: '#fff', //默认透明
            //         shadowBlur: 10
            //     }
            // },
            pointer: { // 仪表盘指针
                length: '90%',
                shadowColor: '#fff', //默认透明
                shadowBlur: 5
            },
            itemStyle: { // 仪表盘指针样式
                color: '#33e4e5'
            },
            detail: {
                fontSize: 45,
                color: '#fff',
                shadowColor: '#fff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, '28%'], // x, y，单位px
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: '#fff'
                }
            },
            data: [{
                value: 3.67
                // name: '冷库运行能效比'
            }]
        }
    ]
};

setInterval(function () {
    //option_g1.series[0].data[0].value = (Math.random() * 6).toFixed(2) - 0;
    var min = 3;
    var max = 5;
    option_g1.series[0].data[0].value = (Math.random() * (max - min) + min).toFixed(2);
    g1.setOption(option_g1, true);
},2000);