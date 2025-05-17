import {Component} from '@angular/core';
import {MenuComponent} from './menu/menu.component';
import {GalleryComponent} from './gallery/gallery.component';
import {Gallery} from './interfaces/gallery.interface';
import {MenuItem} from './interfaces/menu-item.interface';

@Component({
  selector: 'citi-root',
  imports: [
    MenuComponent,
    GalleryComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'citi';

  public menuItems: MenuItem[] = [
    { name: 'Home', route: '/' },
    { name: 'About', route: '/about' },
    { name: 'Menu', route: '/menu' },
    { name: 'Gallery', route: '/gallery' },
    { name: 'Contact', route: '/contact' }
  ];

  public menuItemSelected: MenuItem | null = this.menuItems[0];

  public galleryList: Gallery[] = [
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
  ];

}
