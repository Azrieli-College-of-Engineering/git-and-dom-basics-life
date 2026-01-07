/**
 * Creates a new list item (<li>) containing the specified text and
 * appends it to the unordered list with ID "item-list".
 */
function addItem(text) {
  // Create a new <li> element
  const li = document.createElement("li");
  li.textContent = text;
  
  // Get the list and append the new item
  const temp = document.getElementById("item-list");
  temp.appendChild(li); // Fixed: appendChild (capital C)
  
  // Update status
  updateStatus("Added: " + text);
}

/**
 * Removes all items from the unordered list with ID "item-list".
 */
function clearItems() {
  // Get the UL element
  const itemList = document.getElementById("item-list");
  
  if (itemList) {
    // Remove all child elements using a loop
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
    }
    
    // Call updateStatus to describe the action
    updateStatus("Cleared: All items have been removed from the list.");
  }
}

/**
 * Toggles the CSS class "highlight" on each list item in the
 * unordered list with ID "item-list".
 */
function loadpage() {
  let list = document.getElementById("item-list");
}

function toggleHighlight() {
  // Get all <li> elements within the list
  const listItems = document.querySelectorAll("#item-list li");
  
  // Toggle the "highlight" class on each item
  listItems.forEach(item => {
    item.classList.toggle("highlight");
  });
  
  // Call updateStatus to describe the action
  updateStatus("Toggled: Highlight class toggled on all items");
}

/**
 * Displays a status message on the page.
 */
function updateStatus(msg) {
  document.getElementById('status').innerText = msg;
}

// -----------------------------------------------------------------------------
// Event listeners
// -----------------------------------------------------------------------------

// Add Item button
document.getElementById('btn-add-item').addEventListener('click', function() {
  const text = document.getElementById('item-input').value;
  if (text.trim() !== '') { // Check if input is not empty
    addItem(text);
    document.getElementById('item-input').value = ''; // Clear input field
  }
});

// Clear Items button
document.getElementById('btn-clear-items').addEventListener('click', function() {
  clearItems();
});

// Toggle Highlight button
document.getElementById('btn-toggle-highlight').addEventListener('click', function() {
  toggleHighlight();
});

// Call loadpage when the DOM is ready
document.addEventListener('DOMContentLoaded', loadpage);
