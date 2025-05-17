document.addEventListener('DOMContentLoaded', () => {
        const gameGallery = document.getElementById('gameGallery');

        // The 'allGames' variable is now available from games-data.js
        // No need to define it here anymore.

        const accentColors = [
            'pink-400', 'sky-400', 'green-400', 'amber-400', 'purple-400', 'teal-400'
        ];

        // Check if allGames is loaded
        if (typeof allGames !== 'undefined' && Array.isArray(allGames)) {
            allGames.forEach((game, index) => {
                const card = document.createElement('div');
                card.className = `game-card group relative rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg overflow-hidden cursor-pointer
                                   bg-white
                                   hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out
                                   border-2 sm:border-4 border-transparent hover:border-${accentColors[index % accentColors.length]}`;

                // Card content now only has title overlayed on image.
                // If you want description back, add it here.
                card.innerHTML = `
                    <div class="aspect-square w-full overflow-hidden">
                        <img src="${game.image}" alt="${game.title}"
                             class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110">
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 p-2 sm:p-3 bg-black/60 backdrop-blur-sm">
                        <h3 class="text-white text-center text-xs sm:text-base font-semibold truncate" title="${game.title}">
                            ${game.title}
                        </h3>
                    </div>
                `;

                card.addEventListener('click', () => {
                    if (game.url) {
                        window.location.href = game.url;
                    } else {
                        alert(`Game "${game.title}" is coming soon!`);
                    }
                });

                gameGallery.appendChild(card);
            });
        } else {
            console.error("Game data (allGames) not found or is not an array. Make sure games-data.js is loaded correctly.");
            gameGallery.innerHTML = "<p class='text-center text-red-500 col-span-full'>Oops! Couldn't load the games. Please try again later.</p>";
        }

        // Smooth scroll for menu links
        document.querySelectorAll('header nav a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    });
