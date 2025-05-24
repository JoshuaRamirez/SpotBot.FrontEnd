import { Component, Input } from '@angular/core';

export interface Book {
  title: string;
  author: string;
  description: string;
}

@Component({
  selector: 'ui-book-details',
  template: '<div></div>'
})
export class BookDetailsComponent {
  @Input() book!: Book;
}
