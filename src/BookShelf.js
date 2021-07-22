import React from 'react';
import Book from './Book';

class BookShelf extends React.Component {
    render() {
        const name = this.props.name;
        const books = this.props.books;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>
                            <Book />
                        </li>
                    </ol>
                </div>
            </div>
        );
    }
}

export default BookShelf;
