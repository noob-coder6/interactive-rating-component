# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [Solution URL](https://github.com/noob-coder6/interactive-rating-component.git)
- Live Site URL: [live site URL](https://noob-coder6.github.io/interactive-rating-component/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JavaScript

### What I learned

Through this project, I deepened my understanding of DOM manipulation and event handling in JavaScript. I learned how to:

- Use `forEach()` to iterate through NodeLists and attach event listeners
- Manage state with JavaScript variables to track user selections
- Toggle CSS classes dynamically to show/hide elements
- Implement interactive UI patterns with visual feedback

Here's a code snippet I'm particularly proud of - managing the active state of rating buttons:

```js
ratingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        ratingBtns.forEach(innerBtn => {
            innerBtn.classList.remove('active');
        });
        btn.classList.add('active');
        selectedRating = btn.textContent;
    });
});
```

### Continued development

In future projects, I want to focus on:

- Improving accessibility with ARIA labels and keyboard navigation
- Adding form validation and error handling
- Implementing more complex state management patterns
- Creating smoother transitions between UI states

## Author

- Frontend Mentor - [@noob-coder6](https://www.frontendmentor.io/profile/noob-coder6)
- GitHub - [@noob-coder6](https://github.com/noob-coder6)