import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterKegList: Keg[] = [
    new Keg('Superfuzz', 'Elysian Brewing', 'Blood Orange Pale Ale', 6.4, 45, [5.00, 9.00, 18.00]),
    new Keg('Citrus Mistress', 'Hop Valley Brewing', 'IPA', 6.3, 80, [5.00, 9.00, 18.00]),
    new Keg('Black Butte Porter', 'Dechutes Brewing', 'Porter', 5.2, 30, [5.00, 9.00, 18.00]),
    new Keg('Cucumber Crush', '10 Barrel Brewing', 'Sour', 5, 4, [4.50, 8.50, 17.00]),
    new Keg('Pabst Blue Ribbon', 'Pabst Brewing', 'Piss', 4.7, 10, [3.00, 6.00, 12.00]),
    new Keg('Maid Marion', '2 Towns Ciderhouse', 'Marionberry Cider', 6, 0, [5.00, 9.00, 18.00]),
    new Keg('Willamette Valley Pinot Noir', 'Boedecker Cellars', 'Pinot Noir', 14, 0, [6.00, 11.00, 22.00])
  ]

    selectedKeg: Keg = null;
    operation: string;

    editKeg(input) {
      if (input[1] === 'delete') {
        let index = this.masterKegList.indexOf(input[0]);
        this.masterKegList.splice(index, 1);
        this.selectedKeg = null;
      }else if (input[1] === 'pint') {
        input[0].pints -= 1;
      }else if (input[1] === 'grwl32') {
        input[0].pints -= 2;
      }else if (input[1] === 'grwl64') {
        input[0].pints -= 4;
      }else {
        this.selectedKeg = input[0];
      }
      console.log(input[0].pints);
    }
    endEdit() {
      this.selectedKeg = null;
    }
    addKeg() {
      let keg: Keg = new Keg('New keg', '', '', null, null, []);
      this.selectedKeg = keg;
      this.masterKegList.push(keg);
    }
}
