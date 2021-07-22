import React from 'react';
import BookShelfChanger from './BookShelfChanger';

class Book extends React.Component {
    render() {
        const book = this.props.book;
        const { authors, imageLinks, title } = book;

        return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${
                                imageLinks.smallThumbnail
                            })`,
                        }}
                    />
                    <BookShelfChanger
                        book={book}
                        updateBookShelf={this.props.updateBookShelf}
                    />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors.join(', ')} </div>
            </div>
        );
    }
}

export default Book;
