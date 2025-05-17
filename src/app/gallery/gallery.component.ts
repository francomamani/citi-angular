import {Component, Input} from '@angular/core';
import { Gallery } from '../interfaces/gallery.interface';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'citi-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  @Input() galleryList: Gallery[] = [];
}
