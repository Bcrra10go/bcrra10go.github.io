const d = new Date();

var clicks = 0;
var keys = 0;
var k1 = 0, k2 = 0, k3 = 0, k4 = 0, k5 = 0;
var c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0;


function onClick(){
    clicks++;
    document.getElementById("clicks").innerHTML = clicks;
}

function totalKeys(){
    keys++;
    document.getElementById("keys").innerHTML = keys;
}

function onKeyPress1(){
    k1++;
    document.getElementById("firstnamek").innerHTML = k1;
    totalKeys();
}

function onKeyPress2(){
    k2++;
    document.getElementById("emailk").innerHTML = k2;
    totalKeys();
}

function onKeyPress3(){
    k3++;
    document.getElementById("usernamek").innerHTML = k3;
    totalKeys();
}

function onKeyPress4(){
    k4++;
    document.getElementById("passwordk").innerHTML = k4;
    totalKeys();
}

function onKeyPress5(){
    k5++;
    document.getElementById("confirmationpasswordk").innerHTML = k5;
    totalKeys();
}

function time(){
    const b = new Date();
    var sec2 = Math.round((b.getTime() - d.getTime()) / 1000);
    document.getElementById("time").innerHTML = sec2;
}

function countCharacter1(obj){
    c1 = obj.value.length;
    document.getElementById("firstnamec").innerHTML = c1;
    characters();
}

function countCharacter2(obj){
    c2 = obj.value.length;
    document.getElementById("emailc").innerHTML = c2;
    characters();
}

function countCharacter3(obj){
    c3 = obj.value.length;
    document.getElementById("usernamec").innerHTML = c3;
    characters();
}

function countCharacter4(obj){
    c4 = obj.value.length;
    document.getElementById("passwordc").innerHTML = c4;
    characters();
}

function countCharacter5(obj){
    c5 = obj.value.length;
    document.getElementById("passwordconfirmationc").innerHTML = c5;
    characters();
}

function characters(){
    document.getElementById("characters").innerHTML = c1 + c2 + c3 + c4 + c5;
}

setInterval(time, 1000);
