document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('header-menu-icon');
    const menuText = document.getElementById('header-menu-text');
    const closeIcon = document.getElementById('header-close-icon');
    const menu = document.getElementById('header-menu');
    const orderProjectButton = document.getElementById('order-project-button');
    const orderProjectButtonMenu = document.getElementById('order-project-button-menu');

    // Function for smooth scrolling to a section
    function scrollToSection(sectionId) {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Function to handle the "Order the project" button click and display modal
    function handleOrderProjectButtonClick() {
        scrollToSection('#work-together');
    }

    // Opening the menu
    menuIcon.addEventListener('click', function () {
        menu.style.display = 'flex';
    });


    // Closing the menu
    closeIcon.addEventListener('click', function () {
        menu.style.display = 'none';
    });

    // Closing the menu and smooth scrolling to a section on menu link click
    const menuLinks = document.querySelectorAll('#header-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent link default action
            scrollToSection(link.getAttribute('href'));
            menu.style.display = 'none'; // Close the menu
        });
    });

    // Smooth scrolling and modal display for order buttons
    orderProjectButton.addEventListener('click', function () {
        handleOrderProjectButtonClick();
        menu.style.display = 'none'; // Close the menu if open
    });

    orderProjectButtonMenu.addEventListener('click', function () {
        handleOrderProjectButtonClick();
        menu.style.display = 'none'; // Close the menu
    });

    // Close modal on backdrop click
    document.getElementById('modal-backdrop').addEventListener('click', function () {
        document.getElementById('modal').style.display = 'none';
    });

    // Close modal on 'Escape' key press
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.getElementById('modal').style.display = 'none';
            menu.style.display = 'none'; // Close the menu
        }
    });
});

document.getElementById('header-menu-text').addEventListener('click', function() {
    const menuList = document.getElementById('menu-list');
    if (menuList.classList.contains('is-is') || menuList.style.display === 'none') {
        menuList.style.display = 'block';
        menuList.classList.remove("is-is");
    } else {
        menuList.classList.add("is-is");
    }
});

document.querySelectorAll('#menu-list a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
        
        document.getElementById('menu-list').style.display = 'none';
    });
});
