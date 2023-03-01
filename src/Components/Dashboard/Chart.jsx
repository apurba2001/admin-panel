import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";

function StatisticsChart() {
    const chartRef = useRef(null);

    useEffect(() => {
        const myChartRef = chartRef.current.getContext("2d");

        new Chart(myChartRef, {
            type: "bar",
            data: {
                labels: ["Male", "Female"],
                datasets: [
                    {
                        label: "Gender",
                        data: [60, 40],
                        backgroundColor: ["#36a2eb", "#ff6384"],
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            },
        });
    }, []);

    return (
        <div>
            <canvas id="statistics-chart" ref={chartRef} />
        </div>
    );
}

function DepartmentChart() {
    const chartRef = useRef(null);

    useEffect(() => {
        const myChartRef = chartRef.current.getContext("2d");

        new Chart(myChartRef, {
            type: "doughnut",
            data: {
                labels: ["Students", "Administration"],
                datasets: [
                    {
                        data: [75, 25],
                        backgroundColor: ["#36a2eb", "#ff6384"],
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            },
        });
    }, []);

    return (
        <div>
            <canvas id="department-chart" ref={chartRef} />
        </div>
    );
}

export default function App() {
    return (
        <div>
            <h1>Statistics Chart</h1>
            <StatisticsChart />
            <h1>Department Chart</h1>
            <DepartmentChart />
        </div>
    );
}
