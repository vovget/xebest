// 折线图
var curFlag1 = null;
var DATE_NOW_STO = new Date();
var ONE_SECOND = 1000; //1秒

function load_line_storage() {
    // 初始化
    var line_storage_temp = echarts.init(document.getElementById('line_storage_temp'));
    var data_storage_1 = [],
        data_storage_2 = [],
        data_storage_3 = [];

    // 初始化数据 50 条
    for (var i = 0; i < 50; i++) {
        data_storage_1.push(randomStorageData());
        data_storage_2.push(randomStorageData());
        data_storage_3.push(randomStorageData());
    }

    // 折线图参数
    var option_line_storage_temp = {
        color: ['#00b9ed', '#ae5ea2', '#20ad36'],
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
                    name: '北京冷库',
                    icon: 'roundRect',
                    color: '#00b9ed'
                },
                {
                    name: '郑州冷库',
                    icon: 'roundRect'
                },
                {
                    name: '漯河冷库',
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
            min: -20,
            max: -12,
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
            name:'北京冷库',
            type:'line',
            lineStyle: {
                width: 3
            },
            showSymbol: false, // 隐藏线上标记
            hoverAnimation: false, // 鼠标放置动画
            data: data_storage_1
        },
        {
            name:'郑州冷库',
            type:'line',
            lineStyle: {
                width: 3
            },
            showSymbol: false, // 隐藏线上标记
            hoverAnimation: false, // 鼠标放置动画
            data: data_storage_2
        },
        {
            name:'漯河冷库',
            type:'line',
            lineStyle: {
                width: 3
            },
            showSymbol: false, // 隐藏线上标记
            hoverAnimation: false, // 鼠标放置动画
            data: data_storage_3
        }]
    };

    line_storage_temp.setOption(option_line_storage_temp, true);

    // 按秒刷新
    setInterval(function () {
        var flag = Math.random();
        data_storage_1.shift();
        data_storage_1.push(randomStorageData(flag, 1));

        data_storage_2.shift();
        data_storage_2.push(randomStorageData(flag, 2));

        data_storage_3.shift();
        data_storage_3.push(randomStorageData(flag, 3));
        
        line_storage_temp.setOption({
            series: [
                {
                    data: data_storage_1
                },
                {
                    data: data_storage_2
                },
                {
                    data: data_storage_3
                }
            ]
        });
    }, 1000);
};

// 生成随机数
function randomStorageData(flag, type) {
    var min, max;
    var curValue;
    
    if (curFlag1 !== flag) {
        DATE_NOW_STO = new Date(+DATE_NOW_STO + ONE_SECOND);
        curFlag1 = flag;
    }
    
    if (type == 1) {
        min = -18, max = -15;
    }
    else if (type == 2) {
        min = -15, max = -13;
    }
    else {
        min = -20, max = -16;
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
    var minute=DATE_NOW_STO.getMinutes()<10?'0'+DATE_NOW_STO.getMinutes():DATE_NOW_STO.getMinutes();
    var second=DATE_NOW_STO.getSeconds()<10?'0'+DATE_NOW_STO.getSeconds():DATE_NOW_STO.getSeconds();

    return { 
        name: DATE_NOW_STO.toString(),
        value: [
            [DATE_NOW_STO.getFullYear(), DATE_NOW_STO.getMonth(), DATE_NOW_STO.getDate()].join('/')+" "+[DATE_NOW_STO.getHours(),minute,second].join(':'),
            curValue
            //(Math.random() * (max - min) + min).toFixed(0)
        ]
    }
}