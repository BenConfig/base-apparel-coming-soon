# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

## Screenshots

### Mobile
![](screenshot-mobile.png)

### Desktop
![](screenshot-desktop.png)

## Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- JS

## What I learned

I learned how to remove the custom error messages supplied by the browser (when a form element fails validation), and replace them with my own custom styles. I was able to do this by listening for the 'invalid' event:
```js
EMAIL.addEventListener('invalid', function(event){
    event.preventDefault();

    if (EMAIL.value === '') {
        ERROR_MESSAGE.textContent = 'Please enter your email';
        FORM.classList.add('error');
    }
    else if (!event.target.validity.valid) {
        ERROR_MESSAGE.textContent = 'Please provide a valid email';
        FORM.classList.add('error');
    }
});
```

Something I had not tried before until this project was overlaying one grid on top of another. I added display: grid; to both the body and main element so that I could have my header (containing the logo) on top of the main element. This was the only method I could find to achieve this (apart from absolute positioning though this could be more tricky).

## Continued development

I want to get more comfortable using CSS Grid. I am okay with it, but every so often I see behaviours I don't quite understand.

In this project I noticed the background image didn't display as intended in Safari. I played with the different background properties and could not correct it. Perhaps I will find the solution in a future project, then I can come back to this and fix it.

## Useful resources

- [“Shake” CSS Keyframe Animation](https://css-tricks.com/snippets/css/shake-css-keyframe-animation/) - This animation worked perfectly for highlighting a validation error on the email input.
- [HTML 5 Pattern Validation](https://codepen.io/tutsplus/pen/zrBKZg) - This was a great template for my JavaScript code.

## Update 02/10/2021

After learning about some of the aria attributes in a later project, I have included aria attributes in this project to make the form more accessible.