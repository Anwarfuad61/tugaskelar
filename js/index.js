setTimeout(function () {
  var splashScreen = document.querySelector("#splash");
  splashScreen.parentNode.removeChild(splashScreen);
  window.location.href = "/home.html";
}, 3000);