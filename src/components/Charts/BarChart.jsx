import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);




const BarChart = ({chatData}) => {
  const BarChartReport = (value, booleanvalue) => {
    if (value === "used_phone") {
      return chatData.filter((item) => item.used_phone === booleanvalue)
    } else if (value === "official_warranty") {
      return chatData.filter((item) => item.official_warranty === booleanvalue)
    } else if (value === "unofficial_warranty") {
      return chatData.filter((item) => item.unofficial_warranty === booleanvalue)
    } else if (value === "no_warranty") {
      return chatData.filter((item) => item.no_warranty === booleanvalue)
    }
  }
  
   const options = {
    responsive: true,
    plugins: {
      
      legend: {
      
        display: false,
      },
      title: {
        display: false,
        text: 'Sources',
      },
      chartArea: {
        top: 0,
        left: 0,
      
      },
    },
  };
  
  const labels = ['Offical', 'Unoffical', 'Without Warranty', 'Used'];
  
  const data = {
    labels,
    datasets: [
      {
     
        data: [
          BarChartReport("official_warranty", true).length,
          BarChartReport("unofficial_warranty", true).length,
          BarChartReport("no_warranty", true).length,
          BarChartReport("used_phone", true).length,
        ],
        backgroundColor: '#0095A0',
        barPercentage: 3.5,
        barThickness: 20,
        maxBarThickness: 40,
       
      }
    ],
  };
  return (
  
    <Bar data={data} options={options}  height={300} />
  )
}


export default  BarChart