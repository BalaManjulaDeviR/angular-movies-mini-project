import { Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

export const routes: Routes = [
    { path: '', component: MovieListComponent },
    { path: 'movies', component: MovieListComponent },
    { path: 'movies/:id', component: MovieDetailComponent },
    { path: '**', component: MovieListComponent }
];