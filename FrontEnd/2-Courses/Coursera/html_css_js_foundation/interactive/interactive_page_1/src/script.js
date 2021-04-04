function msg() {
  alert('You click me! Please confirm')
}

function confirm_msg(){
  var choice;
  choice = confirm('Please confirm')
  if (choice){
    alert('You confirmed!') } else {
    alert('You cancel!')
  }
}