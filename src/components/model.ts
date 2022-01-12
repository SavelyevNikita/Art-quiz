export type TModeldata = {
  author: string;
  name: string;
  year: string;
  imageNum: string;
}

type cardData = {
  gameName: string;
  scoreOfGame: number;
}

export interface IModelData {
  getData: () => TModeldata;
  increaseSmt: () => void;
  currentData: TModeldata;
  namesOfGame: cardData[];
}

export class ModelData {
  data: Array<TModeldata>;
  count: number;
  currentData: TModeldata;
  namesOfGame: cardData[];

  constructor(data: Array<TModeldata>, count: number) {
    this.data = data;
    this.count = count;
    this.currentData = this.data[0];
    // this.nameOfGame = ['Portrait', 'Landscape', 'Still life', 'Graphich', 'Antique', 'Avant-Garde', 'Renaissance', 'Surrealism', 'Kitsch', 'Minimalism', 'Avangard', 'Industrial'];
    this.namesOfGame = [{ gameName: 'Portrait', scoreOfGame: 0, },
    { gameName: 'Landscape', scoreOfGame: 0, },
    { gameName: 'Still life', scoreOfGame: 0, },
    { gameName: 'Graphich', scoreOfGame: 0, },
    { gameName: 'Antique', scoreOfGame: 0, },
    { gameName: 'Avant-Garde', scoreOfGame: 0, }];

  };

  getData() {
    // console.log(this.data[this.count]);
    this.currentData = this.data[this.count];
    console.log(this.currentData);
    return this.currentData;
  }
  increaseSmt() {
    // console.log(this.currentData);
    this.count += 1;
    console.log(this.count);
    this.getData();
  };
}