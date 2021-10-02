const FORM = document.querySelector('.form');
const EMAIL = document.getElementById('email');
const ERROR_MESSAGE = document.querySelector('.error-message');

// If the email input is invalid
EMAIL.addEventListener('invalid', function(event){
    event.preventDefault();

    // Add 'error' styles
    FORM.classList.add('error');

    // Add message to aria-live element
    FORM.firstElementChild.textContent = 'Form is invalid, check email input';

    // Add aria-invalid attribute to email input
    EMAIL.setAttribute('aria-invalid', 'true');

    // Add aria-describedby attribute to email input
    EMAIL.setAttribute('aria-describedby', 'email-error');

    // If email input is left empty...
    if (EMAIL.value === '') {
        ERROR_MESSAGE.textContent = 'Please enter your email';
    }
    // Else if email input has invalid characters
    else if (!event.target.validity.valid) {
        ERROR_MESSAGE.textContent = 'Please provide a valid email';
    }
});

EMAIL.addEventListener('input', () => {
    // Remove 'error' styles
    FORM.classList.remove('error')

    // Remove message from aria-live element
    FORM.firstElementChild.textContent = '';

    // Remove aria-invalid attribute
    EMAIL.removeAttribute('aria-invalid');

    // Remove aria-describedby attribute
    EMAIL.removeAttribute('aria-describedby');
});