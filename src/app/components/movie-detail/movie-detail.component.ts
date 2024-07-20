import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetail } from '../../shared/models/movie-detail';
import { MovieServiceService } from '../../shared/services/movie-service.service';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '../../shared/pipes/currency.pipe';
import { DurationPipe } from '../../shared/pipes/duration.pipe';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe,
    DurationPipe
  ],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})

export class MovieDetailComponent {
  movieDetailsData: MovieDetail = {
    id: '',
    title: '',
    duration: '',
    budget: '',
    release_date: '',
    box_office: '',
    cinematographers: [],
    poster: '',
    producers: [],
    summary: ''
  };
  movieId: string = '';
  loadingState: string = 'loading';

  constructor(private router: Router, private route: ActivatedRoute, private movieService: MovieServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params?.['id']) {
        this.movieId = params?.['id'];
        this.getMovieDetails();
      } else {
        this.loadingState = 'error';
      }
    });
  }

  getMovieDetails(): void {
    this.movieService.getMovieDetails(this.movieId).subscribe((data: MovieDetail) => {
      if (data) {
        this.movieDetailsData = data;
        this.loadingState = 'success';
      } else {
        this.loadingState = 'error';
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/movies']);
  }

  getNamesData(data: string[]): string {
    return data.join(', ');
  }
}
