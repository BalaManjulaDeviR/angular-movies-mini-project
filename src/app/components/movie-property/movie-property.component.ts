import { Component, Input, Output } from '@angular/core';
import { MovieList } from '../../shared/models/movie-list';
import { EventEmitter } from '@angular/core';
import { CurrencyPipe } from '../../shared/pipes/currency.pipe';
import { DurationPipe } from '../../shared/pipes/duration.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-property',
  standalone: true,
  imports: [
    CurrencyPipe,
    DurationPipe,
    CommonModule
  ],
  templateUrl: './movie-property.component.html',
  styleUrl: './movie-property.component.css'
})
export class MoviePropertyComponent {
  @Input() movie!: MovieList;
  @Output() detailsBtnClick: EventEmitter<string> = new EventEmitter<string>();

  detailsButtonClicked(id: string): void {
    this.detailsBtnClick.emit(id);
  }
}
