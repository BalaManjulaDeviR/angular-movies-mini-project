import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePropertyComponent } from './movie-property.component';

describe('MoviePropertyComponent', () => {
  let component: MoviePropertyComponent;
  let fixture: ComponentFixture<MoviePropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviePropertyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoviePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
