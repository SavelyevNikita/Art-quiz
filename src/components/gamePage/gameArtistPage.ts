import {MainPage, IMainPage} from '../mainPage/mainPage'
import {ArtistsPage, IArtistsPage} from '../artistsPage/artistsPage'

export interface IGameArtistPage{
  onEvent:()=>void;
  render:()=>void;
  destroy:()=>void;
}

export class GameArtistPage {
  
  container: HTMLElement;
  gameField: HTMLElement;
  home: HTMLButtonElement;
  categories: HTMLButtonElement;
  mainPage:IMainPage;
  artistsPage:IArtistsPage;

  constructor() {
    this.container=document.createElement('div');
    this.gameField = document.createElement('div');
    this.home = document.createElement('button');
    this.categories = document.createElement('button');
  }
  onEvent(){
    this.home.onclick=()=>{
      console.log('this.home.onclick=()=>{');
      this.destroy();
      this.mainPage = new MainPage();
      this.mainPage.render();
    };
    this.categories.onclick=()=>{
      console.log('this.categories.onclick=()=>{');
      this.destroy();
      this.artistsPage = new ArtistsPage();
      this.artistsPage.render();
    };
  }
  render(){
    this.home.textContent='Home';
    this.container.appendChild(this.home);
    this.categories.textContent='Categories';
    this.container.appendChild(this.categories);
    document.body.appendChild(this.container);
    this.onEvent();
  }
  destroy(){
    document.body.removeChild(this.container);
  }

}