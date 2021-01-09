import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {CharDetailsBlock, CharName} from '../charDetails/charDetails';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const Term = styled.span`
    font-weight: bold;
`;

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return (
        <>
            <CharName>Random Character: {name}</CharName>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <Term>Gender </Term>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <Term>Born </Term>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <Term>Died </Term>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <Term>Culture </Term>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    );
};

function RandomChar({getData}) {

    const [char, setChar] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    useEffect(() => {
        updateChar();
        let timerId = setInterval(updateChar, 1500);
        return () => {
            clearInterval(timerId);
        }
    }, [])
    
    function onCharLoaded(char) {
        setChar(char);
        setLoading(false);
    }

    function onError(err) {
        setError(true);
        setLoading(false);
    }

    function updateChar() {
        const id = Math.floor(Math.random()*140 + 25); //Диапазон 25-140
        getData(id)
            .then(onCharLoaded)
            .catch(onError);
    }
    
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? <View char={char}/> : null;

    return (
        <CharDetailsBlock className="rounded">
            {errorMessage}
            {spinner}
            {content}
        </CharDetailsBlock>
    );
}

export {Term};
export default RandomChar;


// export default class RandomChar extends Component {

//     gotService = new gotService();

//     state = {
//         char: {},
//         loading: true,
//         error: false
//     }

//     static defaultProps = {
//         interval: 1500
//     }
//     static propTypes = {
//         interval: PropTypes.number
//     }

//     componentDidMount() {
//         this.updateChar(); // Вызываем функцию сразу, как только компонент появится на странице, чтобы заполнить рандомного персонажа
//         this.timerId = setInterval(this.updateChar, this.props.interval);
//     }
//     componentWillUnmount() {
//         clearInterval(this.timerId);

//     }

//     onCharLoaded = (char) => {
//         this.setState({
//             char, //char: char(из gotService)
//             loading: false //Когда происходит setState то loading перезаписывается
//         })
//     }

//     onError = (err) => {
//         this.setState({
//             error: true,
//             loading: false,
//         });
//     }

//     updateChar = () => {
//         const id = Math.floor(Math.random()*140 + 25); //Диапазон 25-140
//         this.gotService.getCharacter(id)
//             .then(this.onCharLoaded)
//             .catch(this.onError);
//     }

//     render() {
//         const { char, loading, error } = this.state;

//         const errorMessage = error ? <ErrorMessage/> : null;
//         const spinner = loading ? <Spinner/> : null;
//         const content = !(loading || error) ? <View char={char}/> : null;

//         return (
//             <CharDetailsBlock className="rounded">
//                 {errorMessage}
//                 {spinner}
//                 {content}
//             </CharDetailsBlock>
//         );
//     }
// }

// const View = ({char}) => {
//     const {name, gender, born, died, culture} = char;
//     return (
//         <>
//             <CharName>Random Character: {name}</CharName>
//             <ul className="list-group list-group-flush">
//                 <li className="list-group-item d-flex justify-content-between">
//                     <Term>Gender </Term>
//                     <span>{gender}</span>
//                 </li>
//                 <li className="list-group-item d-flex justify-content-between">
//                     <Term>Born </Term>
//                     <span>{born}</span>
//                 </li>
//                 <li className="list-group-item d-flex justify-content-between">
//                     <Term>Died </Term>
//                     <span>{died}</span>
//                 </li>
//                 <li className="list-group-item d-flex justify-content-between">
//                     <Term>Culture </Term>
//                     <span>{culture}</span>
//                 </li>
//             </ul>
//         </>
//     );
// };
