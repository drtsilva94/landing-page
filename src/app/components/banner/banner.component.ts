import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true, // Corrigido - define como Standalone Component
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'] // Corrigido - array e nome correto
})
export class BannerComponent {}
