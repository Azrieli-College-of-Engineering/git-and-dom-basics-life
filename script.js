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
  // TODO: create a new <li> element and append it to the list
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
  // TODO: remove all list items from the UL
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
  // TODO: toggle the highlight class on all list items
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
  // This line will be modified on each branch.  See README.md for guidance on resolving the conflict.
  document.getElementById('status').innerText = msg;
}

// -----------------------------------------------------------------------------
// Event listeners
// -----------------------------------------------------------------------------
// TODO: Add event listeners to the buttons.  Each handler should:
//  - Read the value from the input field with ID "item-input" if relevant.
//  - Call the appropriate function (addItem(), clearItems() or toggleHighlight()).
//  - Clear the input field after adding an item.
//  - You can attach event listeners using element.addEventListener('click', function() { ... }).

// Example (to be implemented on branches):
// document.getElementById('btn-add-item').addEventListener('click', function() {
//   const text = document.getElementById('item-input').value;
//   addItem(text);
//   document.getElementById('item-input').value = '';
// });