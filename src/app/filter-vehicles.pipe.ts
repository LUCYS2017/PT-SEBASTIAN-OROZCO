import { Pipe, PipeTransform } from '@angular/core';
import { Vehicle } from './vehicle/vehicle';

@Pipe({
  name: 'filterVehicles',
  standalone: true
})
export class FilterVehiclesPipe implements PipeTransform {

  transform(items: Vehicle[], brand: string | undefined | null): any {
    console.log(brand);
    
    if (!items || !brand) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => item.brand.includes(brand));
  }

}
