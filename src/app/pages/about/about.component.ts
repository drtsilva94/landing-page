import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  ngOnInit() {
    const images = document.querySelectorAll('.banner-image') as NodeListOf<HTMLImageElement>;
    const prevBtn = document.querySelector('.prev-btn') as HTMLButtonElement;
    const nextBtn = document.querySelector('.next-btn') as HTMLButtonElement;
    let currentIndex = 0;

    // Função para exibir imagem ativa
    function showImage(index: number) {
      images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
          img.classList.add('active');
        }
      });
    }

    // Botão anterior
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
      showImage(currentIndex);
    });

    // Botão próximo
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
      showImage(currentIndex);
    });

    // Inicializa a primeira imagem
    showImage(currentIndex);
  }
}
