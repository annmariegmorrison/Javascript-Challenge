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

// Append a cell to the row for each value 
var cell = row.append("td");
cell.text(value);
});
});
 
var button = d3.select("#filter-btn");
var form =  d3.select("#datetime");
button.on("click", runEnter)
form.on("submit", runEnter);

// Listen for events 

function runEnter() {
    d3.event.preventDefault();
    var date = d3.select("#datetime").property("value");
    var filterData = tableData
    if (date){
        filterData = filterData.filter(row => row.datetime === date);
        console.log(filterData);
    }
    tbody.html("")
    filterData.forEach((ufoSightings) => {
        var row = tbody.append("tr");
        Object.entries(ufoSightings).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    }); 
}
