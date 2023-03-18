import React from 'react';
import { Bar } from 'react-chartjs-2';

import groupData from '../../data/attendence.json'

const StudentChart = () => {

    return (
        <div style={{width: "45%",   "box-shadow":" rgba(0, 0, 0, 0.24) 0px 3px 8px", "border-radius": "10px", "padding": "10px 20px", "height": "300px"}}>
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
