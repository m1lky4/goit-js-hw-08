import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailField = form.querySelector('input[name="email"]');
const messageField = form.querySelector('textarea[name="message"]');

const throttledOnFormInput = throttle(onFormInput, 500);

form.addEventListener('input', throttledOnFormInput);
function onFormInput(e) {
    const formData = {
        email: emailField.value,
        message: messageField.value,
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};
window.addEventListener('load', () => {
    const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (formData) {
        emailField.value = formData.email;
        messageField.value = formData.message;
    }
});
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    form.reset();
};
