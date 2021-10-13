const playBtn = document.querySelector('#play_pause');
const progress = document.querySelector('#progress');
const muteBtn = document.querySelector('#sound_mute');
const buttonOnVideo = document.querySelector('.button-video');
const soundLevel = document.querySelector('#sound_level');
const screenBtn = document.querySelector('#screen');
const player = document.querySelector('#main_video');
let playTogglet = false;
let muteTogglet = false;
let screenTogglet = false;
let soundLevelSave = 0;


// ф-я запуск плеера
function launchedPlayVideo() {
    // if (!playTogglet) {
    playBtn.classList.add("play-pause-pressed");
    player.volume = soundLevel.value / 100;
    player.play();
    playTogglet = true;
    buttonOnVideo.style.display = 'none';
    playerYT1.stopVideo();
    playerYT2.stopVideo();
    playerYT3.stopVideo();
    playerYT4.stopVideo();
    playerYT5.stopVideo();
    playerYT6.stopVideo();
    playerYT7.stopVideo();

}
// ф-я останова плеера
function stoppedPlayVideo() {
    playBtn.classList.remove("play-pause-pressed");
    player.pause();
    playTogglet = false;
    buttonOnVideo.style.display = 'block';
}
// ф-я реверса плеера
function reversedVideo() {
    playBtn.classList.remove("play-pause-pressed");
    player.pause();
    playTogglet = false;
    buttonOnVideo.style.display = 'block';
    player.currentTime = 0
}
// ф-я отключения звука 
function mutedVideo() {
    soundLevelSave = player.volume;
    player.volume = 0;
    soundLevel.value = 0;
    muteTogglet = true;
    muteBtn.classList.add("sound-mute-pressed");
}
// ф-я включения звука 
function unMuttedVideo() {
    soundLevel.value = soundLevelSave * 100;
    player.volume = soundLevelSave;
    muteTogglet = false;
    muteBtn.classList.remove("sound-mute-pressed");
}

function playerMove() {
    progress.value = (player.currentTime / player.duration) * 100;
    if (progress.value >= 100) reversedVideo();
}

function speedUp() {
    player.play();
    player.playbackRate = 2;
}

function speedDown() {
    player.play();
    player.playbackRate = 0.5;
}

playBtn.addEventListener('click', () => {
    if (!playTogglet) {
        launchedPlayVideo();
    } else {
        stoppedPlayVideo();
    }
});

buttonOnVideo.addEventListener('click', launchedPlayVideo);
player.addEventListener('click', stoppedPlayVideo);

document.onkeypress = (e) => {
    e.preventDefault();
    console.log(e.code);
    if ((e.code).toLowerCase() === 'space') {
        if (!playTogglet) {
            launchedPlayVideo();
        } else {
            stoppedPlayVideo();
        }
    };
    if ((e.code).toLowerCase() === 'keym') {
        if (!muteTogglet) {
            mutedVideo();
        } else {
            unMuttedVideo();
        }
    };
    if ((e.code).toLowerCase() === 'keyf') {
        if (!screenTogglet) {
            player.requestFullscreen();
            screenTogglet = true;
        } else {
            document.exitFullscreen();
            screenTogglet = false;
        }
    };
    if ((e.code).toLowerCase() === 'period') speedUp();
    if ((e.code).toLowerCase() === 'comma') speedDown();


}
muteBtn.addEventListener('click', () => {
    if (!muteTogglet) {
        mutedVideo();
    } else {
        unMuttedVideo();
    }
});

screenBtn.addEventListener('click', () => {
    player.requestFullscreen();
})

player.ontimeupdate = playerMove;

soundLevel.addEventListener('input', (e) => {
    player.volume = soundLevel.value / 100;
    if (player.volume <= 0) {
        mutedVideo();
    } else {
        muteBtn.classList.remove("sound-mute-pressed");
    }
});
progress.addEventListener('input', (e) => {
    console.log(progress.value);
})
progress.addEventListener('click', (e) => {
    player.pause();
    player.currentTime = (progress.value / 100) * player.duration;
    player.play();
});


// video slider

const backwardVideoBtnSlider = document.querySelector('#backward_video');
const forwardVideoBtnSlider = document.querySelector('#forward_video');
const list = document.querySelector('.list');
const roundLink1 = document.querySelector('.round-link-1');
const roundLink2 = document.querySelector('.round-link-2');
const roundLink3 = document.querySelector('.round-link-3');
const roundLink4 = document.querySelector('.round-link-4');
const roundLink5 = document.querySelector('.round-link-5');
const iframeVideo1 = document.querySelector('.pre-omg-1');
const iframeVideo2 = document.querySelector('.pre-omg-2');
const iframeVideo3 = document.querySelector('.pre-omg-3');
const iframeVideo4 = document.querySelector('.pre-omg-4');
const iframeVideo5 = document.querySelector('.pre-omg-5');
const iframeVideo6 = document.querySelector('.pre-omg-6');
const iframeVideo7 = document.querySelector('.pre-omg-7');
const listWraper = document.querySelector('.list-wraper');

let positionInVideo = 0;
let numPositionInVideo = 1;
let turnWayInVideo = null;

function changePositionForwardInVideo(num) {
    if (positionInVideo >= 0) {
        numPositionInVideo = 5;
        return positionInVideo = -1968;

    } else {
        numPositionInVideo -= 1;
        return positionInVideo += num * 492;
    }
}

function changePositionBackwardInVideo(num) {
    if (positionInVideo <= -1968) {
        numPositionInVideo = 1;
        return positionInVideo = 0
    } else {
        numPositionInVideo += 1;
        return positionInVideo -= num * 492;
    }
}
// This code loads the IFrame Player API code asynchronously.
// JavaScript API вызывает функцию onYouTubeIframeAPIReady, которая позволяет создать объект YT.Player для вставки проигрывателя видео на страницу
function onYouTubePlayerAPIReady() {
    console.log('onYouTubePlayerAPIReady');
    playerYT1 = new YT.Player('pre_omg_1', {
        events: { 'onReady': onPlayerReady }
    });
    playerYT2 = new YT.Player('pre_omg_2', {
        events: { 'onReady': onPlayerReady }
    });
    playerYT3 = new YT.Player('pre_omg_3', {
        events: { 'onReady': onPlayerReady }
    });
    playerYT4 = new YT.Player('pre_omg_4', {
        events: { 'onReady': onPlayerReady }
    });
    playerYT5 = new YT.Player('pre_omg_5', {
        events: { 'onReady': onPlayerReady }
    });
    playerYT6 = new YT.Player('pre_omg_6', {
        events: { 'onReady': onPlayerReady }
    });
    playerYT7 = new YT.Player('pre_omg_7', {
        events: { 'onReady': onPlayerReady }
    });
}
// остановка видео при клику по слайдеру видео
function onPlayerReady(event) {
    listWraper.addEventListener("click", function() {
        console.log(playerYT1);
        console.log(playerYT1.getPlayerState());
        playerYT1.playVideo();
        playerYT2.stopVideo();
        playerYT3.stopVideo();
        playerYT4.stopVideo();
        playerYT5.stopVideo();
        playerYT6.stopVideo();
        playerYT7.stopVideo();
    });

}
iframeVideo1.addEventListener('click', () => {
        // console.log(playerYT1);
    })
    // function stopAllvideo() {
    //     iframeVideo1.src += "&paused-mode"
    //     iframeVideo2.src += "&paused-mode"
    //     iframeVideo3.src += "&paused-mode"
    //     iframeVideo4.src += "&paused-mode"
    //     iframeVideo5.src += "&paused-mode"
    //     iframeVideo6.src += "&paused-mode"
    //     iframeVideo7.src += "&paused-mode"

// }
forwardVideoBtnSlider.addEventListener('click', (e) => {
    list.style.left = changePositionForwardInVideo(1) + "px";
    updateBulletInVideo();
    playerYT1.stopVideo();
    playerYT2.stopVideo();
    playerYT3.stopVideo();
    playerYT4.stopVideo();
    playerYT5.stopVideo();
    playerYT6.stopVideo();
    playerYT7.stopVideo();


})
backwardVideoBtnSlider.addEventListener('click', (e) => {
    list.style.left = changePositionBackwardInVideo(1) + "px";
    updateBulletInVideo();
    playerYT1.stopVideo();
    playerYT2.stopVideo();
    playerYT3.stopVideo();
    playerYT4.stopVideo();
    playerYT5.stopVideo();
    playerYT6.stopVideo();
    playerYT7.stopVideo();

})
document.addEventListener('DOMContentLoaded', () => { roundLink1.classList.add("selectedInVideo"); });

function updateBulletInVideo() {
    roundLink1.classList.remove("selectedInVideo");
    roundLink2.classList.remove("selectedInVideo");
    roundLink3.classList.remove("selectedInVideo");
    roundLink4.classList.remove("selectedInVideo");
    roundLink5.classList.remove("selectedInVideo");
    // console.log(square.childNodes[1], square.childNodes[2], square.childNodes[3], square.childNodes[4], square.childNodes[5]);
    switch (String(list.style.left)) {
        case "0px":
            roundLink1.classList.add("selectedInVideo");
            // square.childNodes[1].classList.add("selected");
            break;
        case "-492px":
            roundLink2.classList.add("selectedInVideo");
            // square.childNodes[2].classList.add("selected");
            break;
        case "-984px":
            roundLink3.classList.add("selectedInVideo");
            // square.childNodes[3].classList.add("selected");
            break;
        case "-1476px":
            roundLink4.classList.add("selectedInVideo");
            break;
        case "-1968px":
            roundLink5.classList.add("selectedInVideo");
            break;
        default:
            console.log('Неизвестное значение');
    }
}