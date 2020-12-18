import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const options = {
    xAxis: {
        categories: ['1 Aug',"1 Aug", '3 Aug', "4 Aug", '5 Aug', "6 Aug", '7 Aug', "8 Aug",' 9 Aug', '10 Aug' , '11 Aug', '12 Aug', '13 Aug','14 Aug']
    },
    title: '',
    series: [{
        name: ' ',
        data: [250000, 500000, 300000, 900000, 1000000, 1500000, 2500000,4800000, 7000000, 2500000, 900000, 1000000, 5000000,11000000],
        zoneAxis: 'x',
        zones: [{
            value: 0
        }, {
            color: '#00B533'
        }]
    }, {
        name:' ',
        data: [200000, 250000, 200000, 750000, 800000, 850000, 900000, 950000, 750000, 500000, 600000, 750000,1500000,750000,9000000],
        zoneAxis: 'x',
        zones: [{
            value: 0
        }, {
            color: '#f5f53a'
        }],
    }]
};


class LineChart extends Component {
    render() {
        return (
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            </div>
        );
    }
}

export default LineChart;