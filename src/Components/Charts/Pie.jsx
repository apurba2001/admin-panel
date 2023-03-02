import React from 'react';
import { Pie } from 'react-chartjs-2';
import "chart.js/auto";

import orgData from '../../data/organization.json';

const PieChart = () => {
    const college = orgData.map((org) => org.name);
    const students = orgData.map((org) => org.students);

    const chartData = {
        labels: college,
        datasets: [
            {
                data: students,
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0'
                ]
            }
        ]
    };

    return (
        <div style={{ width: "300px" }}>
            <Pie
                data={chartData}
                options={{
                    title: {
                        display: true,
                        text: 'Organization-wise Student Data',
                        fontSize: 25
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            />
        </div>
    );
};

export default PieChart;
