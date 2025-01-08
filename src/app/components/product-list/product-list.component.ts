// product-list.component.ts
// Define o componente ProductListComponent para exibir a lista de produtos
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list', // Nome do seletor para uso no HTML
  templateUrl: './product-list.component.html', // Referência ao arquivo HTML
  styleUrls: ['./product-list.component.css'] // Referência ao arquivo CSS
})
export class ProductListComponent {
  // Nenhuma lógica adicional neste componente
  // Os produtos são diretamente definidos no HTML
}
