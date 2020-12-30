import React, {Component} from 'react';
import styled from 'styled-components';
import './charDetails.css';
import gotService from '../../services/gotService';
import {Term} from '../randomChar/randomChar';
import Spinner from '../spinner';

const CharDetailsBlock = styled.div`
    display: block;
    background-color: #fff;
    opacity: 0.8;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`;
const CharName = styled.h4`
    min-height: 56px;
    margin-bottom: 20px;
    text-align: center;
`;

export default class CharDetails extends Component {

    gotService = new gotService();

    state = {
        char: null,
        loading: true
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    updateChar() {
        const {charId} = this.props;
        if(!charId) {
            return;
        }

        this.gotService.getCharacter(charId)
            .then((char) => {
                this.setState({
                    char,
                    loading: false
                })
            })
        // this.foo.bar = 0;
    }
    
    render() {
        if(!this.state.char) {
            return <span className="select-error">Please select a character</span>
        }
        const {char, loading} = this.state;

        const spinner = loading ? <Spinner/> : null;
        const content = !loading ? <View char={char} /> : null;

        return (
            <CharDetailsBlock className="rounded">
                {spinner}
                {content}
            </CharDetailsBlock>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return (
        <>
        <CharName>{name}</CharName>
        <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between">
                <Term>Gender</Term>
                <span>{gender}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <Term>Born</Term>
                <span>{born}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <Term>Died</Term>
                <span>{died}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <Term>Culture</Term>
                <span>{culture}</span>
            </li>
        </ul>
    </>
    );
};

export {CharDetailsBlock, CharName};

