/* JavaScript file for click events to reveal and hide content */
"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        const revealButton = dropdown.querySelector(".title-reveal");
        const hideButton = dropdown.querySelector(".title-hide");

        revealButton.addEventListener("click", () => {
            dropdown.classList.add("active");
        });

        hideButton.addEventListener("click", () => {
            dropdown.classList.remove("active");
        });
    });
});