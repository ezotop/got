import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';

const ListGroup = styled.ul`
    background-color: #fff;
    opacity: 0.8;
`;

const ListGroupItem = styled.li`
    cursor: pointer;
`;

export default class ItemList extends Component {

    state = {
        itemList: null,
    }

    componentDidMount() {
        const {getData} = this.props;
        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
        })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.renderItem(item);

            return (
                <ListGroupItem
                key={id}
                className="list-group-item"
                onClick={ () => this.props.onItemSelected(id) }>
                    {label}
                </ListGroupItem>
            );

        })
    }

    render() {
        const {itemList} = this.state;

        if(!itemList) { //Если charList пустой то будет спиннер
            return <Spinner/>
        }
        const items = this.renderItems(itemList);

        return (
            <ListGroup>
                {items}
            </ListGroup>
        );
    }
} 