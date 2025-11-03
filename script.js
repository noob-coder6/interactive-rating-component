const ratingCard = document.querySelector('.rating-card');
const thankYouCard = document.querySelector('.thank-you-card');
const submitBtn = document.querySelector('.submit-btn');
const ratingBtns = document.querySelectorAll('.rating-btn');
const selectedRatingSpan = document.getElementById('selected-rating');

let selectedRating = null;

ratingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        ratingBtns.forEach(innerBtn => {
            innerBtn.classList.remove('active');
        });

        // Add active class to the clicked button
        btn.classList.add('active');
        selectedRating = btn.textContent;
    });
});

submitBtn.addEventListener('click', () => {
    if (selectedRating) {
        selectedRatingSpan.textContent = selectedRating;
        ratingCard.classList.add('hidden');
        thankYouCard.classList.remove('hidden');
    }
});