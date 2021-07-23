import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class BookSearch extends React.Component {
    state = {
        query: '',
        results: [],
    };

    updateSearch = (event) => {
        const query = event.target.value;
        this.setState((prevState) => ({
            query: query,
        }));

        if (query === '') {
            /*
             * Search with an empty query string leads to an 403 in the API
             * Therefore it will be handled manually and results will be emptied
             */
            this.emptyResults();
        } else {
            BooksAPI.search(query)
                .then((books) => {
                    if (Array.isArray(books) && this.state.query !== '') {
                        const validBooks = books.filter((book) => {
                            return book.imageLinks && book.authors;
                        });
                        this.setState((prevState) => ({
                            results: validBooks,
                        }));
                    } else {
                        /*
                         * Handle empty result from API
                         * Handle async response with an empty query string
                         */
                        this.emptyResults();
                    }
                })
                .catch((error) => {
                    console.log(error);
                    this.emptyResults();
                });
        }
    };

    emptyResults = () => {
        this.setState((prevState) => ({
            results: [],
        }));
    };

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={this.updateSearch}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.results.map((book) => (
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

export default BookSearch;
