// 折线图
var line_car_temp = echarts.init(document.getElementById('line_car_temp'));
option_line_car_temp = {
    // color: ['#003366', '#006699', '#4cabce'],
    color: ['#e5e5e5', '#fcf300', '#e86300'],
    tooltip: {
        trigger: 'axis'
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
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            color: '#ffffff',
            fontSize: 14
        },
        data: ['2018/8/2', '2018/8/3', '2018/8/4', '2018/8/5']
    },
    yAxis: {
        type: 'value',
        max: 6,
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
            // color: '#00b9ed',
            width: 5
        },
        data:[6, 5, 4, 5]
    },
    {
        name:'2号冷藏车',
        type:'line',
        lineStyle: {
            // color: '#ae5ea2',
            width: 5
        },
        data:[4, 2, 3, 1]
    },
    {
        name:'3号冷藏车',
        type:'line',
        lineStyle: {
            // color: '#20ad36',
            width: 5
        },
        data:[1, 0, 2, 2]
    }]
};

line_car_temp.setOption(option_line_car_temp, true);