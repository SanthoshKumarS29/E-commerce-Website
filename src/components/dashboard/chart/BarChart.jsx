import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SkillBarChart = () => {
  const data = {
    labels: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Django', 'MySQL'], // Skills as X-axis labels
    datasets: [
      {
        label: 'Proficiency (%)',  // This can be changed based on what you want
        data: [85, 90, 80, 75, 70, 65, 60],  // Corresponding proficiency levels
        backgroundColor: [
          '#4caf50', '#2196f3', '#ffeb3b', '#f44336', '#9c27b0', '#3f51b5', '#ff5722',
        ],  // Different colors for each skill bar
        borderColor: [
          '#388e3c', '#1976d2', '#fbc02d', '#d32f2f', '#7b1fa2', '#303f9f', '#e64a19',
        ],  // Border colors
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y',  // This makes the bars horizontal
    responsive: true,
    plugins: {
      legend: {
        display: false,  // Hide the legend as it's usually not needed for skill bars
      },
      title: {
        display: true,
        text: 'Skill Proficiency',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 100,  // Proficiency in percentages, so max 100
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default SkillBarChart;
