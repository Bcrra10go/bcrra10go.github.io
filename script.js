const d = new Date();
var clicks = 0;
var keys = 0;
var map = {};

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
    map[obj.id] = obj.value.length;
    totalKeys();
    characters();
}

function time(){
    const b = new Date();
    var sec2 = Math.round((b.getTime() - d.getTime()) / 1000);
    document.getElementById("time").innerHTML = sec2;
}

function characters(){
    var y = 0;
    for(var x in map){
        y = y + map[x];
    }

    document.getElementById("characters").innerHTML = y;
}

function reveal(){
    var x = document.getElementsByClassName("hidden");
    for(var i = 0; i < x.length; i++){
        x[i].style.display = "block";
    }
}

setInterval(time, 1000);
