import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import styled from 'styled-components';
import Header from '../header';
import CharacterPage from '../characterPage';
import RandomChar from '../randomChar';
// import ItemList from '../itemList';
// import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';

const Button = styled.button`
    background-color: #fff;
    border: none;
    height: 50px;
    width: 200px;
    margin-bottom: 20px;
`;

export default class App extends Component {

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
                </Container>
            </>
        );
    }
}