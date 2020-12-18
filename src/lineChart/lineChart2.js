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
        data: [2, 8, 3, 13, 14, 15, 17,18, 21, 17, 14, 14, 19,23],
        zoneAxis: 'x',
        zones: [{
            value: 0
        }, {
            color: '#f5f53a'
        }]
    }, {
        name:' ',
        data: [1, 3, 0, 10, 12, 13, 13, 14, 14, 12, 9, 11,12,14,11],
        zoneAxis: 'x',
        zones: [{
            value: 0
        }, {
            color: '#00B533'
        }],
    }]
};

class LineChart2 extends Component {
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

export default LineChart2;