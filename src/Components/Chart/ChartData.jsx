import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function ChartData() {
  return (
    <>
      <Bar
        data={{
          labels: ["A", "B", "C"],
          datasets: [
            {
              data: [200, 400, 600],
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              display: true,
              position: "left",
              text: "Amount of Car Rented",
            },
          },
        }}
      />
    </>
  );
}

export default ChartData;
