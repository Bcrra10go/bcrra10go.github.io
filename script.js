const d = new Date();
var count = 0;
var clicks = 0;
var keys = 0;
var ch = 0;
var map = {};

function onKeyDown(obj){
    count = obj.value.length;
}


function onClick(){
    clicks++;
    document.getElementById("clicks").innerHTML = clicks;
}

function totalKeys(){
    keys++;
    document.getElementById("keys").innerHTML = keys;
}

function onKeyPress(obj){
    var element = obj.nextSibling.nextSibling;

    var child = element.children[1];
    var x = parseInt(child.innerHTML);
    child.innerHTML = x + 1;

    element = element.nextSibling.nextSibling;

    child = element.children[1];
    child.innerHTML = obj.value.length;
    ch = ch + (obj.value.length - count);
    totalKeys();
    characters();
}

function time(){
    const b = new Date();
    var sec2 = Math.round((b.getTime() - d.getTime()) / 1000);
    document.getElementById("time").innerHTML = sec2;
}

function characters(){
    document.getElementById("characters").innerHTML = ch;
}

function reveal(){
    var x = document.getElementsByClassName("hidden");
    for(var i = 0; i < x.length; i++){
        x[i].style.display = "block";
    }
}

setInterval(time, 1000);
