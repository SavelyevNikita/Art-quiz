import { SettingsPage, ISettingsPage } from './SettingsPage/SettingsPage';
import { ArtistsPage, IArtistsPage } from './ArtistsPage/ArtistsPage';
import { PicturePage, IPicturePage } from './PicturePage/PicturePage';
import { MainPage } from './MainPage/MainPage';
import { ModelData } from './Model';
import data from '../js/images';
import { ArtistsCard } from './ArtistsPage/ArtistsCard';
import { GameArtistPage } from './GamePage/GameArtistPage';


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
    modelData: ModelData;
    artistsCard: ArtistsCard;
    gameArtistPage: GameArtistPage;

    constructor() {
        this.mainPage = new MainPage();
        this.settingsPage = new SettingsPage(this.mainPage);
        this.artistsPage = new ArtistsPage(this.mainPage);
        this.picturePage = new PicturePage(this.mainPage);
        this.modelData = new ModelData(data);
        this.gameArtistPage = new GameArtistPage();
        
        this.mainPage.onSettingsPage =  () => {
            this.settingsPage.render();
        };
        this.mainPage.onArtistQuiz = async () => {
            const tag = await this.artistsPage.render();
            this.modelData.namesOfArtistGame.forEach((item, index) => {
                this.artistsCard = new ArtistsCard(tag, item.gameName, `./img/menu-images/${index + 1}.png`, item.scoreOfGame);
                this.artistsCard.render();
                this.artistsCard.onDestroy = () => {
                    this.artistsPage.destroy();
                };
                this.artistsCard.onGameArtistPage = () => {
                    this.gameArtistPage.render(this.modelData.getExtandData.bind(this.modelData));
                };
                this.gameArtistPage.onMainPage = () => {
                    this.mainPage.render();
                }
                this.gameArtistPage.onLU = () => {
                    console.log('this.gameArtistPage.onLU');
                }
                this.gameArtistPage.onRU = () => {
                    console.log('this.gameArtistPage.onRU');
                }
                this.gameArtistPage.onLD = () => {
                    console.log('this.gameArtistPage.onLD');
                }
                this.gameArtistPage.onRD = () => {
                    console.log('this.gameArtistPage.onRD');
                }
              });

        };
        this.mainPage.onPictureQuiz = () => {
            this.picturePage.render();
        };
        this.artistsPage.onHome = () => {
            this.mainPage.render();
        };
        this.picturePage.onHome = () => {
            this.mainPage.render();
        };
        
    }
    start() {
        this.mainPage.render();
    }
}