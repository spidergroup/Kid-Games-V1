// js/game_fruits.js

document.addEventListener('DOMContentLoaded', () => {
    const fruitItems = [
        { name: 'Apple', image: '../images/games/fruits/apple.png' },
        { name: 'Banana', image: '../images/games/fruits/banana.png' },
        { name: 'Orange', image: '../images/games/fruits/orange.png' },
        { name: 'Grapes', image: '../images/games/fruits/grapes.png' },
        { name: 'Strawberry', image: '../images/games/fruits/strawberry.png' },
        { name: 'Watermelon', image: '../images/games/fruits/watermelon.png' },
        // Add more fruit items for a larger grid
        // { name: 'Pineapple', image: '../images/games/fruits/pineapple.png' },
        // { name: 'Cherry', image: '../images/games/fruits/cherry.png' },
    ];

    // Adjust slice based on your desired grid size, similar to pets_game.js
    const itemsForGame = fruitItems.slice(0, 6); // Taking first 6 for a 12-card game

    if (typeof initializeGame === 'function') {
        initializeGame(itemsForGame, 'fruitsGame');
    } else {
        console.error('Game engine (initializeGame) not found.');
    }

    // Footer year
    const yearSpan = document.getElementById('currentYearFooter');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});