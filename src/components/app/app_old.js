import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import styled from 'styled-components';
import Header from '../header';
import {CharacterPage, BookPage, HousePage, BookItem, HomePage} from '../pages';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFoundPage from '../notFoundPage';

const Button = styled.button`
    background-color: #fff;
    border: none;
    height: 50px;
    width: 200px;
    margin-bottom: 20px;
`;
export {Button};

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
             <Router>
                <div className="app">
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
                        <Switch>
                            <Route path="/" exact component={HomePage}/>
                            <Route path="/characters" component={CharacterPage}/>
                            <Route path="/houses" component={HousePage}/>
                            <Route path="/books" exact component={BookPage}/>
                            <Route path="/books/:id" render={ 
                                ({match}) => {
                                    const {id} = match.params;
                                    return <BookItem bookId={id}/>}
                            }/>
                            <Route component={NotFoundPage}/>
                        </Switch>
                    </Container>
                </div>
            </Router>
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


// return (
//     <Router>
//         <div className="app"> 
//             <Container>
//                 <Header />
//             </Container>
//             <Container>
//                 <Row>
//                     <Col lg={{size: 5, offset: 0}}>
//                         {char}
//                     </Col>
//                 </Row>
//                 <Button
//                 className="rounded"
//                 onClick={this.onToggleRandomChar}>
//                     {btnText}
//                 </Button>
//                 <Route path="/" exact component={() => <h1>Welcome To Game Of Thrones DB</h1>}/>
//                 <Route path="/characters" component={CharacterPage}/>
//                 <Route path="/houses" component={HousePage}/>
//                 <Route path="/books" exact component={BookPage}/>
//                 <Route path="/books/:id" render={ 
//                     ({match}) => {
//                         const {id} = match.params;
//                         return <BookItem bookId={id}/>}
//                 }/>
//             </Container>
//         </div>
//     </Router>
// );


