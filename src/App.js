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

        BooksAPI.update(book, shelf);
    };

    render() {
        return (
            <Router>
                <div className="app">
                    <Switch>
                        <Route path="/search">
                            <BookSearch />
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
