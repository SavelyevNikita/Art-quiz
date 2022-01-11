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
    this.modelData.nameOfGame.forEach((item,index)=>{
      console.log(item);
      const artistsCard = new ArtistsCard(this.categories, item, `./img/menu-images/${index + 1}.png`, item);
      artistsCard.render(this.destroy.bind(this), this.modelData.increaseSmt.bind(this.modelData), this.modelData.getData.bind(this.modelData));
    });     
  }
  destroy() {
    // console.log('hhh');
    // document.body.removeChild(this.container);
    this.container.remove();
    this.container.innerHTML=null;
    document.body.innerHTML=null;
    // this.container=null;
  }

}