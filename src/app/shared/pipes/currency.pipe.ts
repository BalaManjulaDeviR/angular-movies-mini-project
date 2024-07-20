import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat',
  standalone: true
})
export class CurrencyPipe implements PipeTransform {

  transform(value: string): string {
    return `$${value} million`;
  }

}
