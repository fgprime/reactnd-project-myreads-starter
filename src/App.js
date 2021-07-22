import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import BooksList from './BooksList';
import BookSearch from './BookSearch';

class BooksApp extends React.Component {
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
                            <BooksList />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default BooksApp;
