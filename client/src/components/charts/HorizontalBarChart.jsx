import React from "react";
import { Bar } from "react-chartjs-2";
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
ChartJS.register(
  Tooltip,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  ArcElement,
  Legend,
);
const barData = {
  labels: ["A", "B", "C", "D", "E"],
  datasets: [
    {
      label: "Horizontal Bar Chart",
      data: [12, 19, 3, 5, 2],
      backgroundColor: "rgba(255, 99, 132, 0.6)", // Adjust the background color
      borderColor: "rgba(255, 99, 132, 1)", // Adjust the border color
      borderWidth: 1,
    },
  ],
};
const HorizontalBarChart = () => {
  const options = {
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Value",
        },
      },
    },
  };

  return <Bar data={barData} options={options} />;
};

export default HorizontalBarChart;
