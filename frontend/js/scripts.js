// データを取得する関数
async function fetchData() {
    const response = await fetch('/api/data'); // APIエンドポイントを指定
    const data = await response.json();
    return data;
}


// データを HTML 要素に格納する関数
async function updateHtml() {
    const data = await fetchData();
    if (data) {
        // ここでデータが取得できた場合の処理を行います
        // 例: 温度と湿度を表示する要素の ID を指定して、その内容を更新します

        // 例えば、データが配列であると仮定します
        // data[0] の温度と湿度を表示する場合
        const temperatureElement = document.getElementById('temperature');
        const humidityElement = document.getElementById('humidity');

        if (data.length > 0) {
            temperatureElement.textContent = `温度: ${data[0].temperature} °C`;
            humidityElement.textContent = `湿度: ${data[0].humidity} %`;
        } else {
            temperatureElement.textContent = 'データがありません';
            humidityElement.textContent = 'データがありません';
        }
    }
}


// データを取得してグラフを更新する関数
async function updateChart() {
    const data = await fetchData();
    const tempData = data.map(item => item.temp);
    const humi = data.map(item => item.humi);
    tempHumiChart.data.datasets[0].data = tempData;
    tempHumiChart.data.datasets[1].data = humi;
    tempHumiChart.update();
}

// グラフの初期化
const ctx = document.getElementById('tempHumiChart').getContext('2d');
const tempHumidityChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1h前', '2h前', '3h前', '4h前', '5h前', '6h前', '現在'],
        datasets: [
            {
                label: '温度 (°C)',
                data: [],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                yAxisID: 'y-axis-temp'
            },
            {
                label: '湿度 (%)',
                data: [],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                yAxisID: 'y-axis-humidity'
            }
        ]
    },
    options: {
        responsive: false,
        scales: {
            yAxes: [
                {
                    id: 'y-axis-temp',
                    type: 'linear',
                    position: 'left',
                    ticks: {
                        suggestedMin: 20,
                        suggestedMax: 30
                    }
                },
                {
                    id: 'y-axis-humidity',
                    type: 'linear',
                    position: 'right',
                    ticks: {
                        suggestedMin: 40,
                        suggestedMax: 60
                    }
                }
            ],
            xAxes: [{
                display: false // x軸の格子線を非表示にする
            }]
        }
    }
});

// ページ読み込み時と定期的にデータを更新
window.onload = function() {
    updateChart();
    setInterval(updateChart, 60000); // 60秒ごとに更新
};
