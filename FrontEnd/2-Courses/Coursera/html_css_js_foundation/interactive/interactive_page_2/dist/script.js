function changeColor() {
  
  var divElement1 = document.getElementById("div1");
  var divElement2 = document.getElementById("div2");
  
  divElement1.className = "redblock";
  divElement2.className = "orangeblock";
}

function ChangeText() {
  
  var divElement1 = document.getElementById("div1");
  var divElement2 = document.getElementById("div2");
  
  divElement1.innerHTML = "I change div1 text";
  divElement2.innerHTML = "I change div2 text";
}

function reset() {
  
  var divElement1 = document.getElementById("div1");
  var divElement2 = document.getElementById("div2");
  
  divElement1.className = "orangeblock";
  divElement2.className = "yellowblock";
  divElement1.innerHTML = "This is the div1";
  divElement2.innerHTML = "This is the div2";
}