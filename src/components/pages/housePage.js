import React, { Component } from 'react';
import gotService from '../../services/gotService';
import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
import ErrorMessage from '../errorMessage';
import RowBlock from '../rowBlock';

class HousePage extends Component {

    gotService = new gotService();
    state = {
        selectedHouse: 1,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id
        })
    }
    componentDidUpdate(prevProps) {
        if (this.props.selectedId !== prevProps.selectedId) {
            this.setState({
                selectedHouse: this.props.selectedId
            })
        }
    }
        
    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllHouses}
                renderItem={({name}) => name} />
        );

        const houseDetails = (
            <CharDetails
            itemId={this.state.selectedHouse}
            getData={this.gotService.getHouse}>
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
                <Field field='overlord' label='Overlord'/>
                {/* <Field field='ancestralWeapons' label='Ancestral weapons'/> */}
            </CharDetails>
        );

        return (
            <RowBlock left={itemList} right={houseDetails}/>
        )
    }

};

export default HousePage;
