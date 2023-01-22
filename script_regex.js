function userID(){
    let obj = document.getElementById("userID");
    if(obj.value.length == 0){
        console.log("User ID alert");
        return;
    }
    var n = obj.value.match(/[$&+,:;=?@#|'<>.^*()%!A-z0-9]/g);
    var x = obj.value.search(/[A-Z]/);
    var y = n[obj.value.length - 1].search(/[$&+,:;=?@#|'<>.^*()%!0-9]/)
    if(n == null || n.length > 12 || n.length < 5 || x != 0 || y != 0){
        console.log("User ID alert");
    }
}

function password(){
    let obj = document.getElementById("password");
    if(obj.value.length == 0){
        console.log("Password alert");
        return;
    }

    var n = obj.value.match(/[$&+,:;=?@#|'<>.^*()%!A-z0-9]/g);
    var w = obj.value.search(/[0-9]/);
    var x = obj.value.search(/[A-Z]/);
    var y = obj.value.search(/[a-z]/);
    var z = obj.value.search(/[$&+,:;=?@#'<>.^*()%!]/g);
    if(w == -1 || x == -1 || y == -1 || z == -1 || n.length < 12){
        console.log("Password alert");
    }
}

function firstName(){
    let obj = document.getElementById("firstname");
    if(obj.value.length == 0){
        console.log("Name alert");
        return;
    }
    var n = obj.value.match(/[$&+,:;=?@#|'<>.^*()%!0-9]/g);
    if(n != null){
        console.log("Name alert");
    }
}

function country(){
    let obj = document.getElementById("country");
    if(obj.value.length == 0){
        console.log("Country alert");
        return;
    }
}

function zipCode(){
    let obj = document.getElementById("zip");
    if(obj.value.length != 6){
        console.log("Zip Code alert");
        return;
    }

    var n = obj.value.match(/[A-Z0-9]/g);
    var w = obj.value.search(/[0-9]/);
    var x = obj.value.search(/[A-Z]/);
    var y = obj.value.search(/[a-z]/);
    var z = obj.value.search(/[$&+,:;=?@#'<>.^*()%!]/g);

    if(w == -1 || x == -1 || y != -1 || z != -1 || n.length != 6){
        console.log("Zip Code alert");
    }

    var a = n[0].search(/[0-9]/);
    var b = n[1].search(/[0-9]/);
    var c = n[2].search(/[0-9]/);
    var d = n[3].search(/[0-9]/);
    var e = n[4].search(/[A-Z]/);
    var f = n[5].search(/[A-Z]/);

    if(a != 0 || b != 0 || c != 0 || d != 0 || e != 0 || f != 0){
        console.log("Zip Code alert");
    }
}

function email(){
    let obj = document.getElementById("email");
    if(obj.value.length == 0){
        console.log("Email alert");
        return;
    }

    var n = obj.value.match(/[$&+,:;=?@#|'<>.^*()%!A-z0-9]/g);
    var x = obj.value.search(/[A-Z]/g);
    var y = obj.value.search("@");

    if(x != -1 || y == -1 || y == (obj.value.length - 1)){
        console.log("Email alert");
    }
}

function sex(){
    let obj = document.getElementById("sex");
    if(obj.value.length == 0){
        console.log("Sex alert");
        return;
    }
}

function language(){
    let obj = document.getElementById("language");
    if(obj.value.length == 0){
        console.log("Language alert");
        return;
    }
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