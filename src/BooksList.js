import React from 'react';
import Book from './Book';
import BooksListInteraction from './BooksListInteraction';

class BooksList extends React.Component {
    render() {
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
