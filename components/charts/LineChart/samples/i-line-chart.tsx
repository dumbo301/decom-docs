import {Module} from '@ijstech/components';
export default class ILineChart extends Module{
    render(){
        var data = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                  data: [22, 150, 175, 67, 52, 56, 220],
                  type: 'line'
                }
            ]
        };
        var dataProp = JSON.stringify(data);
        return <i-line-chart id="LineChart1" data={dataProp} top={40} width={1000} height={600}></i-line-chart>;
    }
}