export class Keg {
  pints: number = 124;
  percent: string = Math.round((this.pints/124)*100) + '%';
  level: string = "full";
  constructor(public name: string, public brand: string,public type: string, public abv: number, public ibu: number, public price: number[], public color: string) {}
}
