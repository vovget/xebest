// 折线图
var line_storage_temp = echarts.init(document.getElementById('line_storage_temp'));
var line_car_temp = echarts.init(document.getElementById('line_car_temp'));
option_line_storage_temp = {
    // color: ['#003366', '#006699', '#4cabce'],
    color: ['#00b9ed', '#ae5ea2', '#20ad36'],
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
        max: 12,
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
            // color: '#00b9ed',
            width: 5
        },
        data:[1, 3, 5, 2]
    },
    {
        name:'郑州冷库',
        type:'line',
        lineStyle: {
            // color: '#ae5ea2',
            width: 5
        },
        data:[5, 6, 5, 7]
    },
    {
        name:'漯河冷库',
        type:'line',
        lineStyle: {
            // color: '#20ad36',
            width: 5
        },
        data:[9, 7, 10, 11]
    }]
};

line_storage_temp.setOption(option_line_storage_temp, true);
line_car_temp.setOption(option_line_storage_temp, true);