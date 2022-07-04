import { MainPage, IMainPage } from '../MainPage/MainPage';
import { PictureCard } from './PictureCard';
import '../../css/categories.css'


export interface IPicturePage {
  onEvent: () => void;
  render: () => void;
  destroy: () => void;
}

export class PicturePage {

  container: HTMLElement;
  categories: HTMLDivElement;
  home: HTMLButtonElement;
  mainPage: IMainPage;
  onHome: () => void;
  pictureCard: PictureCard;
  pictureCards: PictureCard[];
  wrapper_home: HTMLDivElement;
  wrapper_categories: HTMLDivElement;
  wrapper_score: HTMLDivElement;
  wrapper: HTMLDivElement;
  header: HTMLElement;
  settings: HTMLButtonElement;
  footer: HTMLElement;

  constructor(mainPage:IMainPage) {
    this.pictureCards = [];
    this.container = document.createElement('div');
    this.categories = document.createElement('div');
    this.home = document.createElement('button');
    this.mainPage = mainPage;
    this.wrapper_home = document.createElement('div');
    this.wrapper_categories = document.createElement('div');
    this.wrapper_score = document.createElement('div');
    this.wrapper = document.createElement('div');
    this.header = document.createElement('header');
    this.settings = document.createElement('button');
    this.footer = document.createElement('footer');
  }
  onEvent() {
    this.home.onclick = () => {
      this.destroy(); 
      this.onHome();     
    };
  }
  render() {
    this.container.className = 'page-categories';
    this.renderArtGame();

    this.container.appendChild(this.header);
    this.home.className = 'main-logo';
    this.header.appendChild(this.home);
    this.settings.className = 'burg-set';
    this.header.appendChild(this.settings);

    this.footer.appendChild(this.wrapper);
    this.wrapper.className= 'wrapper';
    this.wrapper_home.className= 'wrapper__home';
    this.wrapper_categories.className ='wrapper__categories';
    this.wrapper_score.className = 'wrapper__score';
    this.wrapper.appendChild(this.wrapper_home);
    this.wrapper.appendChild(this.wrapper_categories);
    this.wrapper.appendChild(this.wrapper_score);
    this.container.appendChild(this.categories);
    
    this.container.appendChild(this.footer);
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
    this.categories.innerHTML = null;
    // document.body.removeChild(this.container);
    this.container.remove();
  }
}