import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import styled from 'styled-components';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
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
        randomOn: true,
        error: false
    }

    onToggleRandomChar = () => {
        this.setState({
            randomOn: !this.state.randomOn
        });
    }

    render() {
        const {randomOn, error} = this.state;
        if (error) {
            return <ErrorMessage/>
        }
        const random = randomOn ? <RandomChar/> : null;
        const btnText = !randomOn ? 'Show random char' : 'Hide random char';

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {random}
                        </Col>
                    </Row>
                    <Button
                    className="rounded"
                    onClick={this.onToggleRandomChar}>
                        {btnText}
                    </Button>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}