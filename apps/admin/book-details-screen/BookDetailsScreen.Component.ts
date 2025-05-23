import { Component } from '@angular/core';
import { Book } from '../../../libs/ui/book-details/BookDetails.Component';

@Component({
  selector: 'admin-book-details-screen',
  templateUrl: './BookDetailsScreen.Template.html',
  styleUrls: ['./BookDetailsScreen.Styles.scss']
})
export class BookDetailsScreenComponent {
  public book: Book = {
    title: 'Example Book',
    author: 'Author Name',
    description: 'This is a placeholder description for the example book.'
  };
}
