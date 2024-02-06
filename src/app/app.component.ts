import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VehicleContainerComponent } from './vehicle-container/vehicle-container.component';
import { Vehicle } from './vehicle/vehicle';
import { VehicleComponent } from './vehicle/vehicle.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VehicleContainerComponent, VehicleComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  vehicleList: Vehicle[] = [
    {
      brand: "Toyota",
      model: "Black Box",
      year: 2018,
      price: 50000000,
      image: "https://upload.wikimedia.org/wikipedia/commons/0/06/2014_Toyota_Corolla_1.8_LE_(ZRE172),_front_left.jpg"
    },
    
    {
      brand: "Chevrolet",
      model: "Gray Phone",
      year: 2020,
      price: 100000000,
      image: "https://blog.usadosrentingcolombia.com/hs-fs/hubfs/Chevrolet%20NPR%20Turbo.png?width=697&name=Chevrolet%20NPR%20Turbo.png"
    }
  ]

}
