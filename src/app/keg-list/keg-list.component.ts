import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() addKeg = new EventEmitter();

  mode: string = 'patron';

  pintCount(keg) {
    if (keg.pints <= 10) {
      return 'empty';
    }else if (keg.pints <= 62) {
      return 'half';
    }else {
      return 'full';
    }
  }

  refillKeg(keg) {
    keg.pints = 124;
  }
  selectKeg(output) {
    this.clickSender.emit(output);
  }
  onClick() {
    this.addKeg.emit();
  }
  changeMode() {
    if(this.mode === 'patron') {
      this.mode = 'employee';
    }else {
      this.mode = 'patron';
    }
  }
}
