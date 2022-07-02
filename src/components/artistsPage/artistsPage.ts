import {  IMainPage } from '../MainPage/MainPage';
import { SettingsPage, ISettingsPage} from '../SettingsPage/SettingsPage';
import { ArtistsCard } from './ArtistsCard';
import { ModelData, IModelData } from '../Model';
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
  // score: HTMLDivElement;
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
  // button: HTMLButtonElement;
  mainPage: IMainPage;
  modelData: IModelData;
  settingsPage: ISettingsPage;
  onSettingsPage: () => void;
  onHome: () => void;

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
    this.containerHeader = document.createElement('p');
    this.categories = document.createElement('div');
    this.home = document.createElement('div');
    this.settingsPage = new SettingsPage(this);
    this.modelData = new ModelData(data);
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
    this.containerHeader.textContent = 'ArtistsPage';
    this.container.className = 'page-categories';
    this.renderArtGame();
    this.container.appendChild(this.containerHeader);

    this.container.appendChild(this.header);
    this.home.setAttribute('class', 'main-logo');
    this.header.appendChild(this.home);
    this.settings.setAttribute('class', 'burg-set');
    this.header.appendChild(this.settings);

    this.footer.appendChild(this.wrapper);
    this.wrapper.setAttribute('class', 'wrapper');
    this.wrapper_home.setAttribute('class', 'wrapper__home');
    this.wrapper_categories.setAttribute('class', 'wrapper__categories');
    this.wrapper_score.setAttribute('class', 'wrapper__score');
    this.wrapper.appendChild(this.wrapper_home);
    this.wrapper.appendChild(this.wrapper_categories);
    this.wrapper.appendChild(this.wrapper_score);
    this.container.appendChild(this.categories);
    
    this.container.appendChild(this.footer);
    document.body.appendChild(this.container);
    this.onEvent();
  }
  renderArtGame() {
    this.modelData.namesOfGame.forEach((item,index)=>{
      const artistsCard = new ArtistsCard(this.categories, item.gameName, `./img/menu-images/${index + 1}.png`, item.scoreOfGame);
      artistsCard.render(this.destroy.bind(this), this.modelData.increaseSmt.bind(this.modelData), this.modelData.getExtandData.bind(this.modelData));
    });     
  }
  destroy() {
    this.categories.innerHTML = '';
    this.container.remove();
  }

}