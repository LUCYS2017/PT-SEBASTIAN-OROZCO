import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VehicleContainerComponent } from './vehicle-container/vehicle-container.component';
import { Vehicle } from './vehicle/vehicle';
import { VehicleComponent } from './vehicle/vehicle.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FilterVehiclesPipe } from './filter-vehicles.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VehicleContainerComponent, VehicleComponent, CommonModule, ReactiveFormsModule, FilterVehiclesPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prueba-sebastian';
  formFilter;
  formFinaciamiento;
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

  constructor(private formBuilderFilter: FormBuilder, private formBuilderFinanciamiento: FormBuilder) {
    this.formFilter = formBuilderFilter.group({
      brand:<string> '',
      year: ""
    })
    this.formFinaciamiento = formBuilderFinanciamiento.group({
      name: "",
      CC: "",
      email: "",
      birth: "",
      amount: "",
      months: ""
    })
  }

  selectedCar: number = -1;
  selectCar(index: number) {
    this.selectedCar = index;
  }

  submitFinanciamiento() {
    const today = new Date()
    if (this.formFinaciamiento.value.birth) {
      const userDate = new Date(this.formFinaciamiento.value.birth)
      const year = userDate.getFullYear();
      let age = userDate.getFullYear() - today.getFullYear();
      age *= -1;
      if (userDate.getMonth() > today.getMonth()) {
        age--;
        if (userDate.getDay() > today.getDay()) {
          age--;
        }
      }
      if (age < 18) {
        alert("debes ser mayor de edad")
      }
      else {
        alert("Financiamiento exitoso")
        this.selectedCar = -1
      }
    }
  }

}
