import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './models/keg.model';

@Pipe({
  name: "alcohol",
  pure: false
})

export class AlcoholPipe implements PipeTransform {
  transform(input: Keg[], filter) {
    console.log(filter);
    if(filter) {
      input.sort(function(a,b) {return (a[filter] > b[filter]) ? 1 : ((b[filter] > a[filter]) ? -1 : 0);} );
    }

    return input;
  }
}
