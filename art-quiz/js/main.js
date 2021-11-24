import images from "./images.js";
import renderMainScreen from "../components/mainscreen.js";
import renderArtQuiz from "../components/main_quiz.js";
const body = document.querySelector('.body');
// console.log(body);

// images.forEach(image=>console.log(image))
body.onclick = event => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.className);
    event.preventDefault();
    // if (event.target.id) console.log(event.target.id);
    if (event.target.className === 'home') renderMainScreen();
    if (event.target.id === 'Artist_quiz' || event.target.id === 'Artist_quiz_w') renderArtQuiz('Artist_quiz');
    if (event.target.id === 'Picture_quiz' || event.target.id === 'Picture_quiz_w') renderArtQuiz('Picture_quiz');
    if (event.target.className === 'categories') console.log('categories');
    if (event.target.className === 'score') console.log('score');
}
window.addEventListener('load', (e) => {})