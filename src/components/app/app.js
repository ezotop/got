import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import styled from 'styled-components';
import Header from '../header';
import CharacterPage from '../pages/characterPage';
import BookPage from '../pages/bookPage';
import HousePage from '../pages/housePage';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';


const Button = styled.button`
    background-color: #fff;
    border: none;
    height: 50px;
    width: 200px;
    margin-bottom: 20px;
`;

export default class App extends Component {

    gotService = new gotService();

    state = {
        showRandomChar: true,
        error: false,
    }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    onToggleRandomChar = () => {
        this.setState({
            showRandomChar: !this.state.showRandomChar
        });
    }

    render() {
        const {showRandomChar, error} = this.state;
        if (error) {
            return <ErrorMessage/>
        }
        const char = showRandomChar ? <RandomChar/> : null;
        const btnText = !showRandomChar ? 'Show random char' : 'Hide random char';



        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
                        </Col>
                    </Row>
                    <Button
                    className="rounded"
                    onClick={this.onToggleRandomChar}>
                        {btnText}
                    </Button>
                    <CharacterPage/>
                    <BookPage/>
                    <HousePage/>
                </Container>
            </>
        );
    }
}

// <Row>
//     <Col md='6'>
//         <ItemList onItemSelected={this.onItemSelected}
//         getData={this.gotService.getAllBooks}
//         renderItem={(item) => item.name} />
//         renderItem={(item) => (<><span>{item.name}</span><button>Click me</button></>)} Помимо ф-ций, можно передавать и кусок JSX разметки через стрелочную ф-цию
//     </Col>
//     <Col md='6'>
//         <CharDetails charId={this.state.selectedChar} />
//     </Col>
// </Row>

// <Row>
//     <Col md='6'>
//         <ItemList
//             onItemSelected={this.onItemSelected}
//             getData={this.gotService.getAllHouses}
//             renderItem={(item) => item.name} />
//     </Col>
//     <Col md='6'>
//         <CharDetails charId={this.state.selectedChar} />
//     </Col>
// </Row>