import { useEffect, useRef, useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

function IncomeChart() {
  const chartRef = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (chart) {
      chart.destroy();
    }

    const newChart = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
        datasets: [
          {
            label: "# of votes",
            data: [15000, 1000, 100000, 30000, 40000, 20000, 15000],
            backgroundColor: "#764abc",
            fill: true,
          },
        ],
      },
      options: {
        tension: 0.4,
        pointStyle: false,
        plugins: {
          legend: false,
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            ticks: {
              stepSize: 25000,
            },
            beginAtZero: true,
          },
        },
      },
      height: 400,
      width: 600,
    });

    setChart(newChart);

    // Clean up the chart 
    return () => {
      if (newChart) {
        newChart.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />
}

export default IncomeChart