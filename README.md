[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=22074225&assignment_repo_type=AssignmentRepo)
# DOM Basics Group Assignment

This assignment builds on your previous Git and JavaScript exercises and introduces more extensive DOM manipulation. You will work in groups of **up to three** students using GitHub Classroom. Each partner will implement a feature on a separate branch, creating merge conflicts that you will resolve together. The goals are to practise collaborative Git workflows, reinforce fundamental Git commands, and write JavaScript code that dynamically interacts with the Document Object Model (DOM).

## Learning objectives

By completing this assignment you will:

* Practise core Git operations – cloning, creating branches, staging and committing changes, synchronising with a remote repository, merging branches and resolving conflicts.
* Use branches to work on features in parallel.
* Experience a merge conflict caused by each partner modifying the same line of code and learn how to resolve it.
* Learn DOM basics by programmatically creating, modifying and removing HTML elements using JavaScript and the DOM API.
* Link external CSS and JavaScript files to your HTML page.

## Files provided

Your repository contains the following files:

| File             | Purpose                                                                                                                                                                                                                                                                 |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`index.html`** | A barebones web page with an input field, three buttons, an unordered list for displaying items, and a placeholder `<img>` element for the logo. It links the external stylesheet and script file.                                                                      |
| **`script.js`**  | A JavaScript file containing skeleton functions `addItem(text)`, `clearItems()`, `toggleHighlight()`, and `updateStatus(msg)`. TODO comments indicate which partner should implement which function. The file also instructs you to add event listeners to the buttons. |
| **`styles.css`** | A stylesheet defining basic layout and a `.highlight` class that will be toggled via JavaScript. You may customise this file once you merge your branches.                                                                                                              |
| **`logo.png`**   | A random logo image to embed in the page. This file is provided as a placeholder. Do not replace it with another image.                                                                                                                                                 |
| **`.gitignore`** | A starter ignore file listing common folders and files that should not be tracked.                                                                                                                                                                                      |
| **`README.md`**  | This document.                                                                                                                                                                                                                                                          |

---

## Prerequisites

Before you begin, review the Git command table from your course materials. Important commands include `git init`, `git add`, `git commit`, `git status`, `git log`, `git branch` and `git switch`, `git merge`, and `git push`/`git pull`.

Also ensure you understand how to link external stylesheets and scripts in HTML pages.

---

## ⏱ DOM + JavaScript Crash Course (Required – ~10 Minutes)

Before starting the assignment, **all group members must read this section**.
It introduces the DOM and JavaScript concepts required for this assignment **without solving it**.

### What is the DOM?

The **Document Object Model (DOM)** is a live JavaScript representation of the HTML page.

Each HTML element becomes an object that JavaScript can:

* Read
* Modify
* Create
* Remove

Any change you make to the DOM is immediately reflected in the browser.

---

### Selecting elements

Before you can work with an element, you must select it:

```js
document.getElementById("id")
document.querySelector(".class")
document.querySelectorAll("li")
```

* `getElementById` returns one element
* `querySelector` returns the first matching element
* `querySelectorAll` returns a collection (NodeList)

---

### Reading and updating content

```js
element.innerText
element.innerHTML
```

Used to update messages, status text, or list items.

---

### Creating and removing elements

```js
const li = document.createElement("li");
li.innerText = "Item";
parent.appendChild(li);
```

Removing elements:

```js
parent.removeChild(child);
```

This is how dynamic lists and tables work.

---

### Working with CSS classes from JavaScript

```js
element.classList.add("highlight");
element.classList.remove("highlight");
element.classList.toggle("highlight");
```

JavaScript controls **behaviour**.
CSS controls **appearance**.

---

### Events

JavaScript reacts to user actions using event listeners:

```js
button.addEventListener("click", function () {
  // code runs when clicked
});
```

Common events:

* `click`
* `submit`
* `input`

For forms:

```js
event.preventDefault();
```

---

### DOMContentLoaded

Always wait for the DOM before accessing elements:

```js
document.addEventListener("DOMContentLoaded", function () {
  // safe to access DOM
});
```

---

## 🔐 Connecting Git Bash to GitHub Using SSH (Required Setup)

For this course, **SSH is the recommended and required method** for connecting Git Bash to GitHub.

### Why SSH?

* Authenticate once
* No username/password prompts
* Fewer errors
* Industry-standard workflow

---

### Step 1: Open Git Bash

On Windows:

* Right-click → **Git Bash Here**
* Or open Git Bash from the Start Menu

---

### Step 2: Check for an existing SSH key

```bash
ls ~/.ssh
```

If you see files such as `id_ed25519` and `id_ed25519.pub`, you already have a key and may skip to Step 4.

---

### Step 3: Generate an SSH key

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

* Press **Enter** to accept the default location
* Press **Enter** again to skip setting a passphrase

---

### Step 4: Add the SSH key to GitHub

```bash
cat ~/.ssh/id_ed25519.pub
```

Copy the output and add it in GitHub:

GitHub → Settings → SSH and GPG keys → New SSH key

---

### Step 5: Test the connection

```bash
ssh -T git@github.com
```

You should see a successful authentication message.

---

### Step 6: Clone the repository using SSH

```bash
git clone git@github.com:ORG/REPO.git
cd REPO
```

Verify:

```bash
git remote -v
```

URLs must start with `git@github.com`.

---

## Workflow instructions

This exercise assumes a group of **three** students. If your group has only two members, one student should take two features. Follow these steps carefully.

### 1. Accept and clone the repository

1. Accept the GitHub Classroom invitation for this assignment and create a repository for your group. All group members should have access.

2. Clone the repository to your local machine:

   ```bash
   git clone <your-repo-URL>
   cd <repo-folder>
   ```

3. Configure your name and email if not already set:

   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "you@example.com"
   ```

### 2. Explore the template

Open `index.html` in your editor and browser to see the skeleton. Inspect `script.js`: each function contains a TODO comment explaining what to implement. Note that the `updateStatus()` function currently sets the text of a `<p>` element with ID `status`. Each branch will modify this line differently, causing a merge conflict later.

### 3. Create feature branches and implement functionality

Each partner will work on a dedicated branch.  Use `git switch -c` to create and switch to your branch.

#### Partner A – Add Item feature (`feature/add-item`)

1. Create and switch to the branch:

   ```bash
   git switch -c feature/add-item
   ```

2. Implement the `addItem(text)` function in `script.js` as follows:
   * Use `document.getElementById('item-list')` to get a reference to the `<ul>` element.
   * Use `document.createElement('li')` to create a new `<li>` element.
   * Set its `innerText` to the `text` argument and append it to the list using `appendChild()`.
   * Call `updateStatus()` with a message describing the action (e.g., just pass `text`).

3. Modify `updateStatus(msg)` so that it prefixes messages with **"Added: "** before the message.  For example, if `msg` is `"Car"`, the status text should become `"Added: Car"`.

4. Add an event listener for the **Add Item** button in the bottom section of `script.js`.  The handler should read the value of the input field, call `addItem()`, and clear the input field.  Use the example shown in the skeleton as guidance.  Remember to use `parseInt` when converting numbers (not needed here, but recall that `parseInt` returns `NaN` if parsing fails).

5. Stage and commit your changes:

   ```bash
   git add script.js
   git commit -m "Implement addItem() feature and updateStatus() prefix"
   git push -u origin feature/add-item
   ```

#### Partner B – Clear Items feature (`feature/clear-items`)

1. Create and switch to your branch:

   ```bash
   git switch -c feature/clear-items
   ```

2. Implement the `clearItems()` function so that it removes all children from the `<ul>` element.  One way is to loop while `list.firstChild` exists and call `removeChild()` on the list.
3. Modify `updateStatus(msg)` so that it prefixes messages with **"Cleared: "** before the message.
4. Add an event listener for the **Clear Items** button that calls `clearItems()` and passes a message (e.g., `"All items removed"`) to `updateStatus()`.
5. Commit and push your branch:

   ```bash
   git add script.js
   git commit -m "Implement clearItems() and updateStatus() prefix"
   git push -u origin feature/clear-items
   ```

#### Partner C – Toggle Highlight feature (`feature/toggle-highlight`)

1. Create and switch to your branch:

   ```bash
   git switch -c feature/toggle-highlight
   ```

2. Implement the `toggleHighlight()` function.  Use `document.querySelectorAll('#item-list li')` to select all list items and iterate over them with `forEach()`.  Use `classList.toggle('highlight')` to add or remove the `highlight` class defined in `styles.css`.
3. Modify `updateStatus(msg)` to prefix messages with **"Toggled: "**.
4. Add an event listener for the **Toggle Highlight** button that calls `toggleHighlight()` and passes a message (e.g., `"Highlight toggled"`) to `updateStatus()`.
5. Commit and push your branch:

   ```bash
   git add script.js
   git commit -m "Implement toggleHighlight() and updateStatus() prefix"
   git push -u origin feature/toggle-highlight
   ```

### 4. Optional: Style your page

Open `styles.css`.  It contains default rules for the page and a `.highlight` class that sets a yellow background colour.  After merging, you can modify colours, fonts or add transitions.  Remember that external stylesheets are linked from the HTML using `<link>`.

### 5. Merge branches and resolve conflicts

Once all branches have been pushed, merge them into `main` one by one:

1. Switch to `main` and pull the latest changes:

   ```bash
   git switch main
   git pull origin main
   git fetch origin
   ```

2. Merge the `feature/add-item` branch into `main`:

   ```bash
   git merge feature/add-item
   ```

3. Merge the `feature/clear-items` branch.  Git will report a conflict in `updateStatus()` because the prefix line was changed differently on each branch.  Open `script.js`, locate the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) and choose a single implementation.  You might decide to remove the prefix entirely or include the prefix as an argument.  Make sure that the merged `updateStatus()` works for all operations.

4. Repeat the merge for the `feature/toggle-highlight` branch, resolving the same conflict if necessary.  Stage and commit the resolved file:

   ```bash
   git add script.js
   git commit -m "Resolve merge conflict in updateStatus()"
   ```

5. Push the merged `main` branch:

   ```bash
   git push origin main
   ```

6. Test your page in the browser by opening `index.html`.  Verify that adding items, clearing the list and toggling highlight all work correctly.  Use the browser developer tools to debug if necessary.

### 6. Optional enhancements (time permitting)

If you finish early, consider implementing one or more of these enhancements on a separate branch:

* Add a **Delete Selected** button that removes only highlighted items.
* Allow editing of list items by clicking on them.  You could prompt the user for a new value and update the text.
* Sort the list alphabetically.
* Display a count of items in the status line.

Document your changes in commits and merge them with conflict resolution as before.

## Submission

Ensure that your `main` branch contains the combined features from all partners and that the web page functions correctly.  Push all branches (`main`, `feature/add-item`, `feature/clear-items`, `feature/toggle-highlight`) to the remote repository.  Your instructor will evaluate your Git history, conflict resolution and JavaScript implementation.  Good luck and enjoy mastering the DOM!