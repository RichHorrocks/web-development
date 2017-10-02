// EVENTS

var button = document.getElementById('button').addEventListener
('click', buttonClick);

function buttonClick(e) {
  //console.log("Button clicked");
  //document.getElementById('header-title').textContent = "changed";
  //document.querySelector('#main').style.backgroundColor = '#f4f4f4';
  //console.log(e);

  //console.log(e.target);
  //console.log(e.target.id);
  //console.log(e.target.className);
  //console.log(e.target.classList);

  //var output = document.getElementById('output');
  //output.innerHTML = '<h3>' + e.target.id + '</h3>';

  //console.log(e.type);
  //console.log(e.clientX, e.clientY);
  //console.log(e.altKey);
  //console.log(e.ctrlKey);
  //console.log(e.shiftKey);
}

var button = document.getElementById('button');
var box = document.getElementById('box');

//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent);

box.addEventListener('mouseenter', runEvent);

function runEvent(e) {
  console.log('Event type: ' + e.type);
}
