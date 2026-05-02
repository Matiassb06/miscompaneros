import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {
  @Input() value: number = 0;
  @Input() readonly: boolean = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Output() valueChange = new EventEmitter<number>();

  stars = [1, 2, 3, 4, 5];
  hovered = 0;

  get display(): number {
    return this.readonly ? this.value : (this.hovered || this.value);
  }

  select(n: number): void {
    if (!this.readonly) {
      this.value = n;
      this.valueChange.emit(n);
    }
  }

  hover(n: number): void {
    if (!this.readonly) this.hovered = n;
  }

  leave(): void {
    this.hovered = 0;
  }
}
