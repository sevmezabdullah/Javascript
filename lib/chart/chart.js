const showChartButton = document.getElementById("showChartButton");


showChartButton.addEventListener('click', () => {
    const ctx = document.getElementById('myChart').getContext('2d')



    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs"],
            datasets: [{
                label: 'Satışlar',
                data: [12, 23, 42, 67, 89],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(115, 205, 86)',
                    'rgb(115, 41, 16)',
                ],
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1
            },]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })
})
