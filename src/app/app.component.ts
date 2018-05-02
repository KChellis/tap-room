import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterKegList: Keg[] = [
    new Keg('Superfuzz', 'Elysian Brewing', 'Blood Orange Pale Ale', 6.4, 45, 5.00),
    new Keg('Citrus Mistress', 'Hop Valley Brewing', 'IPA', 6.3, 80, 5.00),
    new Keg('Black Butte Porter', 'Dechutes Brewing', 'Porter', 5.2, 30, 5.00),
    new Keg('Cucumber Crush', '10 Barrel Brewing', 'Sour', 5, 4, 4.50),
    new Keg('Pabst Blue Ribbon', 'Pabst Brewing', 'Piss', 4.7, 10, 3.00),
    new Keg('Maid Marion', '2 Towns Ciderhouse', 'Marionberry Cider', 6, 0, 5.00),
    new Keg('Willamette Valley Pinot Noir', 'Boedecker Cellars', 'Pinot Noir', 14, 0, 6.00)
  ]

    selectedKeg: Keg = null;
    operation: string;

    editKeg(input) {
      if (input[1] === 'delete') {
        let index = this.masterKegList.indexOf(input[0]);
        this.masterKegList.splice(index, 1);
      }else {
        this.selectedKeg = input[0];
      }
    }
}
