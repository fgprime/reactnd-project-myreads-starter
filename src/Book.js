import React from 'react';
import BookShelfChanger from './BookShelfChanger';

class Book extends React.Component {
    render() {
        const book = this.props.book;
        const { title } = book;

        const imageLink = book.imageLinks ? book.imageLinks.smallThumbnail : '';
        const authors = book.authors ? book.authors.join(', ') : '';

        return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${imageLink})`,
                        }}
                    />
                    <BookShelfChanger
                        book={book}
                        updateBookShelf={this.props.updateBookShelf}
                    />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors} </div>
            </div>
        );
    }
}

export default Book;
