import Chart from 'chart.js/auto'

const bearerKey = process.env.ROWS22062023;

function fetchDataAndUpdateChart() {
    // Fetch the data from the API endpoint
    fetch('https://api.rows.com/v1beta1/spreadsheets/3Fc6yUcb0iZ8UjMUKR4IdA/tables/0d460a7f-6cc1-4e6a-a857-97f7b20c8bf4/values/D4:H', {
        headers: {
            'Authorization': `Bearer ${bearerKey}`
        }
    })
        .then(response => response.json())
        .then(data => {
            // Extract the necessary data from the API response
            const items = data.items;
            const labels = items.map(item => item[0]);
            const values1 = items.map(item => parseFloat(item[1].replace('$', '')));
            const values2 = items.map(item => parseFloat(item[2].replace('$', '')));
            const values3 = items.map(item => parseFloat(item[3].replace('$', '')));
            const values4 = items.map(item => parseFloat(item[4].replace('$', '')));

            // Create the chart
            const ctx = document.getElementById('chart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [
                        /**     {
                              label: 'Value 1',
                              data: values1,
                              backgroundColor: 'rgba(0, 123, 255, 0.2)',
                              borderColor: 'rgba(0, 123, 255, 1)',
                              borderWidth: 1
                            },
                            {
                              label: 'Value 2',
                              data: values2,
                              backgroundColor: 'rgba(255, 99, 132, 0.2)',
                              borderColor: 'rgba(255, 99, 132, 1)',
                              borderWidth: 1
                            },
                            {
                              label: 'Value 3',
                              data: values3,
                              backgroundColor: 'rgba(75, 192, 192, 0.2)',
                              borderColor: 'rgba(75, 192, 192, 1)',
                              borderWidth: 1
                            }, */
                        {
                            label: 'Value 4',
                            data: values4,
                            backgroundColor: 'rgba(255, 159, 64, 0.2)',
                            borderColor: 'rgba(255, 159, 64, 1)',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            display: true,
                            title: {
                                display: true,
                                text: 'Date-Time'
                            }
                        },
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: 'Value'
                            }
                        }
                    }
                }
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });

};

setInterval(fetchDataAndUpdateChart, 5000);
