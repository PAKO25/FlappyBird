var novaoviraloop;
var novaoviraspeed = 2000;
var speed = 1000 / 120;
var ovirewidth = 50;
var ovire = []
var gapsize = 150;
var rotate = 0;
var move;
var gravitacija = 0.02;
var keyinterval;
var over;
var startdiv;
var obsticlespeed = 2;
var power = 0.05;
var setting;
var desno;
var fileid;
var imageid;
var score = 0;
var file;
var scoreinterval;
var groundscore = false;
var pausediv;
var pausetitlediv;


function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    canvas.width = 1500;
    canvas.height = 500;

    over = document.getElementById("over");
    startdiv = document.getElementById("start");
    setting = document.getElementById("settings");
    desno = document.getElementById('desno');
    fileid = document.getElementById('file');
    imageid = document.getElementById('image');
    pausediv = document.getElementById("clicktocontinue");
    pausetitlediv = document.getElementById("clicktotitlepause");

   // setTimeout(loadcss, 2000);
   loadcss();
}

function loadcss() {
    let head = document.getElementsByTagName("head")[0];
    let link = document.createElement('link');
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "style/loaded.css";
    head.appendChild(link);
} 

function restart() {
    score = 0;
    ovire = [];
    bird.x = 200;
    bird.y = 300;
    bird.dy = -1;
    move = false;
    over.style.display = "none";
    start();
}

function titlescreen() {
    score = 0;
    ovire = [];
    bird.x = 200;
    bird.y = 300;
    bird.dy = -1;
    move = false;
    over.style.display = "none";
    startdiv.style.display = "block";
    startmusic.currentTime = 0;
    startmusic.play();
    startmusic.loop = true;
}