// import React from "react";

// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Line } from "react-chartjs-2";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const data = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//   datasets: [
//     {
//       label: "First dataset",
//       data: [33, 53, 85, 41, 44, 65],
//       fill: true,
//       backgroundColor: "rgba(75,192,192,0.2)",
//       borderColor: "rgba(75,192,192,1)",
//     },
//     {
//       label: "Second dataset",
//       data: [33, 25, 35, 51, 54, 76],
//       fill: false,
//       borderColor: "#742774",
//     },
//   ],
// };

// export default function LineChart() {
//   return (
//     <div>
//       <Line data={data} />
//     </div>
//   );
// }

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      min: 5,
      max: 25,
      ticks: {
        stepSize: 5,
      },
    },
  },
  maintainAspectRatio: false,
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

export const data = {
  labels,

  datasets: [
    {
      label: "Products sold",
      data: [15, 10, 15, 18, 15, 24],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      lineTension: 0.4,
      pointRadius: 5,
      pointBackgroundColor: "white",
    },
    {
      label: "Total views",
      data: [19, 7, 15, 20, 18, 10],
      fill: true,
      backgroundColor: "rgba(181, 179, 251, 0.2)",
      borderColor: "rgba(181, 179, 251, 1)",
      pointBackgroundColor: "white",
      pointRadius: 5,
      lineTension: 0.4,
    },
  ],
};

export function LineChart() {
  return (
    <div className="bg-white rounded-[10px] min-w-[240px] min-h-[443px] py-4 px-5 order-2 md:order-1">
      <div className="overflow-hidden">
        <div className="flex justify-between">
          <p className="text-[18px] text-[#4D4F5C]">Statistics</p>
          <select className="outline-0 text-[#4D4F5C]" role="button">
            <option>Last 6 months</option>
            <option>Last 3 months</option>
          </select>
        </div>
        <div className="m-auto h-[300px] min-w-[400px] overflow-hidden mt-8">
          <Line options={options} data={data} />
        </div>
        <div className="flex mt-2 justify-start md:justify-center">
          <div className="text-[rgba(77,79,92,0.5)] text-sm pl-4">
            <span className="before:absolute before:w-[10px] before:h-[10px] before:bg-slate-300 before:rounded-full pl-4 before:ml-[-10px] before:mt-[5px] before:bg-[rgba(181,179,251,1)]"></span>
            <span className="pl-2">Total views</span>
          </div>
          <div className="text-[rgba(77,79,92,0.5)] text-sm pl-4">
            <span className="before:absolute before:w-[10px] before:h-[10px] before:bg-slate-300 before:rounded-full pl-4 before:ml-[-10px] before:mt-[5px] before:bg-[rgba(75,192,192,1)]"></span>
            <span className="pl-2">Products Sold</span>
          </div>
        </div>
      </div>
    </div>
  );
}
