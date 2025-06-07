import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import { Gallery } from '../interfaces/gallery.interface';
import {CommonModule} from '@angular/common';
import {GalleryService} from '../services/gallery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'citi-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  @Input() galleryList: Gallery[] = [];
  @Output() onGalleryDelete: EventEmitter<string> = new EventEmitter<string>();

  public galleryService: GalleryService = inject(GalleryService);
  public router: Router = inject(Router);

  public ngOnInit(): void {
    this.galleryService.newGalleryRemoved$
      .subscribe((gallery: Gallery) => {
        this.removeGallery(gallery.id)
      })
  }

  public delete(id: string | undefined): void {
    if (id) {
      this.onGalleryDelete.emit(id);
    }
  }

  public removeGallery(id: string | undefined): void {
    if (id) {
      this.galleryList = this.galleryList.filter((gallery: Gallery): boolean => gallery.id !== id);
    }
  }

  public edit(id: string | undefined): void {
    if (!id) return;
    this.router.navigate(['/edit-gallery', id]);
  }
}
