const body = document.querySelector('.body');

const renderArtQuiz = ()=>{
    body.innerHTML=`
    <div class="page-categories">
    <header>
        <div class="burg-set">
        </div>
    </header>
    <main class="menu">
    </main>
    <footer>
        <div class="wrapper">
            <div class="home" id="home"></div>
            <div class="categories" id="categories"></div>
            <div class="score" id="score"></div>
        </div>
    </footer>
</div>
`;}
export default renderArtQuiz;