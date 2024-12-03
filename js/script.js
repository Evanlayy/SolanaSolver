document.addEventListener('DOMContentLoaded', function() {
    const welcomePopup = document.getElementById('welcome-popup');
    const startButton = document.getElementById('start-button');
    const puzzleContent = document.getElementById('puzzle-content');
    const rewardContent = document.getElementById('reward-content');
    const buyButton = document.getElementById('buy-button');

    // Add social media links
    const twitterButton = document.querySelector('.social-button.twitter');
    const telegramButton = document.querySelector('.social-button.telegram');

    // Social media URLs
    const socialLinks = {
        twitter: 'https://x.com/Solana_Solver',
        telegram: 'https://t.me/Solanasolver',
        buyNow: 'https://pump.fun/board'
    };

    // Add click handlers for social buttons
    twitterButton.addEventListener('click', () => {
        window.open(socialLinks.twitter, '_blank');
    });

    telegramButton.addEventListener('click', () => {
        window.open(socialLinks.telegram, '_blank');
    });

    // Buy button click handler
    buyButton.addEventListener('click', function() {
        window.open(socialLinks.buyNow, '_blank');
    });

    // Example puzzle and reward
    const puzzle = {
        question: "What is the missing number? 2 8 18 32 ? 72",
        answer: "50",
        reward: "Private Key: 5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3"
    };

    // Show puzzle function
    function showPuzzle() {
        puzzleContent.innerHTML = `
            <h3>Solve this puzzle:</h3>
            <p>${puzzle.question}</p>
            <input type="text" id="puzzle-answer" placeholder="Enter your answer">
            <button onclick="checkAnswer()" class="primary-button submit-button">Submit Answer</button>
        `;
    }

    // Start button click handler
    startButton.addEventListener('click', function() {
        welcomePopup.classList.add('hidden');
        showPuzzle();
    });

    // Add to global scope so onclick can access it
    window.checkAnswer = function() {
        const userAnswer = document.getElementById('puzzle-answer').value;
        if (userAnswer === puzzle.answer) {
            rewardContent.innerHTML = `
                <h3>Congratulations!</h3>
                <p>Here's your reward:</p>
                <div class="reward-text">${puzzle.reward}</div>
            `;
            puzzleContent.classList.add('hidden');
            rewardContent.classList.remove('hidden');
            rewardContent.classList.add('reward-reveal');
        } else {
            alert('Incorrect answer. Try again!');
        }
    };
}); 