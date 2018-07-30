/***********************************************************************************/
// 地图路线
var map_path = echarts.init(document.getElementById("map_path"));
var app = {};
var infoMap = [
    {name: '北京', coord: [26, 42], temp: '-18℃', isArrive: true, isCurrent: false, date: '2018-07-29 22:21'},
    {name: '高碑店', coord: [24, 36], temp: '-17℃', isArrive: true, isCurrent: false, date: '2018-07-30 03:10'},
    {name: '邢台', coord: [19.5, 21], temp: '-15℃', isArrive: true, isCurrent: true, date: '2018-07-30 17:55'},
    {name: '安阳', coord: [19, 10], isArrive: false, isCurrent: false},
    {name: '郑州', coord: [16, 0], isArrive: false, isCurrent: false}
];

//var color  = ['#ACACAC', '#058232', '#2FD871', '#FD2F05']; //灰，绿，浅绿，红
var color  = ['#b6c5d3', '#068433', '#3cd978', '#FD2F05']; //灰，绿，浅绿，红

option_map_path = null;
option_map_path = {
    grid: {
        bottom: 20
    },
    xAxis: {
        show: false,
        //interval: 2,
        max: 50
    },
    yAxis: {
        show: false,
        //interval: 2,
        max: 50
    },
    series: [
        {// 城市点
            type: 'scatter',
            zlevel: 2,
            data: infoMap.map(function(item) { //[[16, 46], [14, 42], [9, 27], [7.5, 17], [1, 8]],
                return {
                    name: item.name,
                    value: item.coord,
                    symbolSize: 18,
                    label: {
                        normal: {                  // 默认的文本标签显示样式
                            show: item.isCurrent ? false : true,
                            position: 'right',      // 标签显示的位置
                            formatter : function (value) {
                                if (item.date) {
                                    return '{styleGreen|' + item.temp + ' ' + item.name + '\n}{styleBottom|' + item.date + '}';
                                }
                                else {
                                    return '{styleGrey|' + item.name + '}';
                                }
                            },
                            rich: {
                                styleGreen: {
                                    fontSize: 18,
                                    fontWeight: 600,
                                    padding: 3,
                                    color: '#3cd978'
                                },
                                styleGrey: {
                                    fontSize: 18,
                                    fontWeight: 600,
                                    padding: 3,
                                    color: '#b6c5d3'
                                },
                                styleBottom: {
                                    fontSize: 12,
                                    color: '#3cd978'
                                }
                            }
                        }
                    },
                    itemStyle: {
                        color: item.isArrive ? color[1] : color[0],
                        borderColor: item.isArrive ? color[2] : color[0],
                        borderWidth: 4,
                        opacity: 1
                    }
                };
            })
        },
        {// 总路线
            type: 'line',
            zlevel: 2,
            showSymbol: false,
            lineStyle: {
                width: 4
            },
            itemStyle: {
                color: color[0],
            },
            data: infoMap.map(function(item) {
                return {
                    name: item.name,
                    value: item.coord
                };
            })
        },
        {// 已走路线
            type: 'line',
            zlevel: 2,
            showSymbol: false,
            itemStyle: {
                color: color[2],
            },
            lineStyle: {
                width: 4
            },
            data: infoMap.map(function(item) {
                if (item.isArrive) {
                    return {
                        name: item.name,
                        value: item.coord
                    };
                }
            })
        },
        {// 散点效果
            type: 'effectScatter',         
            zlevel: 3,
            label: {
                normal: {                  // 默认的文本标签显示样式
                    show: true,
                    position: 'right',      // 标签显示的位置
                    formatter: function (item) {
                        return '{styleRed|' + item.data.temp + ' ' + item.data.name + '\n}{styleBottom|' + item.data.date + '}';
                    },
                    rich: {
                        styleRed: {
                            fontSize: 18,
                            fontWeight: 600,
                            padding: 3,
                            color: '#ff6021'
                        },
                        styleBottom: {
                            fontSize: 12,
                            color: '#ff6021'
                        }
                    }
                }
            },
            symbolSize: 18,
            itemStyle: {
                normal: {
                    color: color[3]
                }
            },
            data: [{
                    name: '邢台',
                    temp: '-20℃',
                    date: '2018-08-01 07:30',
                    value: [19.5, 21],  // 起点的位置
                    symbolSize: 18,  // 散点的大小，通过之前设置的权重来计算，val的值来自data返回的value
            }]
        }
    ]
};

map_path.setOption(option_map_path, true);