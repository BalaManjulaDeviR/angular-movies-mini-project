import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MovieList } from '../../shared/models/movie-list';
import { MoviePropertyComponent } from '../movie-property/movie-property.component';
import { MovieServiceService } from '../../shared/services/movie-service.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MoviePropertyComponent
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movies: MovieList[] = [];
  filteredMovies: MovieList[] = [];
  filterForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    releaseYear: new FormControl(''),
  });

  constructor(private router: Router, private movieService: MovieServiceService) { }

  ngOnInit(): void {
    this.getMovieList();
    this.filterForm.controls['title'].valueChanges.subscribe((value: string) => {
      this.filterMovieList();
    });
    this.filterForm.controls['releaseYear'].valueChanges.subscribe((value: number) => {
      this.filterMovieList();
    });
  }

  getMovieList(): void {
    this.movieService.getMoviesList().subscribe((data: MovieList[]) => {
      if (data) {
        this.movies = data;
        this.filteredMovies = this.movies;
      }
    })
  }

  filterMovieList(): void {
    let title: string = this.filterForm.controls['title'].value;
    let year: string = this.filterForm.controls['releaseYear'].value ? this.filterForm.controls['releaseYear'].value.toString() : '';
    if (title && year) {
      this.filteredMovies = this.movies.filter((data: MovieList) => {
        let yearFromReleaseDate: string = data.release_date.split('-')[0];
        return (data.title.toLowerCase().includes(title.toLowerCase()) && yearFromReleaseDate.includes(year));
      });
    } else if (title) {
      this.filteredMovies = this.movies.filter((data: MovieList) => {
        return data.title.toLowerCase().includes(title.toLowerCase());
      });
    }
    else if (year) {
      this.filteredMovies = this.movies.filter((data: MovieList) => {
        let yearFromReleaseDate: string = data.release_date.split('-')[0];
        return yearFromReleaseDate.includes(year);
      });
    } else {
      this.filteredMovies = this.movies;
    }
  }

  navigateToDetailsPage(id: string): void {
    this.router.navigate(['/movies', id]);
  }

}
