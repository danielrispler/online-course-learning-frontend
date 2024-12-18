import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, OnInit, resource, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { REVIEWS_URL } from 'src/app.config';
import { Review } from './reviews.type';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  imports: [MatIconModule, MatCardModule, DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewsComponent implements OnInit {
  protected readonly stars = signal(Array(5));
  private readonly startIndex = signal(0);
  private readonly reviewsResource = resource({
    loader: async (): Promise<Review[]> => {
      const response = await fetch(REVIEWS_URL);
      return response.json();
    },
  });

  protected readonly totalReviews = computed(() => {
    return this.reviewsResource.value() ?? [];
  });

  protected readonly displayedReviews = computed(() => {
    const start = this.startIndex();
    const end = start + 3;

    return [...this.totalReviews(), ...this.totalReviews()].slice(start, end);
  });

  ngOnInit(): void {
    this.reviewsResource.reload();
  }

  nextReviews(): void {
    this.startIndex.set((this.startIndex() - 1 + this.totalReviews().length) % this.totalReviews().length);
  }

  prevReviews(): void {
    this.startIndex.set((this.startIndex() + 1) % this.totalReviews().length);
  }
}
