/***  1: When the button is clicked, a new paragraph should be added to the div.
2: The content of the paragraph should be the text entered into the input element.
3: The input element's text should be cleared when the button is pre */

let paragraphId = 0;

document.getElementById('addButton').addEventListener('click', () => {
  // Locate the parent 
  let parent = document.getElementById('p-div');

  // Create a new element
  let newElement = document.createElement('p');
  newElement.textContent = document.getElementById('p-input').value;
  newElement.setAttribute('id', paragraphId++);
// Attach to the parent
parent.appendChild(newElement);

// Clear out the input box after adding the element
document.getElementById('p-input').value = '';
});

