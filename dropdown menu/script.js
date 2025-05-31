document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar-menu');
    const navbarToggle = document.querySelector('.navbar-toggle');
    
    // Toggle mobile menu
    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
        navbarToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a menu item
    const navLinks = document.querySelectorAll('.navbar-links:not(.dropdown > .navbar-links)');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarMenu.classList.remove('active');
            navbarToggle.classList.remove('active');
        });
    });
    
    // Dropdown functionality for desktop
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        // For desktop - hover
        dropdown.addEventListener('mouseenter', () => {
            if (window.innerWidth > 960) {
                dropdown.classList.add('active');
            }
        });
        
        dropdown.addEventListener('mouseleave', () => {
            if (window.innerWidth > 960) {
                dropdown.classList.remove('active');
            }
        });
        
        // For mobile - click
        const dropdownLink = dropdown.querySelector('.navbar-links');
        dropdownLink.addEventListener('click', (e) => {
            if (window.innerWidth <= 960) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 960 && !e.target.closest('.dropdown') && !e.target.closest('.navbar-toggle')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});