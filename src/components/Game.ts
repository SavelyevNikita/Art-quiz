import { SettingsPage, ISettingsPage } from './SettingsPage/SettingsPage';
import { ArtistsPage, IArtistsPage } from './ArtistsPage/ArtistsPage';
import { PicturePage, IPicturePage } from './PicturePage/PicturePage';
import { MainPage } from './MainPage/MainPage';

export interface IMainPage {
    onEvent: () => void;
    render: () => void;
    destroy: () => void;
}

export class Game {
    mainPage: MainPage;
    settingsPage: SettingsPage;
    artistsPage: ArtistsPage;
    picturePage: PicturePage;

    constructor() {
        this.mainPage = new MainPage();
        this.settingsPage = new SettingsPage(this.mainPage);
        this.artistsPage = new ArtistsPage(this.mainPage);
        this.picturePage = new PicturePage(this.mainPage);
        this.mainPage.onSettingsPage =  () => {
            this.settingsPage.render();
        };
        this.mainPage.onArtistQuiz = () => {
            this.artistsPage.render();
        };
        this.mainPage.onPictureQuiz = () => {
            this.picturePage.render();
        };
        this.artistsPage.onHome = () => {
            this.mainPage.render();
        };
        this.picturePage.onHome = () => {
            this.mainPage.render();
        }
        
    }
    start() {
        this.mainPage.render();
    }
}