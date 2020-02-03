// DOM elements.
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

// Show time.
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM.
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr format.
  hour = hour % 12 || 12;

  // Output time.
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${amPm}`;

  setTimeout(showTime, 1000);
}

// Add zeroes.
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set background picture and greeting.
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url('../img/morning.jpg')";
    greeting.textContent = 'Good Morning,';
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
    greeting.textContent = 'Good Afternoon,';
  } else {
    // Evening
    document.body.style.backgroundImage = "url('../img/evening.jpg')";
    greeting.textContent = 'Good Evening,';
    document.body.style.color = 'white';
  }
}

// Get name.
function getName() {
  if (localStorage.getItem('name') == null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set name.
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed.
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
    console.log(e.target.innerText);
  }
}

// Get focus.
function getFocus() {
  if (localStorage.getItem('focus') == null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set focus.
// Set name.
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed.
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
    console.log(e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run.
showTime();
setBgGreet();
getName();
getFocus();
