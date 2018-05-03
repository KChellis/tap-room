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
  filter: string = '';

  onChange (input) {
    this.filter = input;
  }

  pintCount(input) {
    if (input[1] === 'pint') {
      input[0].pints -= 1;
    }else if (input[1] === 'grwl32') {
      input[0].pints -= 2;
    }else if (input[1] === 'grwl64') {
      input[0].pints -= 4;
    }
    if (input[0].pints <= 10) {
      input[0].level="empty";
    }else if (input[0].pints <= 62) {
      input[0].level="half";
    }else {
      input[0].level="full";
    }
    input[0].percent = Math.round((input[0].pints/124)*100) + '%';
  }

  refillKeg(keg) {
    keg.pints = 124;
    keg.percent = Math.round((keg.pints/124)*100) + '%';
    keg.level='full';
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
