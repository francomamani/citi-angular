import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {MenuComponent} from './menu/menu.component';
import {MenuItem} from './interfaces/menu-item.interface';
import {RouterOutlet} from '@angular/router';
/*
* map: itera entre elementos escuchados
*   1 2 3
* map(1,2,3) -> transformacion map(x => x*2)
* map(2,4,9)
*
* filter: basada en una condicion devuelve elementos que cumplen
* filter(1,2,3) -> transformacion filter((x) => x > 2)
* filter(3)
*
* tap: muestra el estado actual de los elementos escuchados
* tap(1, 2, 3) -> no existe transformacion
* tap(1, 2, 3)
*
* delay: aplica una espera en ms para ejecutar las operaciones dentro del pipe
*
* pipe: nos sirve para usar operadores rxjs
*
* TakeUntil: permite escuchar datos hasta un evento especifico.
* */
@Component({
  selector: 'citi-root',
  imports: [
    MenuComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'citi';

  public menuItems: MenuItem[] = [
    { name: 'Home', route: '/' },
    { name: 'New Gallery', route: '/new-gallery' },
    { name: 'About', route: '/about' },
    { name: 'Menu', route: '/menu' },
    { name: 'Gallery', route: '/gallery' },
    { name: 'Contact', route: '/contact' }
  ];

  public menuItemSelected: MenuItem | null = this.menuItems[0];


  public ngOnInit(): void {
      // .subscribe((gallery: Gallery): void => {
      //   this.galleryList.push(gallery);
      // });
  }





}
