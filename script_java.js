function validateForm() {
    var userID = document.getElementById('userID').value;
    var zip = document.getElementById('zip').value;
    var password = document.getElementById('password').value;
    var userIDError = document.getElementById('userID-error');
    var passwordError = document.getElementById('password-error');
    var nameError = document.getElementById('name-error');
    var zipError = document.getElementById('zip-error');
    var name = document.getElementById('firstname').value;
    var country = document.getElementById('country').value;
    var countryError = document.getElementById('country-error');
    var sexError = document.getElementById('sex-error');
    var sex = document.getElementById('sex').value;
    var language = document.getElementById('language').value;
    var languageError = document.getElementById('language-error');
    var emailError = document.getElementById('email-error');
    var email = document.getElementById('email').value;
    var isValid = true;
   
    function endswithspecialcharacter(str){
        var x = "!@#$%^&*(),.?\":{}|<></>1234567890";
        if(x.includes(str.charAt(str.length-1))){
            return true;
        }
        return false;
    }
    if(userID.length==0){
        userIDError.innerHTML = "Please provide ID.<br>";
    }
    else if (userID.length < 5 || userID.length>12) {
        userIDError.innerHTML = "User ID must be between 5-12 characters long.<br>";
        isValid = false;
    } 
    else if (!userID.match(/^[A-Z]/)) {
        userIDError.innerHTML += "User ID must start with a capital letter. <br>";
        isValid = false;
    }
    else if(!endswithspecialcharacter(userID)){
        userIDError.innerHTML += "User ID must end with a special character or number. <br>";
        isValid = false;
    }
    function containsnumber(str){
        for(var x of str){
            if('0'<=x && x<='9'){
                return true;
            }
        }
        return false;
    }
    var hasCapitalLetter = /[A-Z]/.test(password);
    var hasNormalLetter = /[a-z]/.test(password);
    function containsspecialcharacter(str){
        var y = "!@#$%^&*(),.?\":{}|<></>";
        for(var x of str){
            if(y.includes(x)){
                return true;
            }
        } 
        return false;
    }

    if(password.length==0){
        passwordError.innerHTML = "Please provide password. <br>";
    }
    else if(password.length<12){
        passwordError.innerHTML = "Password must have at least 12 characters. <br>";
        isValid=false;
    } 
    else if (!containsnumber(password)) {

        passwordError.innerHTML += "Password must contain at least one number. <br>";
        isValid = false;
    }
    else if (!hasCapitalLetter) {
        passwordError.innerHTML += "Password must contain at least one uppercase letter.<br>";
        isValid = false;
    }
    else if (!hasNormalLetter) {
        passwordError.innerHTML += "Password must contain at least one lowercase letter.<br>";
        isValid = false;
    }
    else if (!containsspecialcharacter(password)) {
        passwordError.innerHTML += "Password must contain at least one symbol. <br>";
        isValid = false;
    }
    function containsonlyalphabet(str){
        for(var x of str){
            if(('a'>x || x>'z') && ('A'>x || 'Z'<x)){
                return false;
            }
        }
        return true;
    }
    if(name.length==0){
        nameError.innerHTML = "Please provide your name.<br>";
        isValid=false;

    }
    else if (!containsonlyalphabet(name)) {
        nameError.innerHTML = "Name can only contain the alphabet.<br>";
        isValid = false;
    } 
    function validzip(str){
        if(str.charAt(0)>9 || str.charAt(0)<0){
            return false;
        }
        if(str.charAt(1)>9 || str.charAt(1)<0){
            return false;
        }
        if(str.charAt(2)>9 || str.charAt(2)<0){
            return false;
        }
        if(str.charAt(3)>9 || str.charAt(3)<0){
            return false;
        }
        if(str.charAt(4)<'A' || str.charAt(4)>'Z'){
            return false;
        }
        if(str.charAt(5)<'A' || str.charAt(5)>'Z'){
            return false;
        }
        return true;

    }
    if(zip.length==0){
        zipError.innerHTML = "Enter zip code <br> ";
        isValid=false;

    }
    else if(zip.length!=6){
        zipError.innerHTML = "Enter a valid zip code containing 6 characters <br> ";
        isValid=false;
    }
    else if (!validzip(zip)) {
        zipError.innerHTML = "Zip code should have 4 numbers and 2 capital letters. <br> ";
        isValid = false;
    }

    if(country.length==0){
        countryError.innerHTML = "Please enter your country. <br>";
        isValid=false;
    }
    if(sex.length==0){
        sexError.innerHTML = "Please enter your sex. <br>";
        isValid=false;
    }
    if(language.length==0){
        languageError.innerHTML="Please enter your language<br>";
        isValid=false;
    }
    function containseta(str){
        for(var x of str){
            if((x=='@')){
                return true;
            }
        }
        return false;}
    if(email.length==0){
        emailError.innerHTML="Please enter an email <br>";
    }
    else if(!containseta(email)){
        emailError.innerHTML="Please enter a valid email <br>";
    }
    


    return isValid;
}
function clearAndValidateForm() {
    var userIDError = document.getElementById('userID-error');
    var passwordError = document.getElementById('password-error');
    var nameError = document.getElementById('name-error');
    var zipError = document.getElementById('zip-error');
    var countryError = document.getElementById('country-error');
    var sexError = document.getElementById('sex-error');
    var languageError=document.getElementById('language-error');
    var emailError=document.getElementById('email-error');
    userIDError.innerHTML = "";
    passwordError.innerHTML = "";
    countryError.innerHTML = "";
    nameError.innerHTML="";
    zipError.innerHTML="";
    sexError.innerHTML="";
    languageError.innerHTML="";
    emailError.innerHTML="";

    return validateForm();
}
