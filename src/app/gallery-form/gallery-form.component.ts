import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {GalleryService} from '../services/gallery.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CommonModule} from '@angular/common';
import { Gallery } from '../interfaces/gallery.interface';

enum Action {
  save = 'save',
  update = 'update'
}

@Component({
  selector: 'citi-gallery-form',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './gallery-form.component.html',
  styleUrl: './gallery-form.component.scss'
})
export class GalleryFormComponent implements OnInit {

  public galleryForm: FormGroup;
  public isDescriptionDisabled: boolean = false;
  public title: string = 'New Gallery';
  public action: Action = Action.save;
  public Action = Action;
  
  private fb: FormBuilder = inject(FormBuilder);
  private galleryService: GalleryService =  inject(GalleryService);
  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private id: string | undefined;

  constructor() {
    // /^[A-Z ]{3,50}$/
    // Equivalente a: "[A-Z ]{3,50}"
    // Cuantificadores:
    // * 0 o más
    // + 1 o más
    // ? 0 o 1
    // {n} n veces
    // {n,m} n a m veces
    // {n,} n o más veces
    // ^ inicio de la cadena
    // $ fin de la cadena
    // \d dígito \D no dígito
    // \w palabra \W no palabra
    // \s espacio \S no espacio
    // \b palabra borde \B no palabra borde
    // \W no palabra
    // Agrupación: ( )
    // O: |
    // Negación: [^]
    // Caracteres especiales: . ^ $ * + ? \ | ( ) { } [ ] debemos usar el caracter \ para escaparlos
    // Como usar | para validar más de una opción:
    // /^(gato|perro|([aA].+))$/

    this.galleryForm = this.fb.group({
      id: [null],
      title: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z ]{3,50}$/)]),
      description: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(300), Validators.pattern(/^(image|imagen|((image|imagen).+))$/)]],
      productImage: ['', [Validators.required, Validators.pattern(/^https?:\/\/.+/)]], // https://, http://, etc.
      price: [0, [Validators.required, Validators.min(10), Validators.max(2500)]],
    });

    // this.route.data.subscribe((data: any) => {
    //   console.log(data);
    // });
    // this.route.params.subscribe((params: Params) => {
    //    console.log(params);
    // });
    this.id = this.route.snapshot.params['id'];
    this.title = this.route.snapshot.data['title'];
    this.action = this.route.snapshot.data['action'];
  }

  public ngOnInit(): void {
    if (this.id) {
      this.galleryService.getFake(this.id).subscribe((gallery: Gallery) => {
        this.galleryForm.patchValue(gallery);
      });
    }
  }

  public submit(): void {
    switch (this.action) {
      case Action.save:
        this.saveGallery();
        break;
      case Action.update:
        this.updateGallery();
        break;
    }
  }

  public saveGallery(): void {
    console.log(this.galleryForm.value);
    this.galleryService.postFake(this.galleryForm.value)
      .subscribe(() => {
        this.router.navigate(['/gallery']);
      })
  }

  public updateGallery(): void {
    console.log(this.galleryForm.value);
    this.galleryService.updateFake(this.galleryForm.value)
      .subscribe(() => {
        this.router.navigate(['/gallery']);
      })
  }
}
