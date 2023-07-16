$(document).ready(function () {
  $("#btn").click(
    (function () {
      window
        .fetch("http://127.0.0.1:5500/otros/Crear%20Grafica/paises.json", { method: "get" })
        .then((response) => response.json())
        .then((json) => renderChart(json))
        .catch((err) => alert(err));
      function renderChart(dataset) {
        let ctx = document.getElementById("lifeChart");
        let barChart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: dataset.map((el) => el.country),
            datasets: [
              {
                label: "expectativa vida (años)",
                backgroundColor: "rgba(63,191,63, 0.8)",
                borderColor: "rgba(63,191,63, 1)",
                data: dataset.map((el) => el.lifeExpectancy),
              },
            ],
            dataset: [
              {
                label: "vida (años)",
                backgroundColor: "rgba(63,191,63, 0.8)",
                borderColor: "rgba(63,191,63, 1)",
                data: dataset.map((el) => el.lifeExpectancy),
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              yAxes: [{ ticks: { beginAtZero: true } }],
              xAxes: [{ ticks: { autoSkip: false } }],
            },
          },
        });
      }
    })()
  );
});
