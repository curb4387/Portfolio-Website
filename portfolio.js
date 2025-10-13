/* JavaScript file for main website page */
"use strict";

// Set time and date in real time
let currentTime = document.getElementById("time");
let currentDate = document.getElementById("date");

change_time_date(); // run immediately first
setInterval(change_time_date, 1000);

function change_time_date() {
    const time_date = new Date();
    currentTime.textContent = time_date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    currentDate.textContent = time_date.toLocaleDateString();
}