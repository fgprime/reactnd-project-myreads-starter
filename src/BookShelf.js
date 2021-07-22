import React from 'react';
import Book from './Book';

class BookShelf extends React.Component {
    getBooksForShelf = () => {
        const id = this.props.shelf.id;
        const books = this.props.books;

        return books.filter((book) => {
            return book.shelf === id;
        });
    };

    render() {
        const name = this.props.shelf.name;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.getBooksForShelf().map((book) => (
                            <li key={book.id}>
                                <Book
                                    book={book}
                                    updateBookShelf={this.props.updateBookShelf}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default BookShelf;
