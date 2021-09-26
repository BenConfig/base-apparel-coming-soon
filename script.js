const FORM = document.querySelector('.form');
const EMAIL = document.getElementById('email');
const ERROR_MESSAGE = document.querySelector('.error-message');


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

EMAIL.addEventListener('input', () => FORM.classList.remove('error'));