import { Component, Input } from '@angular/core';
import { Vehicle } from './vehicle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.scss'
})
export class VehicleComponent {
  @Input() vehicle !: Vehicle;
}
