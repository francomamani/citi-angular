import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { startWith, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'citi-searcher',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './searcher.component.html',
  styleUrl: './searcher.component.scss'
})
export class SearcherComponent implements OnInit {
  @Output() public onSearch: EventEmitter<string> = new EventEmitter<string>();

  public searchInput: FormControl = new FormControl(null);

  public ngOnInit(): void {
    this.searchInput.valueChanges
      .pipe(
        startWith(''),
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe((value) => {
        this.onSearch.emit(value);
      });
  }
}
