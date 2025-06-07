import { Routes } from '@angular/router';
import {GalleryFormComponent} from './gallery-form/gallery-form.component';
import {GalleryListComponent} from './gallery-list/gallery-list.component';

export const routes: Routes = [
  {
    path: 'gallery',
    component: GalleryListComponent
  },
  {
    path: 'new-gallery',
    component: GalleryFormComponent,
    data: {
      title: 'New Gallery',
      action: 'save'
    }
  },
  {
    path: 'edit-gallery/:id',
    component: GalleryFormComponent,
    data: {
      title: 'Edit Gallery',
      action: 'update'
    }
  },
  {
    path: '**',
    redirectTo: 'gallery',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'gallery',
    pathMatch: 'full'
  },
];
