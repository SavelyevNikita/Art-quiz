
export interface IMainPage {
  onEvent: () => void;
  render: () => void;
  destroy: () => void;
}

export class MainPage {

  container: HTMLElement;
  header: HTMLElement;
  main: HTMLElement;
  footer: HTMLElement;
  wrapper: HTMLElement;
  rss_logo: HTMLElement;
  developer: HTMLElement;
  year: HTMLElement;
  main_logo: HTMLElement;
  wrap_menu: HTMLElement;
  Artist_quiz_w: HTMLElement;
  Picture_quiz_w: HTMLElement;

  containerHeader: HTMLParagraphElement;
  settings: HTMLButtonElement;
  artistQuiz: HTMLButtonElement;
  pictureQuiz: HTMLButtonElement;
  onSettingsPage: () => void;
  onArtistQuiz: () => void;
  onPictureQuiz: () => void;

  constructor() {
    this.header=document.createElement('header');
    
    this.main = document.createElement('main');

    this.footer = document.createElement('footer');  
    this.wrapper = document.createElement('div');
    this.rss_logo = document.createElement('div');
    this.developer = document.createElement('div');
    this.year = document.createElement('div');

    this.main_logo = document.createElement('div');
    this.wrap_menu = document.createElement('div');

    this.Artist_quiz_w=document.createElement('div');
    this.Picture_quiz_w=document.createElement('div');

    this.container = document.createElement('div');
    this.containerHeader = document.createElement('p');
    this.settings = document.createElement('button');
    this.artistQuiz = document.createElement('button');
    this.pictureQuiz = document.createElement('button');
  }
  onEvent() {
    this.settings.onclick = () => {
      this.destroy();
      this.onSettingsPage();
    };
    this.Artist_quiz_w.onclick = () => {
      this.destroy();
      this.onArtistQuiz();
    };
    this.Picture_quiz_w.onclick = () => {
      this.destroy();
      this.onPictureQuiz();
    };

  }
  render() {
    this.settings.textContent = 'settings';
    this.containerHeader.textContent = 'MainPage';
    this.artistQuiz.textContent = 'Artist quiz';
    this.pictureQuiz.textContent = 'Picture quiz';

    this.settings.className = 'burg-set';
    this.artistQuiz.setAttribute('id','Artist_quiz');
    this.pictureQuiz.setAttribute('id','Picture_quiz');

    this.header.appendChild(this.settings);
    this.main.className = 'menu';
    this.main.appendChild(this.main_logo);
    this.main.appendChild(this.wrap_menu);
    this.wrap_menu.appendChild(this.Artist_quiz_w);
    this.Artist_quiz_w.appendChild(this.artistQuiz);
    this.wrap_menu.appendChild(this.Picture_quiz_w);
    this.Picture_quiz_w.appendChild(this.pictureQuiz);
    this.Artist_quiz_w.appendChild(this.artistQuiz);

    this.main_logo.className = 'main-logo';
    this.wrap_menu.className = 'wrap-menu';
    this.Artist_quiz_w.className = 'wrap-button';
    this.Artist_quiz_w.setAttribute('id','Artist_quiz_w');
    this.Picture_quiz_w.className = 'wrap-button';
    this.Picture_quiz_w.setAttribute('id','Picture_quiz_w');    

    this.footer.appendChild(this.wrapper);
    this.wrapper.className = 'wrapper';
    this.wrapper.appendChild(this.rss_logo);
    this.rss_logo.setAttribute('class','rss-logo');
    this.wrapper.appendChild(this.developer);
    this.developer.textContent='App developer: Nikita Savelyev';
    this.developer.className = 'developer';
    this.year.className = 'year';
    this.year.textContent='2021';
    this.wrapper.appendChild(this.year);


    this.container.appendChild(this.header);
    this.container.appendChild(this.main);
    this.container.appendChild(this.footer);
    this.container.className = 'page-main';
    document.body.appendChild(this.container);
    this.onEvent();
  }
  destroy() {
    document.body.removeChild(this.container);
  }

}

