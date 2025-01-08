import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component'; // Importa o BannerComponent
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-home',
  standalone: true, // Adiciona standalone
  imports: [BannerComponent,ProductListComponent], // Importa o componente Banner
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Corrige o nome para styleUrls
})
export class HomeComponent {}
