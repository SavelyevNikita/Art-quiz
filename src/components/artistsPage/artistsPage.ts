import { MainPage, IMainPage } from '../mainPage/mainPage'
import { ArtistsCard } from '../artistsPage/artistsCard'

export interface IArtistsPage {
  onEvent: () => void;
  render: () => void;
  destroy: () => void;
}

export class ArtistsPage {

  containerHeader: HTMLParagraphElement;
  container: HTMLDivElement;
  categories: HTMLDivElement;
  home: HTMLButtonElement;
  mainPage: IMainPage;

  constructor() {
    this.container = document.createElement('div');
    this.containerHeader = document.createElement('p');
    this.categories = document.createElement('div');
    this.home = document.createElement('button');
  }
  onEvent() {
    this.home.onclick = () => {
      this.destroy();
      this.mainPage = new MainPage();
      this.mainPage.render();
    };
  }
  render() {
    this.home.textContent = 'home';
    this.containerHeader.textContent = 'ArtistsPage';
    this.categories.setAttribute('style','display:flex;')
    this.renderArtGame();
    this.container.appendChild(this.containerHeader);
    this.container.appendChild(this.home);
    this.container.appendChild(this.categories);
    document.body.appendChild(this.container);
    this.onEvent();
  }
  renderArtGame() {
    for (let i = 0; i < 6; i += 1) {
      const artistsCard = new ArtistsCard(this.categories, `${i}`, `../img/menu-images/${i+1}.png`, `${i}`);
      artistsCard.render();
    }
  }
  destroy() {
    document.body.removeChild(this.container);
  }

}