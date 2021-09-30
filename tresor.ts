import { Gegenstand } from './gegenstand';
import { GegenstandNichtGefundenError } from './gegenstandNichtGefundenError';

export class Tresor {
  /**
   * Typ ArrayList (vgl. Java) nicht vorhanden --> Array verwenden!
   */
  private gegenstaende: Gegenstand[];

  constructor() {
    this.gegenstaende = new Array();
  }

  //todo Gegenstand hinzufügen (addGegenstand)
  addGegenstand(gegenstand: Gegenstand): void {
    this.gegenstaende.push(gegenstand);
  }

  //todo Gegenstand finden (getGegenstand)
  getGegenstand(id: number): Gegenstand {
    let gefundenergegenstand: Gegenstand;
    this.gegenstaende.forEach((element) => {
      if (element.id === id) {
        gefundenergegenstand = element;
      }
    });
    if (gefundenergegenstand === undefined) {
      throw new GegenstandNichtGefundenError(id);
    } else {
      return gefundenergegenstand;
    }
  }

  getGegenstand_v1(id: number): Gegenstand {
    let gefundenerGegenstand: Gegenstand;
    for (let i: number = 0; i < this.gegenstaende.length; i++) {
      if (this.gegenstaende[i].id === id) {
        gefundenerGegenstand = this.gegenstaende[i];
      }
    }
    if (gefundenerGegenstand === undefined) {
      throw new GegenstandNichtGefundenError(id);
    } else {
      return gefundenerGegenstand;
    }
  }

  getGegenstand_v2(id: number): Gegenstand {
    for (let g of this.gegenstaende) {
      if (g.id === id) {
        return g;
      }
    }
    throw new GegenstandNichtGefundenError(id);
  }

  getGegenstand_v3(id: number): Gegenstand {
    let gefundenerGegenstand = this.gegenstaende.find(
      (gegenstand) => gegenstand.id === id
    );
    if (gefundenerGegenstand === undefined) {
      throw new GegenstandNichtGefundenError(id);
    } else {
      return gefundenerGegenstand;
    }
  }
  /**
   * Drei verschiedene Varianten des Durchsuchens des Arrays möglich:
   * a) forEach-Schleife --> in typescript 'for ... of'
   *    --> vgl. https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#forof-statements
   * b) for-Zählerschleife mit Iteration
   *    --> vergleichbar mit der Umsetzung in Java
   * c) Methode find() auf das Array anwenden
   *    --> vgl. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/find
   */

  //todo Gegenstand aus Tresor nehmen (removeGegenstand)
  removeGegenstand(gegenstand: Gegenstand): void {
    let removed: boolean = false;

    this.gegenstaende.forEach((g, i) => {
      if (gegenstand.id === g.id) {
        this.gegenstaende.splice(i, 1);
        removed = true;
      }
    });
    if (!removed) {
      throw new GegenstandNichtGefundenError(gegenstand.id);
    }
  }

  removeGegenstand_v1(gegenstand: Gegenstand): void {
    let gegendstandToRemove = this.gegenstaende.find((g) => g !== gegenstand);
    if (gegendstandToRemove !== gegenstand) {
      this.gegenstaende = this.gegenstaende.filter(g => g !== gegendstandToRemove)
    } else {
      throw new GegenstandNichtGefundenError(gegenstand.id);
    }
  }

  /**
   * 1. sinnvollerweise zunächst prüfen, ob der Gegenstand im Tresor ist
   *    (vgl. gewählte Variante für "Gegenstand finden", also für 'getGegenstand')
   * 2. wenn nicht gefunden, Fehler werfen (GegenstandNichtGefundenError), ebenfalls wie in 'getGegenstand'
   * 3. Methode filter() auf das Array anwenden, um dieses neu aufzubauen
   *    vgl. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   */

  berechneGesamtwert(): number {
    let summeWerte: number = 0;
    this.gegenstaende.forEach((gegenstand) => (summeWerte += gegenstand.wert));
    return summeWerte;
  }

  //todo toString
  toString(): string {
    let text: string = 'LISTE DER GEGENSTÄNDE';
    this.gegenstaende.forEach((gegenstand) => {
      text += gegenstand.toString();
    });
    return text;
  }
}
