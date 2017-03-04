window.onload = initAdvert;

var y1;
var y2;
var Timer1;
var flag = true;

function initAdvert() {
    var adBox = "annoyingAdvert";
    y1 = document.getElementById(adBox).offsetTop;
    slide();
    document.getElementById("closeBox").onclick = function () {
        document.getElementById(adBox).style.display = "none";
    }
    setupRollover(document.getElementById(adBox));
}

function slide() {
    var adBox = "annoyingAdvert";

    if (nextPos(adBox) <= (document.body.clientWidth - 250)&& flag) {
        document.getElementById(adBox).style.left = nextPos(adBox) + "px";
        document.getElementById(adBox).style.top = nextTop(adBox) + "px";
        Timer1 = setTimeout(slide, 10);
        y2 = document.getElementById(adBox).offsetTop;
    }
    else {
        flag = false;
        document.getElementById(adBox).style.left = nextPos2(adBox) + "px";
        document.getElementById(adBox).style.top = nextTop2(adBox) + "px";
        Timer1 = setTimeout(slide, 10);
        if (nextPos(adBox) <= 0) flag = true;
    }

    function nextPos(elem) {
        return document.getElementById(elem).offsetLeft + 1;
    }
}

function nextTop(elem) {
    return y1 - 70 * Math.sin(document.getElementById(elem).offsetLeft/100);
}

function nextPos2(elem) {
    return document.getElementById(elem).offsetLeft - 1;
}

function nextTop2(elem) {
    return y2 - 70 * Math.cos(document.getElementById(elem).offsetLeft/101);
}

function setupRollover(thisTag) {
    thisTag.onmouseover = function () {
        clearTimeout(Timer1);
    }
    thisTag.onmouseout = function () {
        slide();
    }
}