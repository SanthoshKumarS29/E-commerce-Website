import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ['Shippings', 'Refunds', 'Order', 'Income'],
    datasets: [
      {
        label: 'Total Sales',
        data: [32, 11, 14, 32], // Adjusted to your example
        backgroundColor: ['#4caf50', '#ffeb3b', '#f44336', '#2196f3'],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom', // Adjust as per your UI
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
