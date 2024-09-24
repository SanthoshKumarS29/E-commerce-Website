import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Total Income',
        data: [20, 100, 15, 80, 10, 70, 50],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4, // Smooth curve
        pointBackgroundColor: 'green',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
      },
      {
        label: 'Total Expense',
        data: [100, 20, 90, 40, 80, 45, 40],
        borderColor: 'rgba(255, 205, 86, 1)',
        backgroundColor: 'rgba(255, 205, 86, 0.2)',
        fill: true,
        tension: 0.4, // Smooth curve
        pointBackgroundColor: 'orange',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 120, // Adjust based on your data
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
