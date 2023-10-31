import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';

// components
import BookDetails from './BookDetails';

class BookList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null  //functional component useState(null) equivalent
        }
    }
    displayBooks(){
        var data = this.props.data;
        if(data.loading){ //in received json data if paramameter loading is true (intial loading) then show this
            return( <div>Loading books...</div> );
        } else {
            return data.books.map(book => {
                return(
                    <li key={ book.id } onClick={ (e) => this.setState({ selected: book.id }) }>{ book.name }</li>
                );
            })
        }
    }
    render(){
        return(
            <div>
                <ul id="book-list">
                    { this.displayBooks() }
                </ul>
                {/* when u click on one of the books listed we take that .state.selected 's id and pass it to compoenent book detail for rendering' */}
                <BookDetails bookId={ this.state.selected } /> 

            </div>
        );
    }
}
//graphql does the getbooksquery and binds it to this component and recevied data is stored in the props of this component 
//so we take this and pass it to the bookdetails component
export default graphql(getBooksQuery)(BookList);
