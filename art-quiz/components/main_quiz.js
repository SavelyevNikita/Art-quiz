const body = document.querySelector('.body');

// renderArtQuiz{}

const renderArtQuiz = (typeofQuiz)=>{
    console.log(typeofQuiz)
    body.innerHTML=`
    <div class="page-categories">
    <header>
        <div class="main-logo">
        </div>
        <div id="settings-icon" class="burg-set">
        </div>
    </header>
    <main class="menu">
        <h1 class="head-categories">Categories</h1>
        <div class="categories">
            <div class="category1">
                <div class="info">
                    <div class="name">Portrait</div>
                    <div class="score">1/10</div>
                </div>
                <div class="picture">
                     <img src="./img/menu-images/1.png">
                </div>
            </div>
            <div class="category2">
                <div class="info">
                    <div class="name">Portrait</div>
                    <div class="score">1/10</div>
                </div>
                <div class="picture">
                    <img src="./img/menu-images/2.png">
                </div>
            </div>
            <div class="category3">
                <div class="info">
                    <div class="name">Portrait</div>
                    <div class="score">1/10</div>
                </div>
                <div class="picture">
                    <img src="./img/menu-images/3.png">
                </div>
            </div>
            <div class="category4">
                <div class="info">
                    <div class="name">Portrait</div>
                    <div class="score">1/10</div>
                </div>
                <div class="picture">
                    <img src="./img/menu-images/4.png">
                </div>
            </div>
            <div class="category5">
                <div class="info">
                    <div class="name">Portrait</div>
                    <div class="score">1/10</div>
                </div>
                <div class="picture">
                    <img src="./img/menu-images/5.png">
                </div>
            </div>
            <div class="category6">
                <div class="info">
                    <div class="name">Portrait</div>
                    <div class="score">1/10</div>
                </div>
                <div class="picture">
                    <img src="./img/menu-images/6.png">
                </div>
            </div>
        </div>
    </main>
    <footer>
        <div class="wrapper">
            <div class="home" id="home"></div>
            <div class="categories" id="categories"></div>
            <div class="score" id="score"></div>
        </div>
    </footer>
</div>
<link rel="stylesheet" href="./css/categories.css">
`;}

// footer.onclick = event => {
//     event.preventDefault();
//     console.log(event.target.id);
//     if(event.target.id==='home') renderMainScreen();
// }

export default renderArtQuiz;