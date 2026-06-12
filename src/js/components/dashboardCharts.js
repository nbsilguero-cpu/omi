export function initDashboardCharts() {
  const grid = 'rgba(0,0,0,0.06)';
  const muted = '#6b7280';

  const componentes = document.getElementById('chartComponentes');
  if (componentes) {
    new Chart(componentes, {
      type: 'bar',
      data: {
        labels: ['Ambiente de control', 'Gestión del riesgo', 'Actividades de control', 'Información y comunicación', 'Supervisión'],
        datasets: [{
          label: 'Avance (%)',
          data: [85, 62, 70, 55, 78],
          backgroundColor: '#0C447C',
          borderRadius: 6,
          maxBarThickness: 36
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true, max: 100, grid: { color: grid }, ticks: { color: muted } },
          x: { grid: { display: false }, ticks: { color: muted, font: { size: 11 } } }
        },
        plugins: { legend: { display: false } }
      }
    });
  }

  const evolucion = document.getElementById('chartEvolucion');
  if (evolucion) {
    new Chart(evolucion, {
      type: 'line',
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
        datasets: [{
          label: 'Índice global',
          data: [68, 70, 71, 74, 76, 78.4],
          borderColor: '#1D9E75',
          backgroundColor: 'rgba(29,158,117,0.1)',
          fill: true,
          tension: 0.35,
          pointRadius: 3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { min: 50, max: 100, grid: { color: grid }, ticks: { color: muted } },
          x: { grid: { display: false }, ticks: { color: muted } }
        },
        plugins: { legend: { display: false } }
      }
    });
  }

  const subsistema = document.getElementById('chartSubsistema');
  if (subsistema) {
    new Chart(subsistema, {
      type: 'doughnut',
      data: {
        labels: ['Control estratégico', 'Control de gestión', 'Control de evaluación'],
        datasets: [{
          data: [40, 35, 25],
          backgroundColor: ['#0C447C', '#1D9E75', '#BA7517'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '65%',
        plugins: {
          legend: { position: 'bottom', labels: { color: muted, font: { size: 11 }, boxWidth: 12 } }
        }
      }
    });
  }
}
