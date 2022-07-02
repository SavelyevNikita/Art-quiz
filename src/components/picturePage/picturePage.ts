import { MainPage, IMainPage } from '../MainPage/MainPage'
import { PictureCard } from './PictureCard'

export interface IPicturePage {
  onEvent: () => void;
  render: () => void;
  destroy: () => void;
}

export class PicturePage {

  container: HTMLElement;
  containerHeader: HTMLParagraphElement;
  categories: HTMLDivElement;
  home: HTMLButtonElement;
  mainPage: IMainPage;
  onHome: () => void;
  pictureCard: PictureCard;
  pictureCards: PictureCard[];

  constructor(mainPage:IMainPage) {
    this.pictureCards = [];
    this.container = document.createElement('div');
    this.containerHeader = document.createElement('p');
    this.categories = document.createElement('div');
    this.home = document.createElement('button');
    this.mainPage = mainPage;
  }
  onEvent() {
    this.home.onclick = () => {
      this.destroy(); 
      this.onHome();     
    };
  }
  render() {
    this.containerHeader.textContent = 'PicturePage';
    this.home.textContent = 'home';
    this.categories.setAttribute('style','display:flex;')
    this.container.appendChild(this.containerHeader);
    this.container.appendChild(this.home);
    this.container.appendChild(this.categories);
    this.renderArtGame();
    document.body.appendChild(this.container);
    this.onEvent();
    console.log(this.categories);
  }
  renderArtGame() {
    for (let i = 0; i < 6; i += 1) {
      const pictureCard = new PictureCard(this.categories, i.toString(), `./img/menu-images/${i+1}.png`, i.toString());
      pictureCard.render();
    }
  }
  destroy() {
    this.categories.innerHTML = '';
    document.body.removeChild(this.container);
  }
}