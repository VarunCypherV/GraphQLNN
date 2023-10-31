import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
//APPOLO HELPS REACT COMMUNICATE WITH GRAPHQL , apollo boost has all of the co dependency and apollo itself
//provder injects apollo ino our react , react-apollo is the glue between react and apollo

// components
import BookList from './components/BookList';
import AddBook from './components/AddBook';

// apollo client setup
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql' //the one endpoint , entry into graph loaded with schema of our graphql setup
});

class App extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
            <div id="main">
                <h1>Ninja's Reading List</h1>
                <BookList />
                <AddBook />
            </div>
        </ApolloProvider>
    );
  }
}

export default App;
