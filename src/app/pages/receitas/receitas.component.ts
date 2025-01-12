import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-receitas', // Selector atualizado para refletir o nome correto
  standalone: true, // Declaração standalone do componente
  imports: [CommonModule], // Importa CommonModule para habilitar *ngFor e *ngIf
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent {
  // Lista de receitas
  receitas = [
    {
      id: 1,
      nome: 'Anchova Assada no Forno',
      imagem: 'assets/anchova assada.png',
      ingredientes: [
        '1 anchova inteira limpa (aproximadamente 1,5 kg)',
        '2 dentes de alho picados',
        '1 limão (suco e raspas)',
        '2 colheres de sopa de azeite de oliva',
        '1 colher de chá de sal',
        '1/2 colher de chá de pimenta-do-reino',
        'Ramos de alecrim e tomilho a gosto',
        'Legumes variados (batatas, cenouras, abobrinha) para acompanhar'
      ],
      modoFazer: [
        'Preaqueça o forno a 200°C.',
        'Misture os temperos e tempere a anchova.',
        'Coloque na assadeira com os legumes e asse por 30-40 minutos.',
        'Sirva quente com os legumes assados.'
      ]
    },
    {
      id: 2,
      nome: 'Bagre Assado com Ervas',
      imagem: 'assets/bagre assado.png',
      ingredientes: [
        '1 bagre inteiro limpo (aproximadamente 1,2 kg)',
        '3 dentes de alho picados',
        '1 limão (suco e raspas)',
        '2 colheres de sopa de manteiga derretida',
        '1 colher de chá de sal',
        '1/2 colher de chá de pimenta-do-reino',
        'Ramos de coentro e salsa a gosto',
        'Batatas e cebolas cortadas em rodelas para acompanhar'
      ],
      modoFazer: [
        'Preaqueça o forno a 180°C.',
        'Misture os temperos e pincele no bagre.',
        'Distribua batatas e cebolas ao redor, cubra e asse.',
        'Retire o papel e asse até dourar.'
      ]
    },
    {
      id: 3,
      nome: 'Camarão ao Alho e Óleo',
      imagem: 'assets/camarao alho oleo2.png',
      ingredientes: [
        '500g de camarões limpos',
        '3 dentes de alho picados',
        '4 colheres de sopa de azeite de oliva',
        '1 colher de sopa de manteiga',
        'Sal e pimenta-do-reino a gosto',
        'Salsinha picada para decorar',
        '1 limão para servir'
      ],
      modoFazer: [
        'Tempere os camarões com sal e pimenta.',
        'Refogue o alho no azeite e manteiga.',
        'Cozinhe os camarões rapidamente até ficarem rosados.',
        'Decore com salsinha e sirva com limão.'
      ]
    },
    {
      id: 4,
      nome: 'Cavalinha Assada com Alho e Limão',
      imagem: 'assets/cavalinha grelhada limao.png',
      ingredientes: [
        '4 filés de cavalinha',
        '2 dentes de alho picados',
        '2 limões (suco e raspas)',
        '3 colheres de sopa de azeite de oliva',
        '1 colher de chá de sal',
        '1/2 colher de chá de pimenta-do-reino',
        'Ramos de salsa para decorar'
      ],
      modoFazer: [
        'Preaqueça o forno a 200°C.',
        'Tempere os filés com alho, limão, azeite, sal e pimenta.',
        'Asse por 15-20 minutos até dourar.',
        'Decore com salsa e sirva quente.'
      ]
    },
    {
      id: 5,
      nome: 'Peixe-Espada Grelhado com Ervas e Limão',
      imagem: 'assets/peixeespadagrelhado.png',
      ingredientes: [
        '4 filés de peixe-espada',
        '3 colheres de sopa de azeite de oliva',
        '2 dentes de alho picados',
        '1 limão (suco e raspas)',
        '1 colher de sopa de salsa picada',
        '1 colher de chá de sal',
        '1/2 colher de chá de pimenta-do-reino'
      ],
      modoFazer: [
        'Tempere os filés com azeite, alho, limão, sal e pimenta.',
        'Aqueça uma grelha ou frigideira em fogo alto.',
        'Grelhe os filés por 3-4 minutos de cada lado.',
        'Salpique salsa e sirva imediatamente.'
      ]
    }
  ];

  // Receita selecionada
  receitaSelecionada: any = null;

  /**
   * Exibir os detalhes da receita clicada.
   * @param receita - Receita selecionada pelo usuário.
   */
  exibirDetalhes(receita: any) {
    this.receitaSelecionada = receita;
  }

  /**
   * Voltar para a lista de receitas.
   */
  voltar() {
    this.receitaSelecionada = null;
  }
}
