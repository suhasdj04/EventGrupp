// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    
    // Get the search button by its class name
    const searchButton = document.querySelector(".btn-search");
    
    // Get the city dropdown by its ID
    const cityDropdown = document.getElementById("city");
    
    // Get the mobile menu toggle button
    const menuToggle = document.getElementById("menu-toggle");
    
    // Get the main navigation menu
    const mainNav = document.getElementById("main-nav");

    // --- 1. Search Button Logic ---
    // Add a 'click' event listener to the search button
    if (searchButton && cityDropdown) {
        searchButton.addEventListener("click", function() {
            
            // Get the currently selected value from the dropdown
            const selectedCity = cityDropdown.value;
            
            // Check for each city
            if (selectedCity === 'bangalore') {
                window.location.href = './places/bangalore.html';

            } else if (selectedCity === 'delhi') { // Corrected spelling to 'delhi'?
                window.location.href = './places/delhi.html'; // Or './places/delhi.html'

            } else if (selectedCity === 'chennai') {
                window.location.href = './places/chennai.html';

            } else if (selectedCity === 'mumbai') {
                window.location.href = './places/mumbai.html';

            } else {
                // For any other city or if no city is selected
                if (selectedCity) {
                    alert("Searching for: " + selectedCity);
                } else {
                    alert("Please select a city first.");
                }
            }
        });
    }

    // --- 2. Mobile Menu Toggle Logic ---
    // Add a 'click' event listener to the hamburger menu button
    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", function() {
            // Toggle the 'is-open' class on the nav menu
            mainNav.classList.toggle('is-open');
            
            // Update the aria-expanded attribute for accessibility
            const isExpanded = mainNav.classList.contains('is-open');
            menuToggle.setAttribute('aria-expanded', isExpanded);
            
            // Optional: Change icon from bars to 'X'
            const icon = menuToggle.querySelector("i");
            if (icon) {
                if (isExpanded) {
                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-times");
                } else {
                    icon.classList.remove("fa-times");
                    icon.classList.add("fa-bars");
                }
            }
        });
    }
    
});
    
