export type TModeldata = {
  author: string;
  name: string;
  year: string;
  imageNum: string;
}

export interface IModelData {
  getData: () => TModeldata;
  increaseSmt: () => void;
  currentData: TModeldata;
  nameOfGame: string[];
}

export class ModelData {
  data: Array<TModeldata>;
  count: number;
  currentData: TModeldata;
  nameOfGame: string[];

  constructor(data: Array<TModeldata>, count: number) {
    this.data = data;
    this.count = count;
    this.currentData = this.data[0];
    // this.nameOfGame = ['Portrait', 'Landscape', 'Still life', 'Graphich', 'Antique', 'Avant-Garde', 'Renaissance', 'Surrealism', 'Kitsch', 'Minimalism', 'Avangard', 'Industrial'];
    this.nameOfGame = ['Portrait', 'Landscape', 'Still life', 'Graphich', 'Antique', 'Avant-Garde'];

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