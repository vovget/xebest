// 折线图

var curFlag2 = null;
var DATE_NOW_CAR = new Date();

function load_line_car() {
    var line_car_temp = echarts.init(document.getElementById('line_car_temp'));
    
    var data_car_1 = [],
    data_car_2 = [],
    data_car_3 = [];

    // 初始化数据 50 条
    for (var i = 0; i < 50; i++) {
        data_car_1.push(randomCarData());
        data_car_2.push(randomCarData());
        data_car_3.push(randomCarData());
    }

    // 折线图参数
    var option_line_car_temp = {
        color: ['#e5e5e5', '#fcf300', '#e86300'],
        tooltip: {
            trigger: 'axis',
            formatter: function (params) {//需要接收一个参数数组
                item = params[0];
                var date = new Date(item.name);//这个就是name，对应的是时间
                return item.seriesName + '<br/>' +  date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate() + ' : ' + item.value[1] + '℃';
            },
            axisPointer: {
                animation: true
            }
        },
        legend: {
            top: 0,
            right: 10,
            textStyle: {
                color: '#ffffff',
                fontSize: 14
            },
            data:[
                {
                    name: '1号冷藏车',
                    icon: 'roundRect',
                    color: '#00b9ed'
                },
                {
                    name: '2号冷藏车',
                    icon: 'roundRect'
                },
                {
                    name: '3号冷藏车',
                    icon: 'roundRect'
                }
            ]
        },
        xAxis: {
            type: 'time',
            splitNumber: 3, //x轴刻度个数
            splitLine : {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#ffffff',
                }
            },
            axisLabel: {
                color: '#ffffff',
                fontSize: 14
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            max: -10,
            axisLine: {
                lineStyle: {
                    color: '#ffffff',
                }
            },
            axisLabel: {
                color: '#ffffff',
                fontSize: 14
            }
        },
        series: [
        {
            name:'1号冷藏车',
            type:'line',
            lineStyle: {
                width: 3
            },
            showSymbol: false, // 隐藏线上标记
            hoverAnimation: false, // 鼠标放置动画
            data: data_car_1
        },
        {
            name:'2号冷藏车',
            type:'line',
            lineStyle: {
                width: 3
            },
            showSymbol: false, // 隐藏线上标记
            hoverAnimation: false, // 鼠标放置动画
            data: data_car_2
        },
        {
            name:'3号冷藏车',
            type:'line',
            lineStyle: {
                width: 3
            },
            showSymbol: false, // 隐藏线上标记
            hoverAnimation: false, // 鼠标放置动画
            data: data_car_3
        }]
    };

    line_car_temp.setOption(option_line_car_temp, true);
    // 按秒刷新
    setInterval(function () {
        var flag = Math.random();
        data_car_1.shift();
        data_car_1.push(randomCarData(flag, 1));

        data_car_2.shift();
        data_car_2.push(randomCarData(flag, 2));

        data_car_3.shift();
        data_car_3.push(randomCarData(flag, 3));
        
        line_car_temp.setOption({
            series: [
                {
                    data: data_car_1
                },
                {
                    data: data_car_2
                },
                {
                    data: data_car_3
                }
            ]
        });
    }, 1000);


}
// 生成随机数
function randomCarData(flag, type) {
    var min, max;
    var curValue;
    
    if (curFlag2 !== flag) {
        DATE_NOW_CAR = new Date(+DATE_NOW_CAR + ONE_SECOND);
        curFlag2 = flag;
    }
    
    if (type == 1) {
        min = -15, max = -10;
    }
    else if (type == 2) {
        min = -22, max = -13;
    }
    else {
        min = -25, max = -18;
    }

    // 随机数概率设定
    var n1 = Math.round(Math.random()*100);
    var n2 = Math.ceil(Math.random()*9);
    
    if (n1 < 90) {
        curValue = min;
    }
    else { // 10% 概率温度浮动
        curValue = (Math.random() * (max - min) + min).toFixed(0)
    }
    
    var value = 0;
    var minute=DATE_NOW_CAR.getMinutes()<10?'0'+DATE_NOW_CAR.getMinutes():DATE_NOW_CAR.getMinutes();
    var second=DATE_NOW_CAR.getSeconds()<10?'0'+DATE_NOW_CAR.getSeconds():DATE_NOW_CAR.getSeconds();

    return { 
        name: DATE_NOW_CAR.toString(),
        value: [
            [DATE_NOW_CAR.getFullYear(), DATE_NOW_CAR.getMonth(), DATE_NOW_CAR.getDate()].join('/')+" "+[DATE_NOW_CAR.getHours(),minute,second].join(':'),
            curValue
            //(Math.random() * (max - min) + min).toFixed(0)
        ]
    }
}