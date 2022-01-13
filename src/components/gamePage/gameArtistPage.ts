import { MainPage, IMainPage } from '../mainPage/mainPage'
import { ArtistsPage, IArtistsPage } from '../artistsPage/artistsPage'
import { ModelData, IModelData, TModeldata, TExtandData } from '../model'


export interface IGameArtistPage {
  onEvent: () => void;
  render: (data?: () => TExtandData, callback2?: () => void) => void;
  destroy: () => void;
}

export class GameArtistPage {
  container: HTMLElement;
  containerHeader: HTMLParagraphElement;
  gameField: HTMLElement;
  home: HTMLButtonElement;
  categories: HTMLButtonElement;
  mainPage: IMainPage;
  artistsPage: IArtistsPage;
  image: HTMLImageElement;
  LU: HTMLButtonElement;
  RU: HTMLButtonElement;
  LD: HTMLButtonElement;
  RD: HTMLButtonElement;

  constructor() {
    this.container = document.createElement('div');
    this.containerHeader = document.createElement('p');
    this.gameField = document.createElement('div');
    this.image = document.createElement('img');
    this.LU = document.createElement('button');
    this.RU = document.createElement('button');
    this.LD = document.createElement('button');
    this.RD = document.createElement('button');
    this.home = document.createElement('button');
    this.categories = document.createElement('button');
    this.artistsPage = new ArtistsPage(this);
    this.mainPage = new MainPage();
  }
  onEvent(callback2?: () => void, data?: () => TExtandData) {
    this.home.onclick = () => {
      this.destroy();
      this.mainPage.render();
    };
    this.categories.onclick = () => {
      this.destroy();
      this.artistsPage.render();
    };
    this.LU.onclick = () => {
      this.destroy();
      console.log(data());
      this.render(data, callback2);
      callback2();
    }
    this.RU.onclick = () => {
      this.destroy();
      this.render(data, callback2);
      callback2();
    }
    this.LD.onclick = () => {
      this.destroy();
      this.render(data, callback2);
      callback2();
    }
    this.RD.onclick = () => {
      this.destroy();
      this.render(data, callback2);
      callback2();
    }
  }
  render(data?: () => TExtandData, callback2?: () => void) {
    const smt: TExtandData = data();
    this.home.textContent = 'Home';
    this.containerHeader.textContent = 'GameArtistPage';
    this.container.appendChild(this.containerHeader);
    this.container.appendChild(this.home);
    this.categories.textContent = 'Categories';
    this.container.appendChild(this.categories);
    this.LU.textContent = smt.author;
    this.RU.textContent = smt.wrongAuthor1;
    this.LD.textContent = smt.wrongAuthor2;
    this.RD.textContent = smt.wrongAuthor3;
    this.image.setAttribute('alt', `./img/img/${smt.imageNum}.webp`);
    this.image.setAttribute('src', `./img/img/${smt.imageNum}.webp`);
    // this.gameField.setAttribute('style', 'width:300px; height:300px; border: 1px solid red')
    this.gameField.appendChild(this.image);
    this.gameField.appendChild(this.LU);
    this.gameField.appendChild(this.RU);
    this.gameField.appendChild(this.LD);
    this.gameField.appendChild(this.RD);

    this.container.appendChild(this.gameField);
    document.body.appendChild(this.container);
    this.onEvent(callback2, data);
  }
  destroy() {
    document.body.removeChild(this.container);
  }

}