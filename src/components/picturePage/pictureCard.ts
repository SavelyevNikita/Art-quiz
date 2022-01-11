export class PictureCard{
  container: HTMLDivElement;
  wrapper: HTMLDivElement;
  headerCard: HTMLParagraphElement;
  header: string;
  imgPath: string;
  score: string;
  scoreCard: HTMLParagraphElement;
  imageCard: HTMLImageElement;
  constructor(wrapper: HTMLDivElement, header: string, imgPath: string = 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg', score: string) {
    this.wrapper = wrapper;
    this.header = header;
    this.imgPath = imgPath;
    this.score = score;
    this.container = document.createElement('div');
    this.container.setAttribute('style', 'display:flex; width:150px; height:150px; cursor:pointer');
    this.headerCard = document.createElement('p');
    this.scoreCard = document.createElement('p');
    this.imageCard = document.createElement('img');
    this.headerCard.textContent = this.header;
    this.scoreCard.textContent = this.score;
    this.imageCard.setAttribute('alt', imgPath);
    this.imageCard.setAttribute('src', imgPath);
    this.imageCard.setAttribute('style', 'width:100px; height:100px;');
  }
  onEvent() {
    this.container.onclick = () => {
      console.log(`this.container ${this.header}`);
    }
  }
  render() {
    this.container.appendChild(this.headerCard);
    this.container.appendChild(this.scoreCard);
    this.container.appendChild(this.imageCard);

    this.wrapper.appendChild(this.container);
    this.onEvent();
  }
  destroy() {
    this.container.remove();
  }
}