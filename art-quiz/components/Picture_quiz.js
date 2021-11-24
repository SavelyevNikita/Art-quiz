const body = document.querySelector('.body');

// renderArtQuiz{}

const renderpictureQuiz = ()=>{
    // console.log(typeofQuiz)
    body.innerHTML=`
    <div class="pictures-quiz">
    <header>
        <div class="progress-sets">
            <div class="progress-cross"></div>
            <div class="progress-bar">
                <div class="progress-line"></div>
            </div>
            <div class="progress-time">3:49</div>
        </div>
    </header>
    <main class="task">
        <div class="question">Which is Edvard Munch picture?</div>
        <div class="request-pictures">
            <div class="wrap-image-1">
                <img src="./img/img/1.webp" alt="imgLT" id="imgLT">
            </div>
            <div class="wrap-image-2">
                <img src="./img/img/2.webp" alt="imgRT" id="imgRT">
            </div>
            <div class="wrap-image-3">
                <img src="./img/img/3.webp" alt="imgLB" id="imgLB"></div>
            <div class="wrap-image-4">
                <img src="./img/img/4.webp" alt="imgRB" id="imgRB"></div>
        </div>
    </main>
    <footer>
        <div class="wrapper">
            <div class="rss-logo"></div>
            <div class="developer">App developer: Nikita Savelyev</div>
            <div class="year">2021</div>
        </div>
    </footer>
    <link rel="stylesheet" href="./css/pictures_quiz.css">
</div>
`;}

// footer.onclick = event => {
//     event.preventDefault();
//     console.log(event.target.id);
//     if(event.target.id==='home') renderMainScreen();
// }

export default renderArtQuiz;