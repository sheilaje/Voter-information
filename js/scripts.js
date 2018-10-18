$(document).ready(function() {
  var age = parseInt(prompt("What is your age?"));

  if (age >= 21) {
    $("#over21").show();
  } else {
    $("#under21").show();
  }
});
