var storste;
var tilfeldigeTall = [];
var xCanvasSize = 1500;
var yCanvasSize = 600;
var antallSoyler = 100;
var soylebredde = xCanvasSize / antallSoyler;
var global_i = 0;
var global_j = global_i+1;

function setup() {
    console.log('setup');
    createCanvas(xCanvasSize,yCanvasSize);
    for(let i = 0; i < antallSoyler; i++){
        tilfeldigeTall[i] = Math.floor(randomGaussian(yCanvasSize/2, yCanvasSize/5));
    }
   frameRate(120*2);
   tegn();
    
}

function draw() {
    tegn();
    if(global_j === tilfeldigeTall.length){
        global_i++;
        global_i %= tilfeldigeTall.length;
        global_j = global_i + 1;
    }
    if(global_i === tilfeldigeTall.length-1){
        noLoop();
    }
    if(tilfeldigeTall[global_i] > tilfeldigeTall[global_j]){
        tilfeldigeTall = bytt(tilfeldigeTall, global_i, global_j);
    }
    fill('red');
    rect(global_j*soylebredde, yCanvasSize-tilfeldigeTall[global_j], soylebredde, tilfeldigeTall[global_j]);
    fill('blue');
    rect(global_i*soylebredde, yCanvasSize-tilfeldigeTall[global_i], soylebredde, tilfeldigeTall[global_i]);
    global_j++
}


function bytt(liste, a, b){
    let temp = liste[a];
    liste[a] = liste[b];
    liste[b] = temp;
    return liste;
}

function tegn(){
    background(0);
    for(let i = 0; i < antallSoyler; i++){
        fill(255);
        rect(i*soylebredde, yCanvasSize-tilfeldigeTall[i], soylebredde, tilfeldigeTall[i]);
    }
}

