import { SettingsPage, ISettingsPage} from '../settingsPage/settingsPage';
import { ArtistsPage, IArtistsPage } from '../artistsPage/artistsPage';
import { PicturePage, IPicturePage } from '../picturePage/picturePage';

export interface IMainPage {
  onEvent: () => void;
  render: () => void;
  destroy: () => void;
}

export class MainPage {

  container: HTMLElement;
  containerHeader: HTMLParagraphElement;
  settings: HTMLButtonElement;
  artistQuiz: HTMLButtonElement;
  pictureQuiz: HTMLButtonElement;
  settingsPage: ISettingsPage;
  artistsPage: IArtistsPage;
  picturePage: IPicturePage;

  constructor() {
    this.container = document.createElement('div');
    this.containerHeader = document.createElement('p');
    this.settings = document.createElement('button');
    this.artistQuiz = document.createElement('button');
    this.pictureQuiz = document.createElement('button');
    this.settingsPage = new SettingsPage(this);
    this.artistsPage = new ArtistsPage(this);
    this.picturePage = new PicturePage(this);
  }
  onEvent() {
    this.settings.onclick = () => {
      this.destroy();
      this.settingsPage.render();
    };
    this.artistQuiz.onclick = () => {
      this.destroy();
      this.artistsPage.render();

    };
    this.pictureQuiz.onclick = () => {
      this.destroy();
      this.picturePage.render();
    };

  }
  render() {
    this.settings.textContent = 'settings';
    this.containerHeader.textContent = 'MainPage';
    this.artistQuiz.textContent = 'artistQuiz';
    this.pictureQuiz.textContent = 'pictureQuiz';
    this.container.appendChild(this.containerHeader);
    this.container.appendChild(this.artistQuiz);
    this.container.appendChild(this.pictureQuiz);
    this.container.appendChild(this.settings);
    document.body.appendChild(this.container);
    this.onEvent();
  }
  destroy() {
    document.body.removeChild(this.container);
  }

}