document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // You could add more homepage-specific JavaScript here if needed.
    // For example, if the hover animations were too complex for CSS/Tailwind
    // or if you wanted to dynamically load the game list.

    console.log("Play & Learn Pals homepage loaded!");

    // Example of adding a more playful hover effect with JS if desired
    // This is just an example, Tailwind's hover utilities are often enough
    /*
    const gameCards = document.querySelectorAll('.game-card-link');
    gameCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // card.querySelector('.bg-white').classList.add('animate-wiggle'); // Assumes 'animate-wiggle' is defined in Tailwind config
        });
        card.addEventListener('mouseleave', () => {
            // card.querySelector('.bg-white').classList.remove('animate-wiggle');
        });
    });
    */
});

// Future: If you decide to load header/footer via JS:
/*
async function loadHTML(filePath, elementId) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Could not load ${filePath}: ${response.statusText}`);
        }
        const text = await response.text();
        document.getElementById(elementId).innerHTML = text;
    } catch (error) {
        console.error('Error loading HTML partial:', error);
    }
}

// To load header and footer if they were in separate files:
// loadHTML('partials/header.html', 'header-placeholder');
// loadHTML('partials/footer.html', 'footer-placeholder');
// Then in index.html you'd have <div id="header-placeholder"></div> etc.
// For this exercise, header/footer are directly in index.html for simplicity.
*/