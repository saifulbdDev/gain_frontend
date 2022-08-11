import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ chatData = [] }) => {
  const ProductFilter = (value) => {
    if (value === "Bikroy.com") {
      return chatData.filter((item) => item.ad_category === value);
    } else {
      return chatData.filter((item) => item.seller_name === value);
    }
  };

  let total =
    ProductFilter("Pickaboo").length +
    ProductFilter("Daraz").length +
    ProductFilter("Bikroy.com").length;

  const options = {
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: false,
        text: "Condition",
      },
    },
  };

  const data = {
    labels: [
      `Daraz ${(total / 100) * ProductFilter("Daraz").length} %`,
      `Bikroy ${(total / 100) * ProductFilter("Daraz").length} %`,
      `Pickaboo ${(total / 100) * ProductFilter("Pickaboo").length} %`,
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [
          (total / 100) * ProductFilter("Daraz").length,
          (total / 100) * ProductFilter("Bikroy.com").length,
          (total / 100) * ProductFilter("Pickaboo").length,
        ],
        backgroundColor: ["#0095A0", "#FFC239", "#84AF27"],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
      },
    ],
  };
  return <Pie options={options} data={data} height={300} width={280} />;
};
export default PieChart;
