import { Gegenstand } from './gegenstand';

export class Aktie extends Gegenstand {
  constructor(
    id: number,
    wert: number,
    public unternehmensname: string,
    public nennwert: number
  ) {
    super(id, wert);
  }

  toString(): string {
    let text: string = '\n\nAktie:';
    text += super.toString();
    text += '\nNennwert: ' + this.nennwert;
    text += '\nUnternehmensname: ' + this.unternehmensname;
    return text;
  }
}
