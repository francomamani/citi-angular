import {Component, inject, OnDestroy} from '@angular/core';
import {map, Observable, Subject, takeUntil, tap} from 'rxjs';
import {Gallery} from '../interfaces/gallery.interface';
import {GalleryService} from '../services/gallery.service';
import {GalleryComponent} from '../gallery/gallery.component';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'citi-gallery-list',
  imports: [
    GalleryComponent,
    AsyncPipe
  ],
  templateUrl: './gallery-list.component.html',
  styleUrl: './gallery-list.component.scss'
})
export class GalleryListComponent implements OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  public galleryList: Gallery[] = [];

  public galleryService: GalleryService = inject(GalleryService);

  public galleryList$: Observable<Gallery[]> = this.galleryService.getList()
    .pipe(
      takeUntil(this.destroy$),
      tap((galleryList: Gallery[]): void => {
        console.log('galleryList', galleryList);
      })
    );

  public galleryListFake$: Observable<Gallery[]> = this.galleryService.getListFake()
    .pipe(
      takeUntil(this.destroy$),
      map((galleryList: Gallery[]) => {
        return galleryList.map((gallery: Gallery) => {
          gallery.price = Number(gallery.price);
          return gallery;
        })
      }),
      tap((galleryListFake: Gallery[]): void => {
        console.log('galleryListFake', galleryListFake);
      })
    );


  public removeGallery(id: string) {
    this.galleryService.destroyFake(id)
      .subscribe((removedGallery: Gallery) => {
        console.log('removeGallery', removedGallery);
        this.galleryService.newGalleryRemoved$.next(removedGallery);
      })
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
