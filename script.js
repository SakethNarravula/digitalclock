var hour = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var ampm = document.getElementById("ampm");
setInterval(() => {
  var h = new Date().getHours();
  ampm.innerHTML = h < 12 ? "am" : "pm";
  hour.innerHTML = h > 12 ? h - 12 : h;
  var m = new Date().getMinutes();
  minutes.innerHTML = m;
  var s = new Date().getSeconds();
  seconds.innerHTML = s;
}, 1000);
