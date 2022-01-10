import { MainPage, IMainPage } from '../mainPage/mainPage'
import { PictureCard } from './pictureCard'

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

  constructor(mainPage:IMainPage) {
    this.container = document.createElement('div');
    this.containerHeader = document.createElement('p');
    this.categories = document.createElement('div');
    this.home = document.createElement('button');
    this.mainPage = mainPage;
  }
  onEvent() {
    this.home.onclick = () => {
      this.destroy();      
      this.mainPage.render();
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
  }
  renderArtGame() {
    for (let i = 0; i < 6; i += 1) {
      const pictureCard = new PictureCard(this.categories, i.toString(), `./img/menu-images/${i+1}.png`, i.toString());
      pictureCard.render();
    }
  }

  destroy() {
    document.body.removeChild(this.container);
  }

}