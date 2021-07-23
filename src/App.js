import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Header from './Header';
import BooksList from './BooksList';
import BookSearch from './BookSearch';

class BooksApp extends React.Component {
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

    updateBookShelf = (book, shelf) => {
        this.setState((prevState) => {
            const books = prevState.books.filter((element) => {
                return element.id !== book.id;
            });

            let newBookWithShelf = book;
            newBookWithShelf.shelf = shelf;

            books.push(newBookWithShelf);

            return {
                books: books,
            };
        });

        BooksAPI.update(book, shelf);
    };

    render() {
        return (
            <Router>
                <div className="app">
                    <Switch>
                        <Route path="/search">
                            <BookSearch
                                booksOnShelves={this.state.books}
                                updateBookShelf={this.updateBookShelf}
                            />
                        </Route>
                        <Route path="/">
                            <Header />
                            <BooksList
                                books={this.state.books}
                                updateBookShelf={this.updateBookShelf}
                            />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default BooksApp;
