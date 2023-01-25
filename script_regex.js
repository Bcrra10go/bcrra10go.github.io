function userID(){
    let obj = document.getElementById("userID");
    if(obj.value.length == 0){
        required(document.getElementById("usererror"));
        return;
    }
    var n = obj.value.match(/[$&+,:;=?@#|'<>.^*()%!A-z0-9]/g);
    var x = obj.value.search(/[A-Z]/);
    var y = n[obj.value.length - 1].search(/[$&+,:;=?@#|'<>.^*()%!0-9]/)
    if(n == null || n.length > 12 || n.length < 5 || x != 0 || y != 0){
        document.getElementById("usererror").innerHTML = "ID must be of length 5 to 12, must start with a capital letter and end with a number or special character";
    }

    else{
        valid(document.getElementById("usererror")); 
    }
}

function password(){
    let obj = document.getElementById("password");
    if(obj.value.length == 0){
        required(document.getElementById("pwderror"));
        return;
    }

    var n = obj.value.match(/[$&+,:;=?@#|'<>.^*()%!A-z0-9]/g);
    var w = obj.value.search(/[0-9]/);
    var x = obj.value.search(/[A-Z]/);
    var y = obj.value.search(/[a-z]/);
    var z = obj.value.search(/[$&+,:;=?@#'<>.^*()%!]/g);
    if(w == -1 || x == -1 || y == -1 || z == -1 || n.length < 12){
        document.getElementById("pwderror").innerHTML = "Password must be at least 12 characters long, contain one upper case, one lower case, one numerical and one special character";
    }

    else{
        valid(document.getElementById("pwderror")); 
    }
}

function firstName(){
    let obj = document.getElementById("firstname");
    if(obj.value.length == 0){
        required(document.getElementById("nameerror"));
        return;
    }
    var n = obj.value.match(/[$&+,:;=?@#|'<>.^*()%!0-9]/g);
    if(n != null){
        document.getElementById("nameerror").innerHTML = "Name can only contain letters";
    }

    else{
        valid(document.getElementById("nameerror")); 
    }
}

function country(){
    let obj = document.getElementById("country");
    if(obj.value.length == 0){
        required(document.getElementById("countryerror"));
        return;
    }

    else{
        valid(document.getElementById("countryerror")); 
    }
}

function zipCode(){
    let obj = document.getElementById("zip");
    if(obj.value.length != 6){
        document.getElementById("ziperror").innerHTML = "ZIP Code must be 6 characters long";
        return;
    }

    var n = obj.value.match(/[A-Z0-9]/g);
    var w = obj.value.search(/[0-9]/);
    var x = obj.value.search(/[A-Z]/);
    var y = obj.value.search(/[a-z]/);
    var z = obj.value.search(/[$&+,:;=?@#'<>.^*()%!]/g);

    if(w == -1 || x == -1 || y != -1 || z != -1 || n.length != 6){
        document.getElementById("ziperror").innerHTML = "ZIP Code must can only contain upper case letters or numbers";
    }

    var a = n[0].search(/[0-9]/);
    var b = n[1].search(/[0-9]/);
    var c = n[2].search(/[0-9]/);
    var d = n[3].search(/[0-9]/);
    var e = n[4].search(/[A-Z]/);
    var f = n[5].search(/[A-Z]/);

    if(a != 0 || b != 0 || c != 0 || d != 0 || e != 0 || f != 0){
        document.getElementById("ziperror").innerHTML = "ZIP Code must be 4 numbers first and 2 letters in the end";
    }

    else{
        valid(document.getElementById("ziperror")); 
    }
}

function email(){
    let obj = document.getElementById("email");
    if(obj.value.length == 0){
        required(document.getElementById("emailerror"));
        return;
    }

    var n = obj.value.match(/[$&+,:;=?@#|'<>.^*()%!A-z0-9]/g);
    var x = obj.value.search(/[A-Z]/g);
    var y = obj.value.search("@");

    if(x != -1 || y == -1 || y == (obj.value.length - 1)){
        document.getElementById("emailerror").innerHTML = "Please enter valid email";
    }

    else{
        valid(document.getElementById("emailerror")); 
    }
}

function sex(){
    let obj = document.getElementById("sex");
    if(obj.value.length == 0){
        required(document.getElementById("sexerror"));
        return;
    }

    else{
        valid(document.getElementById("sexerror")); 
    }
}

function language(){
    let obj = document.getElementById("language");
    if(obj.value.length == 0){
        required(document.getElementById("languageerror"));
        return;
    }

    else{
        valid(document.getElementById("languageerror")); 
    }
}

function required(obj){
    obj.innerHTML = "This field is required";
}

function valid(obj){
    obj.innerHTML= "✓";
}

function onClick(){
    userID();
    password();
    firstName();
    country();
    zipCode();
    email();
    sex();
    language();
}
