const labels = [
    'January',
    'February',
    'March',
    'April',
];

const labels1 = ['primero', 'segundo', 'tercero'];
const labels2 = ['barra1', 'barra2', 'barra3'];


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

const data2 = {
    labels: labels2,
    datasets: [{
        backgroundColor: ['rgb(255,99, 13)',
            'rgba(75, 192, 192)',
            'rgba(54, 16, 235)',
            'rgba(193, 102, 255)',
        ],
        // borderColor: 'rgb(200,42,32)',
        data: [1500, 400, 100]
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
const config2 = {
    type: 'doughnut',
    data: data2,
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
const configMix ={
    type: 'bar',
    data: {
        datasets: [{
            label: 'Bar Dataset',
            data: [10, 7,16,43],
            // this dataset is drawn below
            backgroundColor: '#fd2',
            order: 2
        }, {
            label: 'Line Dataset',
            data: [20,3,4,50],
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

const ctx1 = document.getElementById('mixta');
const mixedChart = new Chart(ctx1,
    configMix
);
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, config);
const myChart1 = new Chart(
    document.getElementById('myChart1'),
    config1
);

const myChart2 = new Chart(
    document.getElementById('myChart2'),
    config2
);