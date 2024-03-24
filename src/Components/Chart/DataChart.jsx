import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import style from "./DataChart.module.css";
import { Button } from "reactstrap";
import axios from "axios";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Legend);

const DataChart = () => {
  // Chart
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  // Data Fetch URL
  const apiUrl = "https://api-car-rental.binaracademy.org/admin/order/reports";
  const apiToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc";

  useEffect(() => {
    fetchData("2022-06-01", "2022-06-30");
  }, []);

  const fetchData = async (from, until) => {
    try {
      const day = [];
      const orderCount = [];
      const response = await axios.get(apiUrl, {
        params: {
          from: from,
          until: until,
        },
        headers: {
          accept: "application/json",
          access_token: apiToken,
        },
      });
      for (const dataObj of response.data) {
        day.push(parseInt(dataObj.day.split("-")[2]));
        orderCount.push(parseInt(dataObj.orderCount));
      }
      // Chart Data & Options
      setChartData({
        labels: day,
        datasets: [
          {
            label: "Order Counter",
            data: orderCount,
            backgroundColor: "#586B90",
            borderWidth: "1",
          },
        ],
      });
      setChartOptions({
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              position: "bottom",
              text: "Date",
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              position: "left",
              text: "Amount of Car Rented",
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Filters for Chart (Dropdown)
  const [selectedMonth, setSelectedMonth] = useState("June - 2022");
  const monthToNumber = (month) => {
    const monthsMap = {
      January: "01",
      February: "02",
      March: "03",
      April: "04",
      May: "05",
      June: "06",
      July: "07",
      August: "08",
      September: "09",
      October: "10",
      November: "11",
      December: "12",
    };
    return monthsMap[month];
  };

  const filtersChart = (e) => {
    setSelectedMonth(e.target.value);
    console.log(e.target.value);
  };

  // Go Button
  const submitValue = () => {
    const [month, year] = selectedMonth.split(" - ");
    const from = `${year}-${monthToNumber(month)}-01`;
    const until = `${year}-${monthToNumber(month)}-30`;
    fetchData(from, until);
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className={style.rectangle} />
        <strong>Rented Car Data Visualization</strong>
      </div>

      <div className={style.fontcustom}>Month</div>
      <div className={style.filters}>
        <select value={selectedMonth} onChange={filtersChart}>
          <option value="January - 2022">January - 2022</option>
          <option value="February - 2022">February - 2022</option>
          <option value="March - 2022">March - 2022</option>
          <option value="April - 2022">April - 2022</option>
          <option value="May - 2022">May - 2022</option>
          <option value="June - 2022">June - 2022</option>
          <option value="July - 2022">July - 2022</option>
          <option value="August - 2022">August - 2022</option>
          <option value="September - 2022">September - 2022</option>
          <option value="October - 2022">October - 2022</option>
          <option value="November - 2022">November - 2022</option>
          <option value="December - 2022">December - 2022</option>
        </select>
        <Button className={style.gobutton} onClick={submitValue}>
          Go
        </Button>
      </div>

      <Bar options={chartOptions} data={chartData} />
    </>
  );
};

export default DataChart;
