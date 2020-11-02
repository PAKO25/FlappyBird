function start() {
    startmusic.pause();
    gamemusic.currentTime = 0;
    gamemusic.play();
    gamemusic.loop = true;

    novaoviraloop = setInterval(novaovira, novaoviraspeed);
    loop = setInterval(draw, speed);
    scoreinterval = setInterval(() => {
        score++;
    }, 1000);
    setTimeout(() => {
        groundscore = true;
    }, 5000);

    canvas.addEventListener("mousedown", coords, false);

    startdiv.style.display = "none";
    canvas.style.display = "block";
}

function novaovira() {
    ovire.push({
        x: canvas.width - ovirewidth,
        y: Math.floor(Math.random() * (canvas.height - gapsize))
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < ovire.length; i++) {
        if (ovire[i].x + ovirewidth < 0) {
            ovire.splice(i, 1);

        } else if (
            ovire[i].x < bird.x + bird.width &&
            ovire[i].x + ovirewidth > bird.x &&
            0 < bird.y + bird.height &&
            0 + ovire[i].y > bird.y
        ) {
            gameover();
        } else if (
            ovire[i].x < bird.x + bird.width &&
            ovire[i].x + ovirewidth > bird.x &&
            ovire[i].y + gapsize < bird.y + bird.height &&
            ovire[i].y + gapsize + canvas.height - (ovire[i].y + gapsize) > bird.y
        ) {
            gameover();
        } else {
            ovire[i].x -= obsticlespeed;
            let gorslikay = 242;
            if (ovire[i].y > gorslikay) {
                gorslikay = ovire[i].y;
            }
            ctx.drawImage(gor, ovire[i].x, ovire[i].y - gorslikay, ovirewidth, gorslikay);
            ctx.drawImage(dol, ovire[i].x, ovire[i].y + gapsize, ovirewidth, canvas.height);
        }
    }
    bird.move();
    bird.draw();

    drawscore();
    ctx.drawImage(pauseimg, 0, 0, 50, 50);
}

function keypress(event) {
    if (event == "down") {
        move = true;
    } else if (event == "up") {
        move = false;
    }
}

function coords(event) {
    let x = event.x;
    let y = event.y;

    let x2 = x - canvas.offsetLeft;
    let y2 = y - canvas.offsetTop;

    if (x2 > 0 &&
        x2 < 50 &&
        y2 > 0 &&
        y2 < 50) {
        pause();
    }
}

function drawscore() {
    ctx.font = "30px Arial";
    ctx.fillText(score, canvas.width - 50, 50);
}


function gameover() {
    clearInterval(novaoviraloop);
    clearInterval(loop);
    clearInterval(scoreinterval);

    canvas.style.display = "none";
    over.style.display = "block";
    groundscore = false;

    document.getElementById("endscore").innerHTML = score;

    gamemusic.pause();
    smrtmusic.play();
}

function pause() {
    gamemusic.pause();
    clearInterval(novaoviraloop);
    clearInterval(loop);
    clearInterval(scoreinterval);

    canvas.style.webkitFilter = "blur(3px)";
    pausediv.style.display = "block";
    pausetitlediv.style.display = "block";

    canvas.addEventListener("mousedown", unpause, false);
}

function unpause() {
    canvas.style.webkitFilter = "blur(0px)";
    pausediv.style.display = "none";
    pausetitlediv.style.display = "none";

    canvas.removeEventListener("mousedown", unpause, false);

    gamemusic.play();

    novaoviraloop = setInterval(novaovira, novaoviraspeed);
    loop = setInterval(draw, speed);
    scoreinterval = setInterval(() => {
        score++;
    }, 1000);
}

function pausetitle() {
    pausetitlediv.style.display = "none";
    canvas.style.webkitFilter = "blur(0px)";
    pausediv.style.display = "none";
    canvas.style.display = "none";

    canvas.removeEventListener("mousedown", unpause, false);
    titlescreen();
}