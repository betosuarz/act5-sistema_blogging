import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {
  arrNoticias: any[] = [
  ]
  newNoticia: any = {
    'titulo': "",
    'imagen': "",
    'texto': "",
    'fecha': "",
  }

  publicar() {
    this.arrNoticias.push(this.newNoticia);
    this.newNoticia = {
      'titulo': "",
      'imagen': "",
      'texto': "",
      'fecha': "",
    }
    console.log(this.newNoticia)
  }

  cargarNoticias(): string {
    let html = "";
    this.arrNoticias.forEach((noticia) => { 
      html += `
        <div class="noticia">
          <h2>${noticia.titulo}</h2>
          <img src="${noticia.imagen}" alt="${noticia.titulo}">
          <p>${noticia.texto}</p>
          <p>${noticia.fecha}</p>
        </div>
      `;
    });
    return html;
  }
}