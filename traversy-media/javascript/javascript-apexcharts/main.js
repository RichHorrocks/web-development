// Chart options.
const options = {
  chart: {
    height: 450,
    width: '100%',
    type: 'bar',
    background: '#f4f4f4f',
    foreColor: '#333'
  },

  series: [{
    name: 'Population',
    data: [
      8550405,
      3971883,
      2720546,
      2296224,
      1567442,
      1563025,
      1469845,
      1394928,
      1300092,
      1026908
    ]
  }],

  xaxis: {
    categories: [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Philadelphia",
      "Phoenix",
      "San Antonio",
      "San Diego",
      "Dallas",
      "San Jose"
    ]
  },

  plotOptions: {
    bar: {
      horizontal: false
    }
  },

  fill: {
    colors: ['#f44336']
  },

  dataLabels: {
    enabled: false
  },

  title: {
    text: 'Largest US Cities By Population',
    align: 'center',
    margin: 20,
    offsetY: 20,
    style: {
      fontSize: '25px'
    }
  }
};

// Init chart
const chart = new ApexCharts(document.querySelector("#chart"), options);

// Render chart
chart.render();

// Event method example.
document.querySelector('button').addEventListener('click', () => chart.updateOptions({
  plotOptions: {
    bar: {
      horizontal: true
    }
  }
}));
