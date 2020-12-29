import React, {Component} from 'react';
import styled from 'styled-components';
//import './randomChar.css';
import {CharDetailsBlock, CharName} from '../charDetails/charDetails';

const Term = styled.span`
    font-weight: bold;
`;

export default class RandomChar extends Component {

    render() {

        return (
            <CharDetailsBlock className="rounded">
                <CharName>Random Character: John</CharName>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>Gender </Term>
                        <span>male</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>Born </Term>
                        <span>11.03.1039</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>Died </Term>
                        <span>13.09.1089</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>Culture </Term>
                        <span>Anarchy</span>
                    </li>
                </ul>
            </CharDetailsBlock>
        );
    }
}

export {Term};
