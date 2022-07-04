export class PictureCard{
  container: HTMLDivElement;
  wrapper: HTMLDivElement;
  headerCard: HTMLParagraphElement;
  header: string;
  imgPath: string;
  score: string;
  scoreCard: HTMLParagraphElement;
  imageCard: HTMLDivElement;
  constructor(wrapper: HTMLDivElement, header: string, imgPath: string = 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg', score: string) {
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
  }
  onEvent() {
    this.container.onclick = () => {
      console.log(`this.container ${this.header}`);
    }
  }
  render() {
    this.headerCard.className = 'card-header';
    this.scoreCard.className = 'card-score';
    this.container.className = 'card-container';
    this.imageCard.className = 'card-image';
    this.imageCard.style.background = `url("${this.imgPath}") 0 0/cover  no-repeat`;

    this.imageCard.appendChild(this.headerCard);
    this.imageCard.appendChild(this.scoreCard);
    this.container.appendChild(this.imageCard);
    this.wrapper.className = 'card-wrapper';
    this.wrapper.appendChild(this.container);
    this.wrapper.appendChild(this.container);
    this.onEvent();
  }
}