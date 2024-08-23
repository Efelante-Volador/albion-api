import { Component } from '@angular/core';
import { ItemsComponent } from '../../components/items/items.component';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ItemsComponent],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {

}
