
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector('.menu');

    // Check and set the initial menu state from localStorage
    const isMenuOpen = localStorage.getItem('isMenuOpen');
    if (isMenuOpen === 'true') {
        menu.style.display = 'block';  // Corrected to 'block' as it should match the toggling logic
    } else {
        menu.style.display = 'none';
    }

    // Toggle menu visibility on hamburger click
    hamburger.addEventListener('click', () => {
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
            localStorage.setItem('isMenuOpen', 'false');
        } else {
            menu.style.display = 'block';
            localStorage.setItem('isMenuOpen', 'true');
        }
    });

    // Function to handle screen resize
    function handleResize() {
        if (window.innerWidth > 500) {
            menu.style.display = 'none';  // Hide the menu if screen width is greater than 500px
            localStorage.setItem('isMenuOpen', 'false');  // Update localStorage to reflect menu state
        } else if (localStorage.getItem('isMenuOpen') === 'true') {
            menu.style.display = 'block';  // Show the menu if it's open in localStorage
        }
    }

    // Initial check on page load
    handleResize();

    // Listen for resize events
    window.addEventListener('resize', handleResize);
});


document.addEventListener("DOMContentLoaded", function() {
    var menuItems = document.querySelectorAll(".box p");
    menuItems.forEach(function(menuItem) {
      menuItem.addEventListener("click", function() {
        var text = menuItem.textContent.toLowerCase().replace(/\s+/g, '-');
        window.location.href = text + ".html";
      });
    });
  });





  

  