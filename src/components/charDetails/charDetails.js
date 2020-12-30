import React, {Component} from 'react';
import styled from 'styled-components';
import './charDetails.css';
import {Term} from '../randomChar/randomChar';

const CharDetailsBlock = styled.div`
    display: block;
    background-color: #fff;
    opacity: 0.8;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`;
const CharName = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`;

export default class CharDetails extends Component {

    render() {
        return (
            <CharDetailsBlock className="rounded">
                <CharName>John Snow</CharName>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>Gender</Term>
                        <span>male</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>Born</Term>
                        <span>1783</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>Died</Term>
                        <span>1820</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>Culture</Term>
                        <span>First</span>
                    </li>
                </ul>
            </CharDetailsBlock>
        );
    }
}

export {CharDetailsBlock, CharName};

