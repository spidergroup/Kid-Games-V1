// js/game_pets.js

document.addEventListener('DOMContentLoaded', () => {
    const petItems = [
        { name: 'Cat', image: '../images/games/pets/cat.png' },
        { name: 'Dog', image: '../images/games/pets/dog.png' },
        { name: 'Rabbit', image: '../images/games/pets/rabbit.png' },
        { name: 'Hamster', image: '../images/games/pets/hamster.png' },
        { name: 'Bird', image: '../images/games/pets/bird.png' },
        { name: 'Fish', image: '../images/games/pets/fish.png' },
        // For a 4x4 grid (16 cards), you need 8 unique items.
        // { name: 'Turtle', image: '../images/games/pets/turtle.png' },
        // { name: 'GuineaPig', image: '../images/games/pets/guineapig.png' },
    ];

    // For a 12-card game (e.g. 4x3 grid), use 6 items.
    // For a 16-card game (e.g. 4x4 grid), use 8 items.
    const itemsForGame = petItems.slice(0, 6); // Adjust as needed for your grid

    if (typeof initializeGame === 'function') {
        initializeGame(itemsForGame, 'petsGame');
    } else {
        console.error('Game engine (initializeGame) not found.');
    }

    // Footer year already handled in the HTML's inline script for simplicity
});