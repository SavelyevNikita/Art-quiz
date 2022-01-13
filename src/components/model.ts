export type TModeldata = {
  author: string;
  name: string;
  year: string;
  imageNum: string;
}

type TcardData = {
  gameName: string;
  scoreOfGame: number;
}
export type TExtandData = {
  author: string;
  name: string;
  year: string;
  imageNum: string;
  wrongAuthor1: string;
  wrongAuthor2: string;
  wrongAuthor3: string;

}

export interface IModelData {
  getData: () => TModeldata;
  increaseSmt: () => void;
  currentData: TModeldata;
  namesOfGame: TcardData[];
  getExtandData:()=> TExtandData;
}

export class ModelData {
  data: Array<TModeldata>;
  count: number;
  currentData: TModeldata;
  namesOfGame: TcardData[];
  extandData: TExtandData;
  rand: number;

  constructor(data: Array<TModeldata>) {
    this.data = data;
    this.count = 0;
    this.currentData = this.data[0];
    this.rand = Math.round(Math.random() * 230);
    this.extandData = { ...this.data[this.count], ...{ wrongAuthor1: this.data[this.rand].author, wrongAuthor2: this.data[this.rand+4].author, wrongAuthor3: this.data[this.rand+9].author } }
    this.namesOfGame = [{ gameName: 'Portrait', scoreOfGame: 0, },
    { gameName: 'Landscape', scoreOfGame: 0, },
    { gameName: 'Still life', scoreOfGame: 0, },
    { gameName: 'Graphich', scoreOfGame: 0, },
    { gameName: 'Antique', scoreOfGame: 0, },
    { gameName: 'Avant-Garde', scoreOfGame: 0, }];

  };
  getExtandData() {
    const rand = Math.round(Math.random() * 230);    
    return this.extandData = { ...this.data[this.count], ...{ wrongAuthor1: this.data[rand].author, wrongAuthor2: this.data[rand+5].author, wrongAuthor3: this.data[rand+10].author } }
  }
  getData() {
    this.currentData = this.data[this.count];
    return this.currentData;
  }
  increaseSmt() {
    this.count += 1;
    this.getData();
    this.getExtandData();
  };
}