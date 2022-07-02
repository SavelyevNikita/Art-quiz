import { IGameArtistPage, GameArtistPage } from '../GamePage/GameArtistPage';
import { TExtandData } from '../Model';

export class ArtistsCard {
  container: HTMLDivElement;
  wrapper: HTMLDivElement;
  headerCard: HTMLParagraphElement;
  header: string;
  imgPath: string;
  score: number;
  scoreCard: HTMLParagraphElement;
  imageCard: HTMLDivElement;
  gameArtistPage: IGameArtistPage;

  constructor(wrapper: HTMLDivElement, header: string, imgPath: string = 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg', score: number) {
    this.wrapper = wrapper;
    this.header = header;
    this.imgPath = imgPath;
    this.score = score;
    this.container = document.createElement('div');
    this.headerCard = document.createElement('p');
    this.scoreCard = document.createElement('p');
    this.imageCard = document.createElement('div');
    this.headerCard.textContent = this.header;
    this.scoreCard.textContent = this.score.toString();
    this.gameArtistPage = new GameArtistPage();

  }
  onEvent(destroyArtGame: () => void, increaseCounter?: () => void, data?: () => TExtandData) {
    this.container.onclick = () => {
      destroyArtGame();
      this.gameArtistPage.render(data, increaseCounter);
    }
  }
  render(destroyArtGame: () => void, increaseCounter?: () => void, data?: () => TExtandData) {
    this.headerCard.setAttribute('style', 'font-family: Gilroy; font-style: normal; font-weight: 500; font-size: 16px; line-height: 18px; letter-spacing: -0.5px;color: #FFFFFF;')
    this.scoreCard.setAttribute('style', 'font-family: Gilroy; font-style: normal; font-weight: 500; font-size: 16px; line-height: 18px; letter-spacing: -0.5px;color: #FFFFFF;')
    this.container.setAttribute('style', 'width:155px; height:200px; cursor:pointer;');
    this.imageCard.setAttribute('style', `background: url("${this.imgPath}") 0 0/cover  no-repeat; width:100%; height:100%; display:flex; justify-content: space-around;`);
    this.imageCard.appendChild(this.headerCard);
    this.imageCard.appendChild(this.scoreCard);
    this.container.appendChild(this.imageCard);
    this.wrapper.setAttribute('style', 'width:340px; height:100%; display:flex; flex-wrap: wrap; justify-content: space-between;');
    this.wrapper.appendChild(this.container);
    this.onEvent(destroyArtGame, increaseCounter, data);
  }
}