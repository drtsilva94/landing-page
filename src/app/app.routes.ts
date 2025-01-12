import { Routes } from '@angular/router';

// Importa os componentes que serão usados nas rotas
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ReceitasComponent } from './pages/receitas/receitas.component';
import { ReceitasPreviewComponent } from './components/receitas-preview/receitas-preview.component';

// Define as rotas da aplicação
export const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota para a página inicial
  { path: 'products', component: ProductsComponent }, // Rota para a página de produtos
  { path: 'about', component: AboutComponent }, // Rota para a página "Sobre"
  { path: 'contact', component: ContactComponent }, // Rota para a página de contato
  { path: 'receitas', component: ReceitasComponent }, // Rota para a página de receitas
  { path: '**', redirectTo: '' } // Redireciona para a página inicial caso a rota não exista
];
