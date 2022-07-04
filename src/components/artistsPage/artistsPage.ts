import { IMainPage } from '../MainPage/MainPage';
import { ArtistsCard } from './ArtistsCard';
import { GameArtistPage } from '../GamePage/GameArtistPage';

export interface IArtistsPage {
  onEvent: () => void;
  render: () => void;
  destroy: () => void;
}

export class ArtistsPage {

  container: HTMLDivElement;
  categories: HTMLDivElement;
  wrapper: HTMLDivElement;
  header: HTMLElement;
  wrapper_home: HTMLElement;
  wrapper_categories: HTMLElement;
  wrapper_score: HTMLElement;
  main_logo: HTMLElement;
  burg_set: HTMLElement;
  footer: HTMLElement;
  home: HTMLDivElement;
  settings: HTMLButtonElement;
  mainPage: IMainPage;
  onSettingsPage: () => void;
  onHome: () => void;
  artistsCard: ArtistsCard;
  gameArtistPage: GameArtistPage;

  constructor(mainPage: IMainPage) {
    this.settings = document.createElement('button');
    this.container = document.createElement('div');
    this.footer = document.createElement('footer');
    this.wrapper = document.createElement('div');
    this.wrapper_home = document.createElement('div');
    this.wrapper_categories = document.createElement('div');
    this.wrapper_score = document.createElement('div');
    this.header = document.createElement('header');
    this.main_logo = document.createElement('div');
    this.burg_set = document.createElement('div');
    this.categories = document.createElement('div');
    this.home = document.createElement('div');
    this.mainPage = mainPage;
  }
  onEvent() {
    this.settings.onclick = () => {
      this.destroy();
      this.onSettingsPage();
    };
    this.home.onclick = () => {
      this.destroy();
      this.onHome();
    };
    this.wrapper_home.onclick = () => {
      this.destroy();
      this.onHome();
    };
  }
  render() {
    this.container.className = 'page-categories';

    this.container.appendChild(this.header);
    this.home.className = 'main-logo';
    this.header.appendChild(this.home);
    this.settings.className = 'burg-set';
    this.header.appendChild(this.settings);

    this.footer.appendChild(this.wrapper);
    this.wrapper.className = 'wrapper';
    this.wrapper_home.className = 'wrapper__home';
    this.wrapper_categories.className = 'wrapper__categories';
    this.wrapper_score.className = 'wrapper__score';
    this.wrapper.appendChild(this.wrapper_home);
    this.wrapper.appendChild(this.wrapper_categories);
    this.wrapper.appendChild(this.wrapper_score);
    this.container.appendChild(this.categories);

    this.container.appendChild(this.footer);
    document.body.appendChild(this.container);
    this.onEvent();
    return this.categories;
  }
  
  destroy() {
    this.categories.innerHTML = null;
    this.container.remove();
  }

}