import React, { Component } from 'react';
import gotService from '../../services/gotService';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import {withRouter} from 'react-router-dom';

class BookPage extends Component {

    gotService = new gotService();

    state = {
        selectedBook: null,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        // const itemList = (
        //     <ItemList
        //         onItemSelected={this.onItemSelected}
        //         getData={this.gotService.getAllBooks}
        //         renderItem={({name}) => name} />
        // );

        // const bookDetails = (
        //     <CharDetails
        //     itemId={this.state.selectedBook}
        //     getData={this.gotService.getBook}>
        //         <Field field='numberOfPages' label='Pages'/>
        //         <Field field='publisher' label='Publisher'/>
        //         <Field field='released' label='Released'/>
        //     </CharDetails>
        // );

        return (
            //<RowBlock left={itemList} right={bookDetails}/>
            <ItemList
                // onItemSelected={this.onItemSelected}
                onItemSelected={(itemId) => {
                    this.props.history.push(`${itemId}`)
                }}
                getData={this.gotService.getAllBooks}
                renderItem={({name}) => name} />
        )
    }

};

export default withRouter(BookPage);