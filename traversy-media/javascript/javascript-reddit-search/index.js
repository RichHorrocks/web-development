import reddit from './reddit_api';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

// Form event listener.
searchForm.addEventListener('submit', e => {
    // Get search term.
    const searchTerm = searchInput.value;
    // Get sort.
    const sortBy = document.querySelector('input[name="sortby"]:checked').value;
    // Get limit.
    const searchLimit = document.getElementById('limit').value;

    console.log(searchTerm);
    // Check form isn't empty.
    if (!searchTerm) {
        // Show a message.
        console.log("empty");
        //showMessage('Please add a search term', 'alert-danger');
    }

    // Clear input.
    searchInput.value = '';

    // Search Reddit.
    //reddit.search(searchTerm, searchLimit, sortBy);

    e.preventDefault();
});

// Show message.
function showMessage(message, className) {
    // Create the div.
    const div = document.createElement('div');
    // Add classes.
    div.className = `alert ${className}`;
    // Add text.
    div.appendChild(document.createTextNode(message));
    // Get parent container.
    const searchContainer = document.getElementById('search-container');
    // Get search.
    const search = document.getElementById('search');

    // Insert the message.
    searchContainer.insertBefore(div, search);

    // Timeout alert.
    setTimeout(() => document.querySelector('.alert').remove(), 3000 );
}
