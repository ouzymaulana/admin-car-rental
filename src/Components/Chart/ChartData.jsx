import { Chart as ChartJS } from "chart.js/auto";
import "chartjs-adapter-luxon";
import { Bar } from "react-chartjs-2";
import style from "./ChartData.module.css";
import { Button } from "reactstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function ChartData() {
  const [data, setData] = useState([]);
  const [selects, setSelects] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api-car-rental.binaracademy.org/admin/order/reports?from=2022-01-01&until=2022-01-31",
        {
          headers: {
            accept: "application/json",
            access_token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
          },
        }
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const chartconfig = {
    type: "bar",
    data,
    options: {
      scales: {
        x: {
          type: "linear",
          min: 1,
          max: data.length,
          ticks: {
            stepSize: 1,
          },
        },
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        title: {
          display: true,
          position: "left",
          text: "Amount of Car Rented",
        },
      },
    },
  };

  const filtersChart = (e) => {
    const value = e.target.value;
    setSelects(value);
    console.log(e.target.value);
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className={style.rectangle} />
        <strong>Rented Car Data Visualization</strong>
      </div>

      <div className={style.fontcustom}>Month</div>
      <div className="d-flex">
        <select value={selects} onChange={filtersChart}>
          <option>Please Select</option>
          <option value={data.day}>Jan - 2022</option>
        </select>
        <Button color="primary">Go</Button>
      </div>

      <Bar
        {...chartconfig}
        data={{
          labels: data.map((x) => x.day),
          datasets: [
            {
              label: "Order Count",
              data: data.map((x) => x.orderCount),
            },
          ],
        }}
      />
    </>
  );
}

export default ChartData;
