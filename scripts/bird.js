var groundtimeout = true;
var x22 = 0;
var bird = {
    x: 200,
    y: 300,
    width: 57,
    height: 45,
    dy: -1,
    draw: function () {
        if (bird.dy < 6 && bird.dy > -6) {
            rotate = Math.round(((bird.dy / 6) + Number.EPSILON) * 100) / 100;
        }
        let canvas2 = document.createElement('canvas');
        canvas2.width = bird.width;
        canvas2.height = bird.height;
        let ctx2 = canvas2.getContext("2d");
        ctx2.save();
        ctx2.translate(bird.width / 2, bird.height / 2);
        ctx2.rotate(rotate);
        ctx2.drawImage(birdimage, -bird.width / 2, -bird.height / 2, bird.width, bird.height);
        ctx.drawImage(canvas2, bird.x, bird.y);
        ctx2.restore();
    },
    move: function () {
        if (move) {
            bird.dy -= power;
        }
        if (bird.y + bird.height > canvas.height) {
            bird.dy = -bird.dy;
            if (groundscore) {
                if (groundtimeout) {
                    score += 10;
                    groundtimeout = false;
                    setTimeout(() => {
                        groundtimeout = true;
                        x22 = 0;
                    }, 1000);
                } else {
                    x22++;
                    if (x22 > 2) {
                        alert("You dont get to do this");
                        gameover();
                    }
                }
            }
        }
        if (bird.y <= 0) {
            gameover();
        }
        bird.dy += gravitacija;
        bird.y = bird.y + bird.dy;
    }
};