import images from "./images.js";
// import locationResolver from "./locationResolver.js";
import renderMainScreen from "../components/mainscreen.js";
import renderArtQuiz from "../components/Artist_quiz.js";
const menu = document.querySelector('.menu');
const footer = document.querySelector('.wrapper');
menu.onclick = event => {
    console.log(event.target.id);
    event.preventDefault();
    // locationResolver(event.target.id)
    if(event.target.id==='Artist_quiz') renderArtQuiz();
    }
footer.onclick = event => {
    event.preventDefault();
    console.log(event.target.id);
    if(event.target.id==='home') renderMainScreen();
}
window.addEventListener('load', (e) => {
    // console.log(e);
    // console.log(window.location);
})