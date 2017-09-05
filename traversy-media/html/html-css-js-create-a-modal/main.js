// Get modal elements.
var modal = document.getElementById('simpleModal');
// Get open modal button.
var modalBtn = document.getElementById('modalBtn');
// Get close button.
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for a click on the modal button.
modalBtn.addEventListener('click', openModal);

// Listen for the close click.
closeBtn.addEventListener('click', closeModal);

// Listen for an outside click.
window.addEventListener('click', outsideClick);

// Function to open modal.
function openModal() {
  modal.style.display = 'block';
}

// Function to close modal.
function closeModal() {
  modal.style.display = 'none';
}

// Function to close modal if there's an outside click.
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
