/*
 * DOM Basics Assignment skeleton
 *
 * This file defines the functions and event listeners that you will implement
 * on your individual feature branches.  Follow the instructions in
 * README.md and the TODO comments below.  Remember to use meaningful
 * commit messages and practise branching and merging as described in the
 * assignment.
 */

/**
 * Creates a new list item (<li>) containing the specified text and
 * appends it to the unordered list with ID "item-list".
 *
 * TODO (feature/add-item): implement this function.  Use
 * document.getElementById() to select the list, document.createElement()
 * to create the <li> and appendChild() to add it to the list.  You
 * should also call updateStatus() with a message describing the action.
 *
 * @param {string} text - The text content of the new list item.
 */
function addItem(text) {
  // Get the unordered list element by ID
  const list = document.getElementById('item-list');
  // Create a new list item
  const li = document.createElement('li');
  // Set its text content
  li.innerText = text;
  // Append the new item to the list
  list.appendChild(li);
  // Update the status message
  updateStatus(`Added: ${text}`);
}

/**
 * Removes all items from the unordered list with ID "item-list".
 *
 * TODO (feature/clear-items): implement this function.  Use a loop
 * (for example, while the list has a firstChild) to remove each child
 * element.  After clearing the list, call updateStatus() with a
 * description of the action.
 */
function clearItems() {
  // Get the unordered list element
  const list = document.getElementById('item-list');
  // Remove each child until the list is empty
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  // Update the status message
  updateStatus('Cleared: All items removed');
}

/**
 * Toggles the CSS class "highlight" on each list item in the
 * unordered list with ID "item-list".  When applied, the class
 * changes the background colour of items (see styles.css).  When
 * removed, items return to the default style.
 *
 * TODO (feature/toggle-highlight): implement this function.  Use
 * document.querySelectorAll() to retrieve all <li> elements and
 * element.classList.toggle() to add or remove the "highlight" class.
 * Call updateStatus() to describe the action.
 */
function toggleHighlight() {
  // Select all list items inside the unordered list
  const items = document.querySelectorAll('#item-list li');
  items.forEach((item) => {
    // Toggle the highlight class defined in styles.css
    item.classList.toggle('highlight');
  });
  // Update the status message
  updateStatus('Toggled: highlight');
}

/**
 * Displays a status message on the page.  Each branch will modify
 * this function to include a prefix to the message (for example,
 * "Added: ", "Cleared: " or "Toggled: ").  When branches are
 * merged a conflict will occur on the line that sets the innerText.
 * You must resolve the conflict by choosing a single implementation.
 *
 * @param {string} msg - The status message to display.
 */
function updateStatus(msg) {
  // Display the provided message in the status paragraph
  document.getElementById('status').innerText = msg;
}

// -----------------------------------------------------------------------------
// Event listeners
// -----------------------------------------------------------------------------
// Wait for the DOM content to be fully loaded before attaching listeners
document.addEventListener('DOMContentLoaded', () => {
  // Reference the input and buttons
  const inputField = document.getElementById('item-input');
  const addBtn = document.getElementById('btn-add-item');
  const clearBtn = document.getElementById('btn-clear-items');
  const toggleBtn = document.getElementById('btn-toggle-highlight');

  // Add event listener for the "Add Item" button
  addBtn.addEventListener('click', () => {
    const text = inputField.value.trim();
    if (text !== '') {
      addItem(text);
      // Clear the input field
      inputField.value = '';
    }
  });

  // Add event listener for the "Clear Items" button
  clearBtn.addEventListener('click', () => {
    clearItems();
  });

  // Add event listener for the "Toggle Highlight" button
  toggleBtn.addEventListener('click', () => {
    toggleHighlight();
  });
});