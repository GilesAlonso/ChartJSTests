var url = 'https://api.rows.com/v1beta1/spreadsheets/3Fc6yUcb0iZ8UjMUKR4IdA/tables/0d460a7f-6cc1-4e6a-a857-97f7b20c8bf4/values/A1:H';
var apiKey = process.env.{ROWS22062023};

var headers = {
  'Authorization': 'Bearer ' + apiKey
};

var options = {
  'headers': headers
};

 var response = UrlFetchApp.fetch(url, options);
var data = JSON.parse(response.getContentText());

// Process data and create chart
//  var labels = data.map(function(item) {
//   return item.label;
// });
// var values = data.map(function(item) {
//   return item.value;
// });


console.log(data)