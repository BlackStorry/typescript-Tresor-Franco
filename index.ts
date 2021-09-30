// Import stylesheets
import './style.css';
import { Aktie } from './aktie';
import { Schmuck } from './schmuck';
import { Tresor } from './tresor';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Für Ausgabe der Tresor-Typescript-App die Konsole öffnen!</h1>`;

var t1: Tresor = new Tresor();
var a1: Aktie = new Aktie(1, 97.88, 'BASF', 50.0);
var a2: Aktie = new Aktie(2, 70.67, 'Franco GmbH & Co. KG', 67.9);
var s1: Schmuck = new Schmuck(3, 105.89, 'Kette');

//todo: Ergänzungen lt. Aufgabenstellung

/**
 * Beispiel für try-catch mit dem Werfen des Errors
 */
try {
  t1.addGegenstand(a1);
  t1.addGegenstand(a2);
  t1.addGegenstand(s1);
  console.log(t1.toString());
  console.log(t1.berechneGesamtwert());
  t1.removeGegenstand(a2);
  console.log(t1.toString());
  console.log(t1.getGegenstand_v2(1).toString());
  console.log(t1.berechneGesamtwert());
} catch (error) {
  console.log(error.name + ':\t' + error.message);
}
