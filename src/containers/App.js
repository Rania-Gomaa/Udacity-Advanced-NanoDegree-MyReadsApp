import React from 'react';
import { Route } from 'react-router-dom';
import '../App.css';
import Home from './HomePage';
import Search from './SearchPage';
import * as BooksAPI from '../api/BooksAPI';

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  }

  shelfChange = (book, shelf) => {
    if (book && book.shelf !== shelf) {
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf;
        this.setState((prevState) => ({
          books: prevState.books.filter((b) => b.id !== book.id).concat(book),
        }));
      });
    }
  };

  render() {
    //console.log(this.state.books)
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => <Home allBooks={this.state.books} onShelfChange={this.shelfChange} />}
        />

        <Route
          exact
          path="/search"
          render={() => <Search allBooks={this.state.books} onShelfChange={this.shelfChange} />}
        />
      </div>
    );
  }
}

export default BooksApp;
