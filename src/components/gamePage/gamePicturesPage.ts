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
  question: HTMLElement;
  containerHeader: HTMLParagraphElement;
  gameField: HTMLElement;
  home: HTMLButtonElement;
  categories: HTMLButtonElement;
  mainPage: IMainPage;
  artistsPage: IArtistsPage;
  image: HTMLImageElement;
  imageWrapper: HTMLElement;
  LU: HTMLButtonElement;
  RU: HTMLButtonElement;
  LD: HTMLButtonElement;
  RD: HTMLButtonElement;
  button_wrapper: HTMLElement;
  footer: HTMLElement;
  wrapper: HTMLElement;
  rss_logo: HTMLElement;
  developer: HTMLElement;
  year: HTMLElement;

  header: HTMLElement;
  progressSets: HTMLElement;
  progressCross: HTMLElement;
  progressBar: HTMLElement;
  progressTime: HTMLElement;

  constructor() {
    this.header = document.createElement('header');
    this.progressSets = document.createElement('div');
    this.progressCross = document.createElement('div');
    this.progressBar = document.createElement('div');
    this.progressTime = document.createElement('div');

    this.footer = document.createElement('footer');
    this.wrapper = document.createElement('div');
    this.rss_logo = document.createElement('div');
    this.developer = document.createElement('div');
    this.year = document.createElement('div');

    this.container = document.createElement('main');
    this.question = document.createElement('div');
    this.containerHeader = document.createElement('p');
    this.gameField = document.createElement('div');
    this.image = document.createElement('img');
    this.button_wrapper = document.createElement('div');
    this.LU = document.createElement('button');
    this.RU = document.createElement('button');
    this.LD = document.createElement('button');
    this.RD = document.createElement('button');
    this.home = document.createElement('button');
    this.categories = document.createElement('button');
    this.artistsPage = new ArtistsPage(this);
    this.mainPage = new MainPage();
  }
  onEvent(data?: () => TExtandData, callback2?: () => void) {
    this.progressCross.onclick = () => {
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
    const dataForCard: TExtandData = data();
    this.home.textContent = 'Home';
    this.containerHeader.textContent = 'GameArtistPage';
    this.categories.textContent = 'Categories';
    this.question.textContent = 'КТО АВТОР ДАННОЙ КАРТИНЫ?';
    this.question.setAttribute('class', 'question');
    this.LU.textContent = dataForCard.author;
    this.RU.textContent = dataForCard.wrongAuthor1;
    this.LD.textContent = dataForCard.wrongAuthor2;
    this.RD.textContent = dataForCard.wrongAuthor3;
    this.image.setAttribute('alt', `./img/img/${dataForCard.imageNum}.webp`);
    this.image.setAttribute('src', `./img/img/${dataForCard.imageNum}.webp`);
    this.image.setAttribute('class', 'main-image');
    this.button_wrapper.appendChild(this.LU);
    this.button_wrapper.appendChild(this.RU);
    this.button_wrapper.appendChild(this.LD);
    this.button_wrapper.appendChild(this.RD);
    this.button_wrapper.appendChild(this.RD);
    this.button_wrapper.setAttribute('class', 'button_wrapper');

    this.progressSets.setAttribute('class', 'progress-sets');
    this.progressCross.setAttribute('class', 'progress-cross');
    this.progressBar.setAttribute('class', 'progress-bar');
    this.progressTime.setAttribute('class', 'progress-time');
    this.progressTime.textContent = '3:49';
    this.progressSets.appendChild(this.progressCross);
    this.progressSets.appendChild(this.progressBar);
    this.progressSets.appendChild(this.progressTime);
    this.header.appendChild(this.progressSets);


    this.footer.appendChild(this.wrapper);
    this.wrapper.setAttribute('class', 'wrapper');
    this.rss_logo.setAttribute('class', 'rss-logo');
    this.developer.setAttribute('class', 'developer');
    this.year.setAttribute('class', 'year');
    this.wrapper.appendChild(this.rss_logo);
    this.wrapper.appendChild(this.developer);
    this.developer.textContent = 'App developer: Nikita Savelyev';
    this.wrapper.appendChild(this.year);
    this.year.textContent = '2021';

    this.container.appendChild(this.header);
    this.container.appendChild(this.question);
    this.container.appendChild(this.image);
    this.container.appendChild(this.button_wrapper);
    this.container.setAttribute('class', 'artists-quiz');
    this.container.appendChild(this.footer);
    document.body.appendChild(this.container);
    this.onEvent(data, callback2);
  }
  destroy() {
    document.body.removeChild(this.container);
  }

}