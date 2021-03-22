import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const Dashboard = () => {
    const [ state, setState ] = useState([]);
    const options1 = {
        xAxis: {
            categories: []
        },
        yAxis: {
            categories: []
        },
        title: {
            text: 'Sales per product'
        },
        series: [ {
            name: 'Sales',
            data: []
        } ]
    }

    const options2 = {
        title: {
            text: 'Blinx store'
        },
        series: [ {
            name: 'Sales',
            data: []
        } ]
    };

    let url = '/api/products/';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => {
                setState((state) => {
                    return [
                        ...json
                    ];
                });

            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [ url ]);

    state.map(obj => {
        options1.yAxis.categories.push(obj.productName);
        options1.series[0].data.push(obj.sales);
        options1.xAxis.categories.push(new Date(obj.date))
    });

    console.log('State outside useEffect: ', state)
    return (
        <div>
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options1}
                />
            </div>
{/*            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options1}
                />
            </div>*/}
        </div>
    );
};

export default Dashboard;