import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { ReceitasPreviewComponent } from '../../components/receitas-preview/receitas-preview.component'; // Importa o componente

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductListComponent, ReceitasPreviewComponent], // Inclua aqui
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
