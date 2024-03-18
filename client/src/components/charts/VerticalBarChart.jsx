import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["A", "B", "C", "D", "E"],
  datasets: [
    {
      label: "Vertical Bar Chart",
      data: [12, 19, 3, 5, 2],
      backgroundColor: "rgba(54, 162, 235, 0.6)", // Adjust the background color
      borderColor: "rgba(54, 162, 235, 1)", // Adjust the border color
      borderWidth: 1,
    },
  ],
};
const VerticalBarChart = () => {
  const options = {
    indexAxis: "x",
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default VerticalBarChart;
