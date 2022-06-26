const labels = [
    'January',
    'February',
    'March',
    'April',
];

const labels1 = ['primero', 'segundo', 'tercero'];
const labelsU = ['Face U'];
const labelsV = ['Face V'];
const labelsW = ['Face W'];


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
const dataFaceU = {
    labels: labelsU,
    datasets: [{
        backgroundColor: ['rgb(22,123, 2)',
            'rgb(165, 165, 165)',
        ],
        // borderColor: 'rgb(200,42,32)',
        data: [100, 400]
    }]
};

const dataFaceV = {
    labels: labelsV,
    datasets: [{
        backgroundColor: ['rgb(22,123, 2)',
            'rgb(165, 165, 165)',
        ],
        // borderColor: 'rgb(200,42,32)',
        data: [30, 400]
    }]
};
const dataFaceW = {
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
const configFaceU = {
    type: 'doughnut',
    data: dataFaceU,
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
const configFaceV = {
    type: 'doughnut',
    data: dataFaceV,
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
const configFaceW = {
    type: 'doughnut',
    data: dataFaceW,
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
const generalTriface = {
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

const ctx1 = document.getElementById('triface');
const mixedChart = new Chart(ctx1, configMix);

const trifaceU = document.getElementById('faceU');
const trifaceUChart = new Chart(trifaceU, configFaceU);
const trifaceV = document.getElementById('faceV');
const trifaceChart = new Chart(trifaceV, configFaceV);
const trifaceW = document.getElementById('faceW');
const trifaceWChart = new Chart(trifaceW, configFaceW);

const gt = document.getElementById('generalTriface');
const generalTrifaceChart = new Chart(gt, generalTriface);

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