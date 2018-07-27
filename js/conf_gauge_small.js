/***********************************************************************************/
// 仪表盘 （小）
option_g_sm_1 = {
    title: {
        text: "废水PH值",
        textStyle: {
            color: '#fff',
            fontSize: 20,
            align: 'right',
            height: 80
        },
        top: 'top',
        left:'center',
        padding: 0
    },
    tooltip : {
        // formatter: "{a} <br/>{b} : {c}"
        formatter: "{a} : {c}"
    },
    series: [
        {
            name: '漯河冷库运行能效比',
            type: 'gauge',
            min: 1,
            max: 15,
            splitNumber: 7, // 分割数（大）
            radius: '80%',
            detail: {formatter:'{value}'},
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [0.4, '#c23630'],
                        [0.8, '#63869d'],
                        [1, '#c23630']
                    ],
                    width: 14, // 扇形厚度
                    // shadowColor: '#fff', //默认透明
                    // shadowBlur: 24
                }
            },
            axisLabel: { // 坐标轴小标记
                textStyle: { // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    fontSize: 16,
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            splitLine: { // 分割线样式
                length: 16
            },
            pointer: { // 仪表盘指针
                length: '90%',
                width: 3, // 指针宽度
                shadowColor: '#fff', //默认透明
                shadowBlur: 5
            },
            itemStyle: { // 仪表盘指针样式
                color: '#33e4e5'
            },
            title: {
                text: "废水PH值",
                textStyle: {
                    color: '#74daff'
                }
            },
            // title: {
            //     show: true,
            //     offsetCenter: [0, '-50%'],
            //     color: '#fff',
            //     fontSize: 30
            //     // textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            //     //     fontWeight: 'bolder',
            //     //     fontSize: 20,
            //     //     fontStyle: 'italic',
            //     //     shadowColor: '#fff', //默认透明
            //     //     shadowBlur: 10
            //     // }
            // },
            detail: {
                // backgroundColor: 'rgba(30,144,255,0.8)',
                // borderWidth: 1,
                // borderColor: '#fff',
                shadowColor: '#fff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, '50%'], // x, y，单位px
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontSize: 18,
                    fontWeight: 'bolder',
                    color: '#00ff5a'
                }
            },
            data: [{
                value: 3.67
                // name: '冷库运行能效比'
            }]
        }
    ]
};

var g_sm_1 = echarts.init(document.getElementById('gauge_small_1'));
// var g_sm_2 = echarts.init(document.getElementById('gauge_small_2'));
// var g_sm_3 = echarts.init(document.getElementById('gauge_small_3'));
// var g_sm_4 = echarts.init(document.getElementById('gauge_small_4'));


var g_sm_5 = echarts.init(document.getElementById('gauge_small_5'));
var g_sm_6 = echarts.init(document.getElementById('gauge_small_6'));
var g_sm_7 = echarts.init(document.getElementById('gauge_small_7'));
var g_sm_8 = echarts.init(document.getElementById('gauge_small_8'));

g_sm_1.setOption(option_g_sm_1, true);
// g_sm_2.setOption(option_g_sm_1, true);
// g_sm_3.setOption(option_g_sm_1, true);
// g_sm_4.setOption(option_g_sm_1, true);

g_sm_5.setOption(option_g_sm_1, true);
g_sm_6.setOption(option_g_sm_1, true);
g_sm_7.setOption(option_g_sm_1, true);
g_sm_8.setOption(option_g_sm_1, true);