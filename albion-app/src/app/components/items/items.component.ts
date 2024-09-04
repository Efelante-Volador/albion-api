import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { ItemsService } from '../../service/items.service'; // Ajusta la ruta según la estructura de tu proyecto

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, FormsModule], // Agrega FormsModule aquí
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: any[] = [];
  selectedItem: any; // Variable para almacenar el ítem seleccionado

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService.getItems().subscribe(
      (data) => this.items = data, // Asigna los datos obtenidos al array `items`
      (error) => console.error('Error al obtener tareas', error) // Manejo de errores
    );
  }
}
