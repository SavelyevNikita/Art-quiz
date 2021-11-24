const body = document.querySelector('.body');

const renderMainScreen = () => {
    body.innerHTML = `
    <div class="page-main">
            <header>
                <div class="burg-set">
                </div>
            </header>
            <main class="menu">
                <div class="main-logo"></div>
                <div class="wrap-menu">
                    <div class="wrap-button" id="Artist_quiz_w">
                        <a href="#/Artist quiz/" id="Artist_quiz">Artist quiz</a>
                    </div>
                    <div class="wrap-button" id="Picture_quiz_w">
                        <a href="#/Picture quiz/" id="Picture_quiz">Picture quiz</a>
                    </div>
                </div>

            </main>
            <footer>
                <div class="wrapper">
                    <div class="rss-logo"></div>
                    <div class="developer">App developer: Nikita Savelyev</div>
                    <div class="year">2021</div>
                </div>
            </footer>
            <link rel="stylesheet" href="./css/main.css">
        </div>
`;
}
export default renderMainScreen;