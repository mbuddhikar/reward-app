import React from 'react';
import { Pie } from '@ant-design/charts';

const PieChart = () => {
    var data = [
        {
            type: 'Classification One',
            value: 27,
        },
        {
            type: 'Classification Two',
            value: 25,
        },
        {
            type: 'Classification Three',
            value: 18,
        },
        {
            type: 'Classification Four',
            value: 15,
        },
        {
            type: 'Classification Five',
            value: 10,
        },
        {
            type: 'Other',
            value: 5,
        },
    ];
    var config = {
        appendPadding: 10,
        data: data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.75,
        label: {
            type: 'spider',
            labelHeight: 28,
            content: '{name}\n{percentage}',
        },
        interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
    };
    return < Pie {...config} />;
};

export default PieChart;