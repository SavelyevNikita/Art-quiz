const forward = document.querySelector('#forward');
const backward = document.querySelector('#backward');
const slider = document.querySelector('.slider-pic-line');
const square = document.querySelector('.square');
const digitOfSlider = document.querySelector('.numberOfslider');
const square_link_1 = document.querySelector('.square-link-1');
const square_link_2 = document.querySelector('.square-link-2');
const square_link_3 = document.querySelector('.square-link-3');
const square_link_4 = document.querySelector('.square-link-4');
const square_link_5 = document.querySelector('.square-link-5');
let position = 0;
let numPosition = 1;
let turnWay = null;

function changePositionForward(num) {
    if (position >= 0) {
        numPosition = 5;
        return position = -4000;

    } else {
        numPosition -= 1;
        return position += num * 1000;
    }
}

function changePositionBackward(num) {
    if (position <= -4000) {
        numPosition = 1;
        return position = 0
    } else {
        numPosition += 1;
        return position -= num * 1000;
    }
}
// листаем вперед
function forwardList() {
    // console.log(forwardList);
    slider.style.left = changePositionForward(1) + "px";
    digitOfSlider.innerHTML = '0' + numPosition;
}
// листаем назад
function backwardList() {
    // console.log(backwardList);
    slider.style.left = changePositionBackward(1) + "px";
    digitOfSlider.innerHTML = '0' + numPosition;
}
// селект по буллетам
function updateBullet() {
    square_link_1.classList.remove("selected");
    square_link_2.classList.remove("selected");
    square_link_3.classList.remove("selected");
    square_link_4.classList.remove("selected");
    square_link_5.classList.remove("selected");
    // console.log(square.childNodes[1], square.childNodes[2], square.childNodes[3], square.childNodes[4], square.childNodes[5]);
    switch (String(slider.style.left)) {
        case "0px":
            square_link_1.classList.add("selected");
            // square.childNodes[1].classList.add("selected");
            break;
        case "-1000px":
            square_link_2.classList.add("selected");
            // square.childNodes[2].classList.add("selected");
            break;
        case "-2000px":
            square_link_3.classList.add("selected");
            // square.childNodes[3].classList.add("selected");
            break;
        case "-3000px":
            square_link_4.classList.add("selected");
            break;
        case "-4000px":
            square_link_5.classList.add("selected");
            break;
        default:
            console.log('Неизвестное значение');
    }
}

document.addEventListener('DOMContentLoaded', () => { square_link_1.classList.add("selected") });
forward.addEventListener('click', (e) => {
    forwardList();
    updateBullet();
})
backward.addEventListener('click', (e) => {
    backwardList();
    updateBullet();
})

square.addEventListener('click', (e) => {
    console.log(e);
    if (e.target.className === "square-link-1") {
        slider.style.left = "0px";
        updateBullet();
        digitOfSlider.innerHTML = '0' + numPosition;

    }
    if (e.target.className === "square-link-2") {
        slider.style.left = "-1000px";
        updateBullet();
        digitOfSlider.innerHTML = '0' + numPosition;

    }
    if (e.target.className === "square-link-3") {
        slider.style.left = "-2000px";
        updateBullet();
        digitOfSlider.innerHTML = '0' + numPosition;

    }
    if (e.target.className === "square-link-4") {
        slider.style.left = "-3000px";
        updateBullet();
        digitOfSlider.innerHTML = '0' + numPosition;

    }
    if (e.target.className === "square-link-5") {
        slider.style.left = "-4000px";
        updateBullet();
        digitOfSlider.innerHTML = '0' + numPosition;

    }
})

slider.addEventListener('mousedown', (e) => {
    e.preventDefault();
    turnWay = e.offsetX;
});
slider.addEventListener('mousemove', (e) => {
    if (!turnWay)
        return false;
    e.preventDefault();
    if ((turnWay - e.offsetX) >= 0) {
        backwardList();

    } else {
        forwardList();

    }
    turnWay = null;
});