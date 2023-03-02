import React from 'react';
import { Bar } from 'react-chartjs-2';

import groupData from '../../data/attendence.json'

const StudentChart = () => {

    return (
        <div style={{width: "50%"}}>
            <Bar
                data={groupData}
                options={{
                    plugins: {
                        legend: {
                            position: 'top'
                        },
                        title: {
                            display: true,
                            text: 'Group data',
                            fontSize: 25,
                        }
                    },
                    scales: {
                        x: {
                            stacked: true,
                        },
                        y: {
                            stacked: true,
                            max: 40,
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    },
                }}
            />
        </div>
    );
};

export default StudentChart;
