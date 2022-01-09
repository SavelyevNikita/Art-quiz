import {MainPage, IMainPage} from '../mainPage/mainPage'

export interface ISettingsPage{
  onEvent:()=>void;
  render:()=>void;
  destroy:()=>void;
}

export class SettingsPage {
  
  container: HTMLElement;
  containerHeader: HTMLParagraphElement;
  save: HTMLButtonElement;
  mainPage:IMainPage;

  constructor(mainPage:IMainPage) {
    this.mainPage = mainPage;
    this.container=document.createElement('div');
    this.containerHeader=document.createElement('p');
    this.save = document.createElement('button');
  }
  onEvent(){
    this.save.onclick=()=>{
      this.destroy();
      this.mainPage.render();
    };
  }
  render(){
    this.save.textContent='save';
    this.containerHeader.textContent='SettingsPage';
    this.container.appendChild(this.containerHeader);
    this.container.appendChild(this.save);
    this.onEvent();
    document.body.appendChild(this.container);
  }
  destroy(){
    document.body.removeChild(this.container);
  }
}