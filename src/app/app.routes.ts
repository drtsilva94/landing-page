import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

// Definição das rotas da aplicação
export const routes: Routes = [
  { path: '', component: HomeComponent },       // Página inicial
  { path: 'products', component: ProductsComponent }, // Produtos
  { path: 'about', component: AboutComponent },     // Sobre
  { path: 'contact', component: ContactComponent }, // Contato
  { path: '**', redirectTo: '' } // Redireciona para a página inicial se a rota não existir
];
