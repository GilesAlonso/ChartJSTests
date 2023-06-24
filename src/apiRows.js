// Import Chart.js library (ensure you have included Chart.js in your HTML file)
import Chart from 'chart.js/auto'

// Async function to fetch data from the API and display it using Chart.js
async function fetchDataAndDisplayChart() {
  // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint URL
  const apiUrl = 'https://api.rows.com/v1beta1/spreadsheets/3Fc6yUcb0iZ8UjMUKR4IdA/tables/0d460a7f-6cc1-4e6a-a857-97f7b20c8bf4/values/C2:D';

  // Replace 'YOUR_AUTHORIZATION_BEARER_KEY' with the actual authorization bearer key
  const bearerKey = process.env.ROWS22062023;
 //'rows-1aj6MoPnhev34JotHgwFRavg7GPydsLna9koCxL58rpJ'
  try {
    // Fetch data from the API using authorization header
    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${bearerKey}`
      }
    });
    
    const data = await response.json();
    
    console.log(data); // Log the data to inspect its structure
    
    if (Array.isArray(data)) {
      const labels = data.map(item => item[0]);
      const values = data.map(item => item[1]);
    
      // Create the chart using Chart.js
      const ctx = document.getElementById('myChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Data',
            data: values,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            },
            x: {
              type: 'time',
              time: {
                unit: 'day',
                displayFormats: {
                  day: 'YYYY-MM-DD HH:mm:ss'
                }
              }
            }
          }
        }
      });
    } else {
      console.log('Unexpected data format:', data);
    }
  } catch (error) {
    // Handle any errors that occurred during the fetch request
    console.error('Error:', error);
  }
}

// Call the async function to fetch data and display the chart
fetchDataAndDisplayChart();
