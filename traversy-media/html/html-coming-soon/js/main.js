const countdown = document.querySelector('.countdown');

// Set launch date.
const launchDate = new Date('Jan 1, 2019 13:00:00').getTime();

// Update every second.
const intvl = setInterval(() => {
    // Get today's date and time in ms.
    const now = new Date().getTime();

    // Distance from now to the launch date.
    const distance = launchDate - now;

    // Time calculations.
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result.
    countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Minutes</span></div>
        <div>${secs}<span>Seconds</span></div>
    `;

    // If launch date is passed.
    if (distance < 0) {
        // Stop the countdown.
        clearInterval(intvl);
        // Style and output some text.
        countdown.style.color = "#17a2b8";
        countdown.innerHTML = "Launched";
    }
}, 1000);
