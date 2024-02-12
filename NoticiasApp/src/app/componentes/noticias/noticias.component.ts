
import { Component } from '@angular/core';
import { signalSetFn } from '@angular/core/primitives/signals';
import { FormsModule } from '@angular/forms';
import { INoticia } from '../../interfaces/inoticia.interface';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {
  arrNoticias: INoticia[] = [
  {
    titulo: "Nueva exposición en el museo de arte",
    imagen: "https://ejemplo.com/imagen1.jpg",
    texto: "El museo de arte inaugura una nueva exposición que incluye obras de artistas locales e internacionales.",
    fecha: "2024-02-10"
  },
  {
    titulo: "Inauguración de nueva biblioteca municipal",
    imagen: "https://ejemplo.com/imagen2.jpg",
    texto: "La nueva biblioteca municipal abre sus puertas al público, ofreciendo una amplia colección de libros y recursos para la comunidad.",
    fecha: "2024-02-09"
  }
  ]
  insertData($event: any): void {
    this.arrNoticias.push($event);
  }
  newNoticia: any = {
    'titulo': "",
    'imagen': "",
    'texto': "",
     'fecha': "",
  }

  publicar() {
    if (this.camposObligatorios()) {
      	this.arrNoticias.push(this.newNoticia);
		this.newNoticia = {
			'titulo': "",
			'imagen': "",
			'texto': "",
			'fecha': "",
		};
		console.log(this.arrNoticias)
    } else {
		alert('Por favor, complete todos los campos para enviar la noticia');
		}
	}

	camposObligatorios(): boolean {
		return this.newNoticia.titulo && this.newNoticia.imagen && this.newNoticia.texto && this.newNoticia.fecha;
	}

  cargarNoticias(): string {
    let html: string = "";
    this.arrNoticias.forEach((noticia: any) => { 
      html += `
        <div class="noticia">
          <h2>${noticia.titulo}</h2>
          <img src="${noticia.imagen}" alt="${noticia.titulo}">
          <p>${noticia.texto}</p>
          <p>Fecha de publicación: ${noticia.fecha}</p>
        </div>
      `;
    });
    return html;
  }   
}
