
var body = document.getElementById('body');


var interestRateStart = 0.05;
var interestRateEnd = 0.07;
var interestRateIncrement = 0.01;
var rowStart = 1;
var rowEnd = 10;
var rowIncrement = 1;
var initialPrincipal = 1000;

for (var i = interestRateStart; i <= interestRateEnd; i += interestRateIncrement) {
  //create the tables
  var table = document.createElement('table');
  var headerRow = document.createElement('tr');
  var headerYear = document.createElement('th');
  var headerPrincipal = document.createElement('th');
  var headerInterest = document.createElement('th');
  headerYear.innerHTML = 'Year';
  headerPrincipal.innerHTML = 'Amount on Deposit';
  headerInterest.innerHTML = 'Interest Rate';
  headerRow.appendChild(headerYear);
  headerRow.appendChild(headerPrincipal);
  headerRow.appendChild(headerInterest);
  table.appendChild(headerRow);

  for (var j = rowStart; j <= rowEnd; j += rowIncrement) {
    var dataRow = document.createElement('tr');
    var dataYear = document.createElement('td');
    var dataPrincipal = document.createElement('td');
    var dataInterest = document.createElement('td');
    dataYear.innerHTML = j;
    dataInterest.innerHTML = i.toFixed(2);
    dataPrincipal.innerHTML = (initialPrincipal * Math.pow((1 + i) , j)).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2, style: 'currency', currency: 'USD'});

    dataRow.appendChild(dataYear);
    dataRow.appendChild(dataPrincipal);
    dataRow.appendChild(dataInterest);
    table.appendChild(dataRow);
  }

  body.appendChild(table);
}
