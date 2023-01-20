const d = new Date();

var clicks = 0;
var keys = 0;
var k1 = 0, k2 = 0, k3 = 0, k4 = 0, k5 = 0;
var c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0;
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
    console.log(child);
    var x = parseInt(child.innerHTML);
    child.innerHTML = x + 1;

    element = element.nextSibling.nextSibling;

    child = element.children[1];
    console.log(child);
    child.innerHTML = obj.value.length;
    map[obj] = obj.value.length;
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

setInterval(time, 1000);
