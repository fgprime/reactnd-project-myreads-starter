import React from 'react';
import BooksListInteraction from './BooksListInteraction';
import BookShelf from './BookShelf';

const shelfs = require('./shelfs.json');

class BooksList extends React.Component {
    areBooksInShelf = (shelf) => {
        //If a book is in category none it should not be shown
        if (shelf.id === 'none') return false;

        return this.props.books.some((book) => {
            return book.shelf === shelf.id;
        });
    };

    render() {
        return (
            <div className="list-books">
                <div className="list-books-content">
                    <div>
                        {shelfs.map(
                            (shelf) =>
                                this.areBooksInShelf(shelf) && (
                                    <BookShelf
                                        key={shelf.id}
                                        shelf={shelf}
                                        books={this.props.books}
                                        updateBookShelf={
                                            this.props.updateBookShelf
                                        }
                                    />
                                )
                        )}
                    </div>
                </div>
                <BooksListInteraction />
            </div>
        );
    }
}

export default BooksList;
