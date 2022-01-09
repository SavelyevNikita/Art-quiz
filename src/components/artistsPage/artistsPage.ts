import { MainPage, IMainPage } from '../mainPage/mainPage';
import { ArtistsCard } from '../artistsPage/artistsCard';
import { ModelData, IModelData, TModeldata } from '../model';
import data from '../../js/images';

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
  button: HTMLButtonElement;
  mainPage: IMainPage;
  modelData: IModelData;

  constructor(mainPage: IMainPage) {
    this.container = document.createElement('div');
    this.containerHeader = document.createElement('p');
    this.categories = document.createElement('div');
    this.home = document.createElement('button');
    this.modelData = new ModelData(data, 0);
    this.mainPage = mainPage;
  }
  onEvent() {
    this.home.onclick = () => {
      this.destroy();
      this.mainPage.render();
    };
  }
  render() {
    this.home.textContent = 'home';
    this.containerHeader.textContent = 'ArtistsPage';
    this.categories.setAttribute('style', 'display:flex;')
    this.renderArtGame();
    this.container.appendChild(this.containerHeader);
    this.container.appendChild(this.home);
    this.container.appendChild(this.categories);
    document.body.appendChild(this.container);
    this.onEvent();
  }
  renderArtGame() {
    for (let i = 0; i < 6; i += 1) {
      const artistsCard = new ArtistsCard(this.categories, i.toString(), `../img/menu-images/${i + 1}.png`, i.toString());
      artistsCard.render(this.destroy.bind(this), this.modelData.increaseSmt.bind(this.modelData), this.modelData.getData.bind(this.modelData));
    }
  }
  destroy() {
    document.body.removeChild(this.container);
  }

}