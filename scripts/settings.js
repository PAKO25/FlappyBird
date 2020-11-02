function settings() {
    startdiv.style.display = "none";
    setting.style.display = "block";
    desno.style.display = "block";
}
function apply() {
    setting.style.display = "none";
    desno.style.display = "none";

    file = fileid.files[0];
    if (file == null || file == undefined) {
        save();
        startdiv.style.display = "block";
    } else {
        var reader = new FileReader();
        reader.onload = function (e) {
            var image = new Image(500, 500);
            image.src = e.target.result;
            birdimage = image;
            imageid.appendChild(image);
            save();
        }
        reader.readAsDataURL(file);
        imageid.style.display = "block";
        setTimeout(function () {
            imageid.style.display = "none";
            startdiv.style.display = "block";
            imageid.removeChild(birdimage);
            document.getElementById("form").reset();
        }, 3000);
    }

}

function save() {
    let novaoviraspeed1 = document.getElementById("novaoviraspeed").value;
    let speed1 = document.getElementById("fps").value;
    let ovirewidth1 = document.getElementById("obsticlewidth").value;
    let gapsize1 = document.getElementById("pipegap").value;
    let obsticlespeed1 = document.getElementById("obsticlespeed").value;
    let power1 = document.getElementById("power").value;
    let gravitacija1 = document.getElementById("gravitacija").value;
    let width1 = document.getElementById("width1").value;
    let height1 = document.getElementById("height1").value;

    if (novaoviraspeed1 != null && novaoviraspeed1 != undefined && novaoviraspeed1 != "") {
        novaoviraspeed = parseFloat(novaoviraspeed1);
    }
    if (speed1 != null && speed1 != undefined && speed1 != "") {
        speed = parseFloat(speed1);
    }
    if (ovirewidth1 != null && ovirewidth1 != undefined && ovirewidth1 != "") {
        ovirewidth = parseFloat(ovirewidth1);
    }
    if (gapsize1 != null && gapsize1 != undefined && gapsize1 != "") {
        gapsize = parseFloat(gapsize1);
    }
    if (obsticlespeed1 != null && obsticlespeed1 != undefined && obsticlespeed1 != "") {
        obsticlespeed = parseFloat(obsticlespeed1);
    }
    if (power1 != null && power1 != undefined && power1 != "") {
        power = power1;
    }
    if (gravitacija1 != null && gravitacija1 != undefined && gravitacija1 != "") {
        gravitacija = parseFloat(gravitacija1);
    }
    if (width1 != null && width1 != undefined && width1 != "") {
        bird.width = parseFloat(width1);
    }
    if (height1 != null && height1 != undefined && height1 != "") {
        bird.height = parseFloat(height1);
    }
}

function restore() {
    novaoviraspeed = 2000;
    speed = 1000 / 120;
    ovirewidth = 50;
    gapsize = 150;
    gravitacija = 0.02;
    obsticlespeed = 2;
    power = 0.05;
    bird.width = 57;
    bird.height = 45;

    startdiv.style.display = "block";
    setting.style.display = "none";
    desno.style.display = "none";

    document.getElementById("nastavitve").reset();
}

function restoreimage() {
    birdimage = imagerestore;
    startdiv.style.display = "block";
    setting.style.display = "none";
    desno.style.display = "none";
}