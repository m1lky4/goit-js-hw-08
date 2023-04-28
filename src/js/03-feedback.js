

const form = document.querySelector('.feedback-form');


form.addEventListener('input', onFormInput);
function onFormInput(e) {
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    const formResult = {
        email,
        message
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(formResult));
    
};

const savedFormStorage = localStorage.getItem('feedback-form-state');
let parsedFormStorage = JSON.parse(savedFormStorage);

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    form.reset();   
    console.log(parsedFormStorage);
}