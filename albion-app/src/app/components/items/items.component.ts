import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsService } from '../../service/items.service'; // Ajusta la ruta según la estructura de tu proyecto

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: any[] = [];

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    
  }
}
