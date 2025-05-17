// games-data.js

const allGames = [
    {
        id: 1,
        title: "Star Catchers",
        image: "star-catchers-card.svg",
        url: "star-catchers.html",
        description: "Catch the falling stars before they disappear!"
    },
    { // New Cookie Clicker game entry
        id: 7, // Make sure IDs are unique
        title: "Cookie Clicker",
        image: "cookie-clicker-card.svg", // Path to your card image
        url: "cookie-clicker.html",
        description: "Click the cookie to bake more cookies! Can you unlock all the upgrades?"
    },
    {
        id: 8, // Ensure unique ID
        title: "Memory Match",
        image: "memory-match-card.svg",
        url: "memory-match.html", // Path to your actual game file
        description: "Find all the matching pairs! How good is your memory?"
    },
    // ... other existing games ...
    {
        id: 6, // Example, ensure this ID is unique and other games are present
        title: "Sleepy Sheep",
        image: "https://placekitten.com/400/400?image=6",
        description: "Help the sleepy sheep count stars to fall asleep."
    }
];
