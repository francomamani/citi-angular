import {inject, Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {Gallery} from '../interfaces/gallery.interface';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  http = inject(HttpClient)

  public newGalleryRemoved$: Subject<Gallery> = new Subject<Gallery>();

  // get, post, put, patch, delete, options

  // Promises
  // espera una respuesta para procesar
  // se cierra el canal de solicitud

  // Observable  // firebase
  // Escucha respuestas de un tipo
  // se cierra el servicio de escucha cuando pasa un evento como la destruccion de un componente.

  public getList(): Observable<Gallery[]> {
    return of([
      {
        productImage: 'https://www.veggirlrd.com/wp-content/uploads/2016/07/Salt-and-pepper-tofu.jpg',
        title: 'Citi Oruro Bolivia 2025',
        description: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p class="mt-1">another description here</p>',
        price: 100.30
      },
      {
        productImage: 'https://i.pinimg.com/originals/a7/34/a5/a734a583465613fbec7ef3bcf6e269e1.jpg',
        title: 'Citi Oruro Bolivia 2025',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 200.20
      },
      {
        productImage: 'https://66.media.tumblr.com/tumblr_lt1fs99LFs1r4o3p2o1_1280.jpg',
        title: 'Citi Oruro Bolivia 2025',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 300.50
      },
      {
        productImage: 'https://th.bing.com/th/id/OIP.qa--rbC4nS_pkDmabUzh-gHaGN?cb=iwp2&w=940&h=788&rs=1&pid=ImgDetMain',
        title: 'Citi Oruro Bolivia 2025',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 99.99
      },
      {
        productImage: 'https://www.veggirlrd.com/wp-content/uploads/2016/07/Salt-and-pepper-tofu.jpg',
        title: 'Citi Oruro Bolivia 2025',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 100.30
      },
      {
        productImage: 'https://i.pinimg.com/originals/a7/34/a5/a734a583465613fbec7ef3bcf6e269e1.jpg',
        title: 'Citi Oruro Bolivia 2025',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 200.20
      },
      {
        productImage: 'https://66.media.tumblr.com/tumblr_lt1fs99LFs1r4o3p2o1_1280.jpg',
        title: 'Citi Oruro Bolivia 2025',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 300.50
      },
      {
        productImage: 'https://th.bing.com/th/id/OIP.qa--rbC4nS_pkDmabUzh-gHaGN?cb=iwp2&w=940&h=788&rs=1&pid=ImgDetMain',
        title: 'Citi Oruro Bolivia 2025',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 99.99
      }
    ]);
  }

  public getListFake(): Observable<Gallery[]> {
    return this.http.get<Gallery[]>('https://683b18e443bb370a8674ba9d.mockapi.io/api/v1/gallery');
  }

  public postFake(gallery: Gallery): Observable<Gallery> {
    return this.http.post<Gallery>('https://683b18e443bb370a8674ba9d.mockapi.io/api/v1/gallery', gallery);
  }

  public destroyFake(id: string): Observable<Gallery> {
    return this.http.delete<Gallery>(`https://683b18e443bb370a8674ba9d.mockapi.io/api/v1/gallery/${id}`);
  }
}
