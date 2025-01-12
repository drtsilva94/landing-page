import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router'; // Importa RouterModule

@Component({
  selector: 'app-receitas-preview',
  standalone: true,
  imports: [CommonModule, RouterModule], // Inclui RouterModule nos imports
  templateUrl: './receitas-preview.component.html',
  styleUrls: ['./receitas-preview.component.css'],
})
export class ReceitasPreviewComponent {
  receitas = [
    {
      id: 1,
      nome: 'Anchova Assada no Forno',
      imagem: 'assets/anchova assada.png',
    },
    {
      id: 2,
      nome: 'Bagre Assado com Ervas',
      imagem: 'assets/bagre assado.png',
    },
    {
      id: 3,
      nome: 'Camarão ao Alho e Óleo',
      imagem: 'assets/camarao alho oleo2.png',
    },
    {
      id: 4,
      nome: 'Cavalinha Grelhada com Limão',
      imagem: 'assets/cavalinha grelhada limao.png',
    },
  ];

  constructor(private router: Router) {}

  irParaReceitas() {
    this.router.navigate(['/receitas']); // Redireciona para a página de receitas
  }
}
