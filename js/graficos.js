// MAPA DINAMICO INDEX
google.charts.load({
    'packages': ['geochart'],
    // Note: Because markers require geocoding, you'll need a mapsApiKey.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    // 'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['City', 'dat0'],
        ['Panama city', 1],
        ['Mexico', 2],
        ['Colón', 10],
    ]);

    var options = {
        backgroundColor: '#92b9e0',
        defaultColor: '#a5a5a5',
        region: '013',
        displayMode: 'markers',
        colorAxis: {
            colors: ['green', 'blue']
        },
        // datalessRegionColor: '#f8bbd0'
    };

    var chart = new google.visualization.GeoChart(document.getElementById('chart_map'));
    chart.draw(data, options);
};

// Tacometros
google.charts.load('current', {
    'packages': ['gauge']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Face U', 2],
        ['Face V', 10],
        ['Face W', 15]
    ]);

    var options = {
        greenFrom: 0,
        greenTo: 10,
        yellowFrom: 10,
        yellowTo: 15,
        redFrom: 15,
        redTo: 20,
        minorTicks: 1,
        majorTicks: 20,
        max: 20
    };

    var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

    chart.draw(data, options);

    setInterval(function () {
        data.setValue(0, 1, 10 + Math.round(10 * Math.random()));
        chart.draw(data, options);
    }, 13000);
    setInterval(function () {
        data.setValue(1, 1, 10 + Math.round(10 * Math.random()));
        chart.draw(data, options);
    }, 5000);
    setInterval(function () {
        data.setValue(2, 1, 10 + Math.round(10 * Math.random()));
        chart.draw(data, options);
    }, 26000);
}
// Chart.js
const labels = [
    'January',
    'February',
    'March',
    'April',
];

const labels1 = ['primero', 'segundo', 'tercero'];
const labelsU = ['Fase U'];
const labelsV = ['Fase V'];
const labelsW = ['Fase W'];


const data = {
    labels: labels,
    datasets: [{
        label: 'LINEAS',
        backgroundColor: ['rgb(255,99, 13)',
            'rgba(75, 192, 192)',
            'rgba(54, 16, 235)',
            'rgba(193, 102, 255)',
        ],
        borderColor: 'rgb(200,42,32)',
        data: [3, 40, 10, 24],
        borderWidth: 1
    }]
};

const data1 = {
    labels: labels1,
    datasets: [{
        label: 'Barras',
        data: [65, 59, 80, 100],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(25, 129, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(25, 129, 64)',
            'rgb(255, 205, 86)'
        ],
        borderWidth: 2
    }]
};
const dataFaseU = {
    labels: labelsU,
    datasets: [{
        backgroundColor: ['rgb(22,123, 2)',
            'rgb(165, 165, 165)',
        ],
        // borderColor: 'rgb(200,42,32)',
        data: [100, 400]
    }]
};

const dataFaseV = {
    labels: labelsV,
    datasets: [{
        backgroundColor: ['rgb(22,123, 2)',
            'rgb(165, 165, 165)',
        ],
        // borderColor: 'rgb(200,42,32)',
        data: [30, 400]
    }]
};
const dataFaseW = {
    labels: labelsW,
    datasets: [{
        backgroundColor: ['rgb(22,123, 2)',
            'rgb(165, 165, 165)',
        ],
        // borderColor: 'rgb(200,42,32)',
        data: [30, 400]
    }]
};


const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        layout: {
            padding: 20
        }
    }
};


// otra grafica


const config1 = {
    type: 'bar',
    data: data1,
    options: {
        layout: {
            padding: 2
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: 'rgb(55, 100, 3)'
                }
            }
        },
        responsive: true
    },
};
const configFaseU = {
    type: 'doughnut',
    data: dataFaseU,
    options: {
        responsive: true,
        parsing: {
            key: 'nested.value'
        },
        layout: {
            padding: 20
        }
    }
};
const configFaseV = {
    type: 'doughnut',
    data: dataFaseV,
    options: {
        responsive: true,
        parsing: {
            key: 'nested.value'
        },
        layout: {
            padding: 20
        }
    }
};
const configFaseW = {
    type: 'doughnut',
    data: dataFaseW,
    options: {
        responsive: true,
        parsing: {
            key: 'nested.value'
        },
        layout: {
            padding: 20
        }
    }
};

const configMix = {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Bar Dataset',
            data: [10, 7, 16, 43],
            // this dataset is drawn below
            backgroundColor: '#fd2',
            order: 2
        }, {
            label: 'Line Dataset',
            data: [20, 3, 4, 50],
            type: 'bar',
            backgroundColor: '#3d2',
            // this dataset is drawn on top
            order: 1
        }],
        labels: ['January', 'February', 'March', 'April']
    },
    options: {
        layout: {
            padding: 20
        }
    }
}
const generalTriFase = {
    type: 'line',
    data: {
        datasets: [{
            label: 'U',
            data: [30, 5, 10, 15],
            // this dataset is drawn below
            backgroundColor: '#fd2',
            borderColor: '#fd2',
            order: 2
        }, {
            label: 'V',
            data: [10, 15, 4, 30],
            type: 'line',
            backgroundColor: '#3d2',
            borderColor: '#3d2',
            // this dataset is drawn on top
            order: 1
        }, {
            label: 'W',
            data: [12, 30, 7, 20],
            type: 'line',
            backgroundColor: '#34f',
            borderColor: '#34f',
            // this dataset is drawn on top
            order: 1
        }],
        labels: ['January', 'February', 'March', 'April']
    },
    options: {
        layout: {
            padding: 20
        }
    }
}

const ctx1 = document.getElementById('trifase');
const mixedChart = new Chart(ctx1, configMix);

/* const triFaseU = document.getElementById('faseU');
const triFaseUChart = new Chart(triFaseU, configFaseU);
const triFaseV = document.getElementById('faseV');
const triFaseChart = new Chart(triFaseV, configFaseV);
const triFaseW = document.getElementById('faseW');
const triFaseWChart = new Chart(triFaseW, configFaseW); */

const gt = document.getElementById('generalTrifase');
const generalTriFaseChart = new Chart(gt, generalTriFase);

const ctx2 = document.getElementById('lineas1');
const myChart2 = new Chart(ctx2, config);
const ctx3 = document.getElementById('lineas2');
const myChart3 = new Chart(ctx3, config);

/* const myChart1 = new Chart(
    document.getElementById('myChart1'),
    config1
);

const myChart2 = new Chart(
    document.getElementById('lineas2'),
    config
); */