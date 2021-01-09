import React, {Component} from 'react';
import Spinner from '../components/spinner';
import ErrorMessage from '../components/errorMessage';
import ItemList from '../components/itemList';

const withData = (View, getData) => {
    return class extends Component {
        state = {
            data: null,
            selected: null
        }
    
        componentDidMount() {
            getData()
                .then((data) => {
                    this.setState({
                        data,
                    })
                    // console.log(this.state.data)
                })
        }

        onItemSelected = (id) => {
            this.setState({
                selected: id
            })
        }
        
        render() {
            console.log(`Result onItemSelected: ${this.state.selected}`)
            if (this.state.error) {
                return <ErrorMessage/>
            }
            const {data} = this.state;
    
            if(!data) { //Если data пустой то будет спиннер
                return <Spinner/>
            }

            return <View
                {...this.props}
                data={data}
                onItemSelected={this.onItemSelected}
                selectedId={this.state.selected}
                />
        }
    }
}

export default withData;