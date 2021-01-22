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

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <Term>{label}</Term>
            <span>{item[field]}</span>
        </li>
    )
};

export {Field};

export default class CharDetails extends Component {

    gotService = new gotService();

    state = {
        item: null,
        loading: true
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const {itemId} = this.props;
        console.log(itemId)
        if(!itemId) {
            return;
        }
        
        this.props.getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    loading: false
                })
            })
        // this.foo.bar = 0;
    }
    
    render() {
        if(!this.state.item) {
            return <span className="select-error">Please select a character</span>
        }
        const {item, loading} = this.state;

        const View = ({item}) => {
            const {name} = item;
            return (
                <>
                <CharName>{name}</CharName>
                <ul className="list-group list-group-flush">
                    {/* {this.props.children}  Все компоненты которые переданы выше в Field */}
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </>
            );
        };

        const spinner = loading ? <Spinner/> : null;
        const content = !loading ? <View item={item} /> : null;

        return (
            <CharDetailsBlock className="rounded">
                {spinner}
                {content}
            </CharDetailsBlock>
        );
    }
}

// const View = ({char}, props) => {
//     const {name, gender, born, died, culture} = char;
//     return (
//         <>
//         <CharName>{name}</CharName>
//         <ul className="list-group list-group-flush">
//             {props} {/*  Все компоненты которые переданы выше */}
//         </ul>
//     </>
//     );
// };

export {CharDetailsBlock, CharName};
