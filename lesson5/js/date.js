document.querySelector("footer p") 
var today = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
var date = today.toLocaleDateString("en-US", options);
var comma = date.lastIndexOf(",")
date= date.substring(0,comma) + " " + date.substring(comma + 1)
document.querySelector("footer p").textContent = date;
