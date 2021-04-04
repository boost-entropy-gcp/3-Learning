function addTask () {
  var input = document.getElementById("input");
  // get current text from input field
  var newTask = input.value;
  // only add new item to list if some text was entered
  if (newTask != "") {
    // create new HTML list item
    var item = document.createElement("li");
    // add HTML for buttons and new task text
    // Note, need to use '' because of "" in HTML
    item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" /> ' + 
    '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' +
    newTask;
    // add new item as part of existing list
    document.getElementById("tasks").appendChild(item); 
    
    // Delete item once added
    input.value = "";
    input.placeholder = "Enter a new task...";
  }
}

// change styling used for given item
function markDone (item) { 
    item.className = 'finished';
}

/* Step 7 below here */
function remove (item) {
  // remove item completely from document
  if (item.className == 'finished'){
    item.remove();
  } else {
    alert('Check the task before remove it!')
  }
}

function doAbout() {
  var divabout = document.getElementById("divabout");
  divabout.innerHTML = "Author is Ivan Nardini";
  divabout.className = "yellowbackground";
}

function clearAbout() {
  var divabout = document.getElementById("divabout");
  divabout.innerHTML = "";
  divabout.className = "";
}