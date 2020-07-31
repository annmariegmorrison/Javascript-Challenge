console.log("Open")

// from data.js


var tableData = data;
var tbody = d3.select("tbody");

// YOUR CODE HERE!
data.forEach(function(tableData) {
console.log(tableData);
var row = tbody.append("tr");
Object.entries(tableData).forEach(function([key, value]) {
console.log(key, value);
// Append a cell to the row for each value in the weather report object
var cell = row.append("td");
cell.text(value);
});
});
    
