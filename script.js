const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    if(validateName() & validateEmail() & validatePassword()){
        alert("Form submitted Successfully");
    }
});

//Name validation:

function validateName(){
    let name = document.getElementById('name').value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required*";
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full Name";
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    nameError.innerHTML = "";
    nameError.previousElementSibling.classList.add('fa-check');
    return true;
}

//Email:

function validateEmail(){
    let email = document.getElementById('email').value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required*";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        emailError.innerHTML = "Enter valid email";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    emailError.innerHTML = "";
    emailError.previousElementSibling.classList.add('fa-check');
    return true;
}

//Password:

function validatePassword(){
    let password = document.getElementById('password').value;

    if(password.length == 0){
    passwordError.innerHTML = "Password is required*";
    passwordError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)){
        passwordError.innerHTML = "Password should contain 1 Uppercase, 1 Lowercase, 1 Digit & 1 Alphabet";
        passwordError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    passwordError.innerHTML = "";
    passwordError.previousElementSibling.classList.add('fa-check');
    return true;
}