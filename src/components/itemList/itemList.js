import React, {Component} from 'react';
import styled from 'styled-components';
import './itemList.css';

const ListGroup = styled.ul`
    opacity: 0.8;
`;

export default class ItemList extends Component {

    render() {
        return (
            <ListGroup>
                <li className="list-group-item">
                    John Snow
                </li>
                <li className="list-group-item">
                    Brandon Stark
                </li>
                <li className="list-group-item">
                    Geremy
                </li>
            </ListGroup>
        );
    }
}