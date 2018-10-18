const form = document.getElementById('vote-form');

// Form submit event.
form.addEventListener('submit', e => {
  const choice = document.querySelector('input[name=os]:checked').value;
  const data = {os: choice};

  fetch('http://localhost:3000/poll', {
    method: 'post',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(res => res.json())
    .catch(err => console.log(err));

  e.preventDefault();
});

let dataPoints = [
  { label: 'Windows', y: 0 },
  { label: 'MacOS', y: 0 },
  { label: 'Linux', y: 0 },
  { label: 'Other', y: 0 },
];

const chartContainer = document.querySelector('#chartContainer');

if (chartContainer) {
  const chart = new CanvasJS.Chart('chartContainer', {
    animationEnabled: true,
    theme: 'theme1',
    title: {
      text: 'OS Results'
    },
    data: [
      {
        type: 'column',
        dataPoints: dataPoints
      }
    ]
  });
  chart.render();

// Enable pusher logging - don't include this in production
  Pusher.logToConsole = true;

  var pusher = new Pusher('a43e28d45b35d05d7abe', {
    cluster: 'eu',
    forceTLS: true
  });

  var channel = pusher.subscribe('os-poll');
  channel.bind('os-vote', function(data) {
    dataPoints = dataPoints.map(x => {
      if (x.label == data.os) {
        x.y += data.points;
        return x;
      } else {
        return x;
      }
    });
    chart.render();
  });
}
