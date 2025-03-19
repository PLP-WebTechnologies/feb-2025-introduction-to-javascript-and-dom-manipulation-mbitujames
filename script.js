// Change text content dynamically
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('text').textContent = 'The text has been changed!';
});

// Modify CSS styles via JavaScript
document.getElementById('changeColorBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightblue';
});

// Add a new element when a button is clicked
document.getElementById('addElementBtn').addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a new paragraph.';
    document.querySelector('.content').appendChild(newElement);
});

// Remove the last element when a button is clicked
document.getElementById('removeElementBtn').addEventListener('click', function() {
    const contentDiv = document.querySelector('.content');
    if (contentDiv.children.length > 1) {
        contentDiv.removeChild(contentDiv.lastChild);
    } else {
        alert('No more elements to remove!');
    }
});