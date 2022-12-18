// Color palette for data
var palette = ["#003f5c", "#2c4875", "#424c81", "#58508d", "#8a508f", "#bc5090", "#de5a79", "#ff6361", "#ff8531", "#ffa600"]

// Set up the data for the doughnut chart
var doughnutData = {
    labels: ["Age 0-4", "Age 15-19", "Age 20-24", "Age 25-29", "Age 30-34", "Age 35-39", "Age 40-44", "Age 45-49", "Age 50-54", "Age 55-74"],
    datasets: [{
        label: "Population",
        data: [546426,546750,657403,762757,715486,621899,596493,600514,584164,1658406],
        backgroundColor: palette
    }]
};

// Set up the data for the horizontal bar chart
var barData = {
    labels: ["1st Decile", "2nd Decile", "3rd Decile", "4th Decile", "5th Decile", "6th Decile", "7th Decile", "8th Decile", "9th Decile", "10th Decile"],
    datasets: [{
        label: "Total Income",
        data: [ 342.1,2279.1,3995.9,5978.8,8431.3,11351,15020,20034.5,28997,134038.4,230468.1],
        backgroundColor: palette
    }]
};

// Get the context of the canvas element we want to select
var ctx1 = document.getElementById("myChart").getContext("2d");
var ctx2 = document.getElementById("myChart2").getContext("2d");

// Create the doughnut chart
var myDoughnutChart = new Chart(ctx1, {
    type: 'doughnut',
    data: doughnutData,
    options: {
        title: {
            display: true,
            text: 'Mehdi Imam - Doughnut Chart - Projected Population By 2040'
        }
    }
});

// Create the horizontal bar chart
var myBarChart = new Chart(ctx2, {
    type: 'horizontalBar',
    data: barData,
    options: {
        title: {
            display: true,
            text: 'Mehdi Imam - Bar Chart - Personal Income By AGI Range'
        }
    }
});