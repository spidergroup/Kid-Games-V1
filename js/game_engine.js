// js/game_engine.js

let gameItems = [];
let cardsArray = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let lockBoard = true; // Board locked initially during preview
let gamePlayStarted = false; // Tracks if the actual game has started
let countdownInterval = null;
const COUNTDOWN_SECONDS = 5;

let gameBoardElement;
let moveCounterElement;
let winMessageElement;
let playAgainButtonElement;
let startButtonElement; // Renamed from restartButtonElement for clarity in this context

function initializeGame(items, gameIdPrefix = 'game') {
    gameItems = items;
    gameBoardElement = document.getElementById('gameBoard');
    moveCounterElement = document.getElementById('moveCounter');
    winMessageElement = document.getElementById('winMessage');
    playAgainButtonElement = document.getElementById('playAgainButton');
    startButtonElement = document.getElementById('startButton'); // The button that starts the game

    if (!gameBoardElement || !moveCounterElement || !winMessageElement || !playAgainButtonElement || !startButtonElement) {
        console.error('One or more essential game elements are missing from the DOM.');
        return;
    }

    setupNewGame();

    startButtonElement.removeEventListener('click', handleStartButtonClick); // Remove previous if any
    startButtonElement.addEventListener('click', handleStartButtonClick);

    playAgainButtonElement.removeEventListener('click', setupNewGame); // Remove previous if any
    playAgainButtonElement.addEventListener('click', setupNewGame); // Play Again button now calls setupNewGame
}

function setupNewGame() {
    // Reset game state variables
    matchedPairs = 0;
    moves = 0;
    flippedCards = [];
    lockBoard = true; // Lock board during setup and preview
    gamePlayStarted = false;
    if (countdownInterval) clearInterval(countdownInterval); // Clear any existing countdown

    if (moveCounterElement) updateMoveCounter();
    if (winMessageElement) {
        winMessageElement.classList.add('hidden');
        winMessageElement.classList.remove('flex');
    }
    if (gameBoardElement) {
        gameBoardElement.innerHTML = ''; // Clear existing cards
        gameBoardElement.classList.add('board-preview'); // Add class to disable clicks via CSS
    }


    cardsArray = [...gameItems, ...gameItems];
    shuffleArray(cardsArray);

    cardsArray.forEach(item => {
        const cardElement = createCardElement(item, true); // true for initial preview (flipped open)
        gameBoardElement.appendChild(cardElement);
    });

    // Setup countdown on the start button
    let countdown = COUNTDOWN_SECONDS;
    startButtonElement.innerHTML = `Start in ${countdown} <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block ml-1 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m-15.357-2a8.001 8.001 0 0015.357 2.001M9 15v2.5M15 15v2.5m-5-5H7.5" /></svg>`;
    startButtonElement.disabled = false; // Enable clicking to skip countdown

    countdownInterval = setInterval(() => {
        countdown--;
        if (countdown > 0) {
            startButtonElement.innerHTML = `Start in ${countdown} <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block ml-1 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m-15.357-2a8.001 8.001 0 0015.357 2.001M9 15v2.5M15 15v2.5m-5-5H7.5" /></svg>`;
        } else {
            clearInterval(countdownInterval);
            startGamePlay(); // Auto-start when countdown finishes
        }
    }, 1000);
}

function handleStartButtonClick() {
    if (countdownInterval) clearInterval(countdownInterval); // Stop countdown if button is clicked
    startGamePlay();
}

function startGamePlay() {
    if (gamePlayStarted) return; // Prevent multiple starts

    gamePlayStarted = true;
    lockBoard = false; // Unlock board for playing
    startButtonElement.textContent = 'Restart Game'; // Change button text
    startButtonElement.removeEventListener('click', handleStartButtonClick); // Use for actual restart now
    startButtonElement.addEventListener('click', setupNewGame); // Re-point to setupNewGame for restart

    if (gameBoardElement) gameBoardElement.classList.remove('board-preview');


    // Flip all cards face down
    const allCards = gameBoardElement.querySelectorAll('.card');
    allCards.forEach(card => {
        card.classList.remove('flipped'); // Or 'preview' if you used that
        card.classList.remove('preview');
    });
}


function createCardElement(item, showAsPreview = false) {
    const card = document.createElement('div');
    // Add 'preview' class if cards should be initially open
    card.classList.add('card', 'aspect-square', showAsPreview ? 'preview' : '');
    card.dataset.value = item.name;

    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');
    const frontImage = document.createElement('img');
    frontImage.src = item.image;
    frontImage.alt = item.name;
    cardFront.appendChild(frontImage);

    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    const backContent = document.createElement('span');
    backContent.classList.add('text-4xl', 'text-brand-primary', 'opacity-50');
    backContent.textContent = '?';
    cardBack.appendChild(backContent);

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);

    // Only add click listener if not in preview or once game starts
    card.addEventListener('click', () => {
        if (gamePlayStarted) { // Ensure game has started before allowing flips
            flipCard(card);
        }
    });
    return card;
}

function flipCard(card) {
    if (lockBoard || !gamePlayStarted) return; // Check gamePlayStarted
    if (card.classList.contains('flipped') || card.classList.contains('matched')) return;

    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        moves++;
        updateMoveCounter();
        checkForMatch();
    }
}

function checkForMatch() {
    lockBoard = true;
    const [card1, card2] = flippedCards;

    if (card1.dataset.value === card2.dataset.value) {
        disableMatchedCards();
    } else {
        unflipCards();
    }
}

function disableMatchedCards() {
    const [card1, card2] = flippedCards;
    card1.classList.add('matched');
    card2.classList.add('matched');
    matchedPairs++;
    resetFlippedCardsAndLock();
    checkWinCondition();
}

function unflipCards() {
    setTimeout(() => {
        flippedCards.forEach(card => card.classList.remove('flipped'));
        resetFlippedCardsAndLock();
    }, 1000);
}

function resetFlippedCardsAndLock() {
    flippedCards = [];
    if (gamePlayStarted) { // Only unlock if gameplay has started
        lockBoard = false;
    }
}

function updateMoveCounter() {
    if (moveCounterElement) {
        moveCounterElement.textContent = moves;
    }
}

function checkWinCondition() {
    if (matchedPairs === gameItems.length) {
        gamePlayStarted = false; // Game over
        lockBoard = true; // Lock board
        setTimeout(() => {
            if (winMessageElement) {
                winMessageElement.classList.remove('hidden');
                winMessageElement.classList.add('flex');
            }
        }, 500);
    }
}

// Renamed from resetGame to avoid confusion with button's new role.
// This function is now called by `initializeGame` and the "Play Again" button.
// The "Start Game / Restart Game" button initially calls handleStartButtonClick,
// then setupNewGame after the first game.

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}