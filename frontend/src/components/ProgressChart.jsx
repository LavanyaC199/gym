import { Bar } from "react-chartjs-2";

export default function ProgressChart() {
  const data = {
    labels: ["Week 1", "Week 2", "Week 3"],
    datasets: [
      {
        label: "Weight Progress (kg)",
        data: [70, 69, 68],
      },
    ],
  };

  return (
    <div className="card">
      <h3>📈 Progress Tracker</h3>
      <Bar data={data} />
    </div>
  );
}
