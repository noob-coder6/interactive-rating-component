const ratingCard = document.querySelector('.rating-card');
const thankYouCard = document.querySelector('.thank-you-card');
const submitBtn = document.querySelector('.submit-btn');
const ratingButtonsContainer = document.querySelector('.rating-buttons');
const ratingBtns = document.querySelectorAll('.rating-btn');
const selectedRatingSpan = document.getElementById('selected-rating');
const alertContainer = document.getElementById('alert-container');

let selectedRating = null;
let currentFocusIndex = 0;

// --- Voice Synthesis ---
function speak(text) {
    if ('speechSynthesis' in window) {
        // Cancel any previous speech
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    }
}

// --- Rating Selection Logic ---
function selectRating(btn, index) {
    // Remove active state from all buttons
    ratingBtns.forEach((innerBtn, i) => {
        innerBtn.classList.remove('active');
        innerBtn.setAttribute('aria-checked', 'false');
        innerBtn.tabIndex = -1; // Make non-selected buttons not tabbable
    });

    // Apply active state to the selected button
    btn.classList.add('active');
    btn.setAttribute('aria-checked', 'true');
    btn.tabIndex = 0; // Make the selected button tabbable
    selectedRating = btn.textContent;
    currentFocusIndex = index;
    speak(`Rating ${selectedRating} selected.`);
}

// --- Event Listeners ---
ratingBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        selectRating(btn, index);
    });
});

ratingButtonsContainer.addEventListener('keydown', (e) => {
    let newIndex = currentFocusIndex;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        newIndex = (currentFocusIndex + 1) % ratingBtns.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        newIndex = (currentFocusIndex - 1 + ratingBtns.length) % ratingBtns.length;
    }

    if (newIndex !== currentFocusIndex) {
        ratingBtns[newIndex].focus();
        selectRating(ratingBtns[newIndex], newIndex);
    }
});

submitBtn.addEventListener('click', () => {
    if (selectedRating) {
        selectedRatingSpan.textContent = selectedRating;
        ratingCard.classList.add('hidden');
        thankYouCard.classList.remove('hidden');
        const thankYouMessage = `Thank you! We appreciate you taking the time to give a rating.`;
        speak(thankYouMessage);
    } else {
        const alertMessage = 'Please select a rating before submitting.';
        // Alert for screen readers via ARIA live region
        alertContainer.textContent = alertMessage;
        // Announce via speech synthesis
        speak(alertMessage);
        // Clear the message after a few seconds
        setTimeout(() => { alertContainer.textContent = ''; }, 3000);
    }
});

// --- Initial State ---
function initialize() {
    ratingBtns.forEach((btn, index) => {
        // Set initial tabindex: first is 0, rest are -1
        btn.tabIndex = index === 0 ? 0 : -1;
    });
}

initialize();