import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const data = {
  labels: ["France ", "Japan", "Italy", "Canada"],
  datasets: [
    {
      label: "# of Sales",
      data: [4260, 3970, 4260, 3970],
      backgroundColor: ["#80E2FF", "#F49FA8", "#FFDF94", "#B5B3FB"],
      borderWidth: 0,
    },
  ],
};
const options = {
  cutout: 90,
  plugins: {
    legend: {
      display: false,
    },
  },
};
const plugins = [
  {
    beforeDraw: function (chart) {
      var width = chart.width,
        height = chart.height,
        ctx = chart.ctx;
      ctx.restore();

      var fontSize = 18;
      ctx.font = fontSize + "px sans-serif";
      ctx.fillStyle = "#4D4F5C";

      ctx.textAlign = "center";
      const sum = chart.data.datasets[0].data.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
      );
      var text = `${numberWithCommas(sum)}`,
        textX = width / 2,
        textY = height / 2 + chart.chartArea.top;
      ctx.fillText(text, textX, textY);
      ctx.restore();

      ctx.font = fontSize + "px sans-serif";
      ctx.fillStyle = "#4D4F5C";
      ctx.textAlign = "center";
      ctx.fillText("Sales", textX, textY + 30);

      ctx.save();
    },
  },
];

export function DoughChart() {
  return (
    <div className="bg-white rounded-[10px] py-4 px-5 min-w-[240px] min-h-[300px] order-3 md:order-2">
      {" "}
      <p className="text-[18px] text-[#4D4F5C]">Sales Distribution</p>
      <div className="max-w-[300px] sm:w-[280px] min-h-[200px] w-full mx-auto mt-8">
        <Doughnut data={data} options={options} plugins={plugins} />
      </div>
      <p className="border-t-[1px] text-center my-5 text-[#3B86FF] text-sm"></p>
      <div className="grid grid-cols-2 justify-items-center mt-4">
        <div className="text-[rgba(77,79,92,0.5)] text-sm pl-4">
          <span className="before:absolute before:w-[10px] before:h-[10px] before:bg-[#80E2FF] before:rounded-full pl-4 before:ml-[-10px] before:mt-[5px] before:bg-[rgba(181,179,251,1)]"></span>
          <span className="pl-2 text-[#43425D] text-sm">France</span>
          <span className="pl-2">4260 sales</span>
        </div>
        <div className="text-[rgba(77,79,92,0.5)] text-sm pl-4">
          <span className="before:absolute before:w-[10px] before:h-[10px] before:bg-[#F49FA8] before:rounded-full pl-4 before:ml-[-10px] before:mt-[5px] before:bg-[rgba(181,179,251,1)]"></span>
          <span className="pl-2 text-[#43425D] text-sm">Italy</span>
          <span className="pl-2">3970 sales</span>
        </div>
        <div className="text-[rgba(77,79,92,0.5)] text-sm pl-4">
          <span className="before:absolute before:w-[10px] before:h-[10px] before:bg-[#FFDF94] before:rounded-full pl-4 before:ml-[-10px] before:mt-[5px] before:bg-[rgba(181,179,251,1)]"></span>
          <span className="pl-2 text-[#43425D] text-sm">Japan</span>
          <span className="pl-2">4260 sales</span>
        </div>
        <div className="text-[rgba(77,79,92,0.5)] text-sm pl-4">
          <span className="before:absolute before:w-[10px] before:h-[10px] before:bg-[#B5B3FB] before:rounded-full pl-4 before:ml-[-10px] before:mt-[5px] before:bg-[rgba(181,179,251,1)]"></span>
          <span className="pl-2 text-[#43425D] text-sm">Canada</span>
          <span className="pl-2">3970 sales</span>
        </div>
      </div>
    </div>
  );
}
