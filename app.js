document.addEventListener('DOMContentLoaded', () => {
    // Attempt to grab each element; could be null if not present on the current page
    const mobileMenuButton = document.getElementById('mobile-menu');
    const textContainer = document.querySelector('.navbar__list');
    const tryMeButton = document.getElementById('try-me-button');
    const tryMeAgainButton = document.getElementById('try-me-again-button');
    const hiddenSection = document.getElementById('hidden-section');
    const imageOverlay = document.querySelector('.image-overlay');
    const newSection = document.querySelector('.new-section');

    // Only attempt to modify newSection if it exists
    if (newSection) {
        newSection.classList.add('new-section--active');
    }

    // Only add the event listener if tryMeButton and all other dependent elements exist
    if (tryMeButton && hiddenSection && imageOverlay) {
        tryMeButton.addEventListener('click', () => {
            imageOverlay.classList.remove('image-overlay--initial');
            imageOverlay.classList.add('image-overlay--hidden');

            hiddenSection.classList.add('hidden-section--visible');
            setTimeout(() => {
                hiddenSection.style.transform = 'scale(1)';
                hiddenSection.style.opacity = '1';
                hiddenSection.style.maxHeight = '600px';
            }, 50);
        });
    }

    // Same check for tryMeAgainButton
    if (tryMeAgainButton && hiddenSection && imageOverlay) {
        tryMeAgainButton.addEventListener('click', () => {
            imageOverlay.classList.remove('image-overlay--hidden');
            imageOverlay.classList.add('image-overlay--initial');

            hiddenSection.classList.remove('hidden-section--visible');
            setTimeout(() => {
                hiddenSection.style.maxHeight = '0';
            }, 2050);
        });
    }

    // Same check for mobileMenuButton
    if (mobileMenuButton && textContainer) {
        mobileMenuButton.addEventListener('click', () => {
            textContainer.classList.toggle('navbar__list--active');
        });
    }
});

// Other parts of your JavaScript can also include these kinds of checks.
function navigateToAbout() {
    const newSection = document.querySelector('.new-section');
    if (newSection) {
        newSection.classList.add('new-section--active');
    }
}

const menuToggle = document.getElementById('menu-toggle');
if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        const bar1 = document.getElementById('bar1');
        const bar2 = document.getElementById('bar2');
        const bar3 = document.getElementById('bar3');
        if (bar1 && bar2 && bar3) {
            bar1.classList.toggle('navbar__bar--active1');
            bar2.classList.toggle('navbar__bar--active2');
            bar3.classList.toggle('navbar__bar--active3');
        }
    });
}

const navbarMenuToggle = document.querySelector('.navbar__menu-toggle');
if (navbarMenuToggle) {
    navbarMenuToggle.addEventListener('click', function() {
        const navList = document.querySelector('.navbar__list');
        if (navList) {
            navList.classList.toggle('navbar__list--active');
        }
        this.classList.toggle('toggle');
    });
}
