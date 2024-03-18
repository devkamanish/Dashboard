import React from "react";
import { Bar } from "react-chartjs-2";

const SimpleBarChart = () => {
  // Sample data for the chart
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: "rgba(54, 162, 235, 0.6)", // Blue color for bars
        borderColor: "rgba(54, 162, 235, 1)", // Border color for bars
        borderWidth: 1,
      },
    ],
  };

  // Options for the chart
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Sales",
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default SimpleBarChart;
