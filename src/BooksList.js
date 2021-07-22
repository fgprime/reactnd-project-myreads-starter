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

    updateBookShelf = (book, shelf) => {
        this.setState((prevState) => {
            const index = prevState.books.findIndex((element) => {
                return element.id === book.id;
            });
            let newBookWithShelf = book;
            newBookWithShelf.shelf = shelf;

            let newState = prevState;
            index >= 0
                ? (newState[index] = newBookWithShelf)
                : newState.push(newBookWithShelf);

            return {
                newState,
            };
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
                                        books={this.state.books}
                                        updateBookShelf={this.updateBookShelf}
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
