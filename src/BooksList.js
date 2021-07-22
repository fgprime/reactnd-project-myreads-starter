import React from 'react';
import BooksListInteraction from './BooksListInteraction';
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';

const shelfs = require('./shelfs.json');

class BooksList extends React.Component {
    state = {
        books: [],
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState(() => ({
                books: books,
            }));
        });
    }

    areBooksInShelf = (shelf) => {
        return this.state.books.some((book) => {
            return book.shelf === shelf.id;
        });
    };

    render() {
        const books = this.props.books;
        return (
            <div className="list-books">
                <div className="list-books-content">
                    <div>
                        {shelfs.map(
                            (shelf) =>
                                this.areBooksInShelf(shelf) && (
                                    <BookShelf
                                        key={shelf.id}
                                        name={shelf.name}
                                        books={this.state.books}
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
