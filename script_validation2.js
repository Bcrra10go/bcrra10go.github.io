function validateForm() {
    var userID = document.getElementById('userID').value;
    var zip = document.getElementById('zip').value;
    var password = document.getElementById('password').value;
    var userIDError = document.getElementById('userID-error');
    var passwordError = document.getElementById('password-error');
    var nameError = document.getElementById('name-error');
    var zipError = document.getElementById('zip-error');
    var name = document.getElementById('firstname').value;
    var isValid = true;
   

    if (userID.length < 5 || userID.length>12) {
        userIDError.innerHTML = "User ID must be between 5-12 characters long.<br>";
        isValid = false;
    } 
    if (!userID.match(/^[A-Z]/)) {
        userIDError.innerHTML += "User ID must start with a capital letter. <br>";
        isValid = false;
    }
    if (!userID.match(/[!@#$%^&*(),.?":{}|<>]$/) && !userID.match(/[0-9]$/) ) {
        userIDError.innerHTML += "User ID must end with a special character or number. <br>";
        isValid = false;
    }
    
    if(password.length<12){
        passwordError.innerHTML = "Password must have at least 12 characters. <br>";
        isValid=false;
    } 
    // check if password contains a number
    if (!password.match(/[0-9]/)) {
        passwordError.innerHTML += "Password must contain at least one number. <br>";
        isValid = false;
    }
    // check if password contains a capital letter
    var hasCapitalLetter = /[A-Z]/.test(password);
    if (!hasCapitalLetter) {
        passwordError.innerHTML += "Password must contain at least one uppercase letter.<br>";
        isValid = false;
    }
    // check if password contains a lowercase letter
    var hasNormalLetter = /[a-z]/.test(password);
    if (!hasNormalLetter) {
        passwordError.innerHTML += "Password must contain at least one lowercase letter.<br>";
        isValid = false;
    }
    if (!password.match(/[!@#$%^&*(),.?":{}|<>]/)) {
        passwordError.innerHTML += "Password must contain at least one symbol. <br>";
        isValid = false;
    }

    if (!name.match(/^[A-Za-z]+$/)) {
        nameError.innerHTML = "Name can only contain the alphabet.<br>";
        isValid = false;
    } 
    if (!zip.match(/^\d{4}[a-zA-Z]{2}$/)) {
        zipError.innerHTML = "Please enter a valid zip code. <br> ";
        isValid = false;
    }

    return isValid;
}
function clearAndValidateForm() {
    var userIDError = document.getElementById('userID-error');
    var passwordError = document.getElementById('password-error');
    var nameError = document.getElementById('name-error');
    var zipError = document.getElementById('zip-error');
    userIDError.innerHTML = "";
    passwordError.innerHTML = "";
    nameError.innerHTML="";
    zipError.innerHTML="";
    return validateForm();
}