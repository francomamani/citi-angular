import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {GalleryService} from '../services/gallery.service';
import {Router} from '@angular/router';

@Component({
  selector: 'citi-gallery-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './gallery-form.component.html',
  styleUrl: './gallery-form.component.scss'
})
export class GalleryFormComponent {

  public galleryForm: FormGroup;

  private fb: FormBuilder = inject(FormBuilder);
  private galleryService: GalleryService =  inject(GalleryService);
  private router: Router = inject(Router);

  constructor() {
    this.galleryForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      description: ['', Validators.required],
      productImage: ['', [Validators.required]],
      price: [0, [Validators.required, Validators.min(10), Validators.max(2500)]],
    });
  }

  public saveGallery(): void {
    console.log(this.galleryForm.value);
    this.galleryService.postFake(this.galleryForm.value)
      .subscribe(() => {
        this.router.navigate(['/gallery']);
      })
  }
}
