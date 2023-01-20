const d = new Date();

var clicks = 0;
var keys = 0;
var k1 = 0, k2 = 0, k3 = 0, k4 = 0, k5 = 0;


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

setInterval(time, 1000);
