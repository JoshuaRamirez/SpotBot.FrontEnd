import { Component, Input } from '@angular/core';

export interface Book {
  title: string;
  author: string;
  description: string;
}

@Component({
  selector: 'ui-book-details',
  templateUrl: './BookDetails.Template.html',
  standalone: true,
  styleUrls: ['./BookDetails.Styles.scss']
})
export class BookDetailsComponent {
  @Input() book!: Book;
}
