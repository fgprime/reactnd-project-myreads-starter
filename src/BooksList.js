import React from 'react';
import Book from './Book';
import BooksListInteraction from './BooksListInteraction';
import * as BooksAPI from './BooksAPI';

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
            console.dir(books);
        });
    }

    render() {
        const books = this.props.books;
        return (
            <div className="list-books">
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">
                                Currently Reading
                            </h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    <li>
                                        <Book />
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <BooksListInteraction />
            </div>
        );
    }
}

export default BooksList;
