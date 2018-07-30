/***********************************************************************************/
// 仪表盘 （小）

var g_sm_1 = echarts.init(document.getElementById('gauge_small_1'));
var g_sm_2 = echarts.init(document.getElementById('gauge_small_2'));
var g_sm_3 = echarts.init(document.getElementById('gauge_small_3'));
var g_sm_4 = echarts.init(document.getElementById('gauge_small_4'));
var g_sm_5 = echarts.init(document.getElementById('gauge_small_5'));
var g_sm_6 = echarts.init(document.getElementById('gauge_small_6'));
var g_sm_7 = echarts.init(document.getElementById('gauge_small_7'));
var g_sm_8 = echarts.init(document.getElementById('gauge_small_8'));

var option_sm_1 = {
    tooltip : {
        formatter: "{a} : {c}"
    },
    series: [
        {
            name: '废水PH值',
            type: 'gauge',
            min: 1,
            max: 15,
            splitNumber: 7, // 分割数（大）
            radius: '70%',
            detail: {formatter:'{value}'},
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [0.357, '#c23630'],
                        [0.536, '#63869d'],
                        [1, '#c23630']
                    ],
                    width: 14 // 扇形厚度
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
                offsetCenter: [0, '-135%'],
                color: '#fff',
                fontSize: 20
            },
            detail: {
                shadowColor: '#fff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, '70%'], // x, y，单位px
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontSize: 18,
                    fontWeight: 'bolder',
                    color: '#00ff5a'
                }
            },
            data: [{
                value: 6,
                name: '废水PH值'
            }]
        }
    ]
};
var option_sm_2 = {
    tooltip : {
        formatter: "{a} : {c}"
    },
    series: [
        {
            name: '废水COD cr',
            type: 'gauge',
            min: 0,
            max: 3000,
            splitNumber: 6, // 分割数（大）
            radius: '70%',
            detail: {formatter:'{value}'},
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [0.67, '#63869d'],
                        [1, '#c23630']
                    ],
                    width: 14 // 扇形厚度
                }
            },
            axisLabel: { // 坐标轴小标记
                textStyle: { // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    fontSize: 12,
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
                offsetCenter: [0, '-135%'],
                color: '#fff',
                fontSize: 20
            },
            detail: {
                formatter: function (value) {
                    return value + "/mg";
                },
                shadowColor: '#fff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, '70%'], // x, y，单位px
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontSize: 18,
                    fontWeight: 'bolder',
                    color: '#00ff5a'
                }
            },
            data: [{
                value: 2000,
                name: '废水COD cr'
            }]
        }
    ]
};

var option_sm_3 = {
    tooltip : {
        formatter: "{a} : {c}"
    },
    series: [
        {
            name: '废水BOD5',
            type: 'gauge',
            min: 0,
            max: 1400,
            splitNumber: 7, // 分割数（大）
            radius: '70%',
            detail: {formatter:'{value}'},
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [0.714, '#63869d'],
                        [1, '#c23630']
                    ],
                    width: 14 // 扇形厚度
                }
            },
            axisLabel: { // 坐标轴小标记
                textStyle: { // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    fontSize: 12,
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
                offsetCenter: [0, '-135%'],
                color: '#fff',
                fontSize: 20
            },
            detail: {
                formatter: function (value) {
                    return value + "/ml";
                },
                shadowColor: '#fff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, '70%'], // x, y，单位px
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontSize: 18,
                    fontWeight: 'bolder',
                    color: '#00ff5a'
                }
            },
            data: [{
                value: 1000,
                name: '废水BOD5'
            }]
        }
    ]
};

var option_sm_4 = {
    tooltip : {
        formatter: "{a} : {c}"
    },
    series: [
        {
            name: '废水油脂',
            type: 'gauge',
            min: 0,
            max: 300,
            splitNumber: 3, // 分割数（大）
            radius: '70%',
            detail: {formatter:'{value}'},
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [0.67, '#63869d'],
                        [1, '#c23630']
                    ],
                    width: 14 // 扇形厚度
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
                offsetCenter: [0, '-135%'],
                color: '#fff',
                fontSize: 20
            },
            detail: {
                formatter: function (value) {
                    return value + "/mg";
                },
                shadowColor: '#fff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, '70%'], // x, y，单位px
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontSize: 18,
                    fontWeight: 'bolder',
                    color: '#00ff5a'
                }
            },
            data: [{
                value: 200,
                name: '废水油脂'
            }]
        }
    ]
};

var option_sm_5 = {
    tooltip : {
        formatter: "{a} : {c}"
    },
    series: [
        {
            name: '净水PH值',
            type: 'gauge',
            min: 1,
            max: 15,
            splitNumber: 7, // 分割数（大）
            radius: '70%',
            detail: {formatter:'{value}'},
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [0.357, '#c23630'],
                        [0.536, '#63869d'],
                        [1, '#c23630']
                    ],
                    width: 14 // 扇形厚度
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
                offsetCenter: [0, '-135%'],
                color: '#fff',
                fontSize: 20
            },
            detail: {
                shadowColor: '#fff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, '70%'], // x, y，单位px
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontSize: 18,
                    fontWeight: 'bolder',
                    color: '#00ff5a'
                }
            },
            data: [{
                value: 7.5,
                name: '净水PH值'
            }]
        }
    ]
};

var option_sm_6 = {
    tooltip : {
        formatter: "{a} : {c}"
    },
    series: [
        {
            name: '出水COD cr',
            type: 'gauge',
            min: 0,
            max: 80,
            splitNumber: 4, // 分割数（大）
            radius: '70%',
            detail: {formatter:'{value}'},
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [0.625, '#3cd978'],
                        [1, '#63869d']
                    ],
                    width: 14 // 扇形厚度
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
                offsetCenter: [0, '-135%'],
                color: '#fff',
                fontSize: 20
            },
            detail: {
                formatter: function (value) {
                    return value + "/mg";
                },
                shadowColor: '#fff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, '70%'], // x, y，单位px
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontSize: 18,
                    fontWeight: 'bolder',
                    color: '#00ff5a'
                }
            },
            data: [{
                value: 50,
                name: '出水COD cr'
            }]
        }
    ]
};

var option_sm_7 = {
    tooltip : {
        formatter: "{a} : {c}"
    },
    series: [
        {
            name: '出水BOD5',
            type: 'gauge',
            min: 0,
            max: 50,
            splitNumber: 5, // 分割数（大）
            radius: '70%',
            detail: {formatter:'{value}'},
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [0.4, '#3cd978'],
                        [1, '#63869d']
                    ],
                    width: 14 // 扇形厚度
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
                offsetCenter: [0, '-135%'],
                color: '#fff',
                fontSize: 20
            },
            detail: {
                formatter: function (value) {
                    return value + "/ml";
                },
                shadowColor: '#fff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, '70%'], // x, y，单位px
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontSize: 18,
                    fontWeight: 'bolder',
                    color: '#00ff5a'
                }
            },
            data: [{
                value: 20,
                name: '出水BOD5'
            }]
        }
    ]
};

var option_sm_8 = {
    tooltip : {
        formatter: "{a} : {c}"
    },
    series: [
        {
            name: '废水油脂',
            type: 'gauge',
            min: 0,
            max: 20,
            splitNumber: 4, // 分割数（大）
            radius: '70%',
            detail: {formatter:'{value}'},
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [0.75, '#3cd978'],
                        [1, '#63869d']
                    ],
                    width: 14 // 扇形厚度
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
                offsetCenter: [0, '-135%'],
                color: '#fff',
                fontSize: 20
            },
            detail: {
                formatter: function (value) {
                    return value + "/mg";
                },
                shadowColor: '#fff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, '70%'], // x, y，单位px
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontSize: 18,
                    fontWeight: 'bolder',
                    color: '#00ff5a'
                }
            },
            data: [{
                value: 15,
                name: '废水油脂'
            }]
        }
    ]
};

g_sm_1.setOption(option_sm_1, true);
g_sm_2.setOption(option_sm_2, true);
g_sm_3.setOption(option_sm_3, true);
g_sm_4.setOption(option_sm_4, true);
g_sm_5.setOption(option_sm_5, true);
g_sm_6.setOption(option_sm_6, true);
g_sm_7.setOption(option_sm_7, true);
g_sm_8.setOption(option_sm_8, true);

setInterval(function () {
    var min1 = 6; var max1 = 8.5;
    option_sm_1.series[0].data[0].value = (Math.random() * (max1 - min1) + min1).toFixed(2);
    
    var min2 = 1000; var max2 = 2000;
    option_sm_2.series[0].data[0].value = (Math.random() * (max2 - min2) + min2).toFixed(0);
    
    var min3 = 0; var max3 = 1000;
    option_sm_3.series[0].data[0].value = (Math.random() * (max3 - min3) + min3).toFixed(0);
    
    var min4 = 120; var max4 = 200;
    option_sm_4.series[0].data[0].value = (Math.random() * (max4 - min4) + min4).toFixed(0);

    var min5 = 6; var max5 = 8.5;
    option_sm_5.series[0].data[0].value = (Math.random() * (max5 - min5) + min5).toFixed(2);
    
    var min6 = 10; var max6 = 50;
    option_sm_6.series[0].data[0].value = (Math.random() * (max6 - min6) + min6).toFixed(0);

    var min7 = 0; var max7 = 20;
    option_sm_7.series[0].data[0].value = (Math.random() * (max7 - min7) + min7).toFixed(0);

    var min8 = 0; var max8 = 15;
    option_sm_8.series[0].data[0].value = (Math.random() * (max8 - min8) + min8).toFixed(0);


    g_sm_1.setOption(option_sm_1, true);
    g_sm_2.setOption(option_sm_2, true);
    g_sm_3.setOption(option_sm_3, true);
    g_sm_4.setOption(option_sm_4, true);
    g_sm_5.setOption(option_sm_5, true);
    g_sm_6.setOption(option_sm_6, true);
    g_sm_7.setOption(option_sm_7, true);
    g_sm_8.setOption(option_sm_8, true);
},2000);