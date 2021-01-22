import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import './charDetails.css';
import {Term} from '../randomChar/randomChar_hooks';
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

function CharDetails(props) {
    const {getData, itemId} = props;

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            updateItem();
    }, [itemId])

    useEffect(() => {
        setLoading(false)
    }, [loading])

    const getOverlordName = async (url) => {
        const id = await url.match(/[0-9]*$/);
        let lord;
        const result = await getData(id).then((house) => {
            house.overlord = 123;
            return house;
        }).then((house) => {
            lord = house.overlord;
        })
        // console.log(lord);
        // await console.log(`result: ${lord}`);
        return await result;
        // return await lord;
    }
    // getOverlordName('https://www.anapioficeandfire.com/api/houses/229');
    const some = async () => await getOverlordName('https://www.anapioficeandfire.com/api/houses/229');
    console.log(some);

    function updateItem() {
        if(!itemId) {
            return;
        }
        
        getData(itemId)
            .then((item) => {
                // console.log(item);
                // item.overlord = getOverlordName(`${item.overlord}`);
                // console.log(item.overlord);
                const id = item.overlord.match(/[0-9]*$/);
                const result = getData(id).then((house) => {
                    return house.name;
                })
                // console.log(result);
                setItem(item);
            })
    }

    // const getOverlordName = (url) => {
    //     if (url) {
    //         const id = url.match(/[0-9]*$/);
    //         getData(id).then((house) => {
    //             console.log(house.name);
    //             return house.name;
    //         })
    //     } else {
    //         return 'no data:(';
    //     }
    // }

    if(!item) {
        return <span className="select-error">Please select a character</span>
    }
    const name = item.name;

    const View = (item) => {
        return (
            <>
            <CharName>{name}</CharName>
            <ul className="list-group list-group-flush">
                {
                    React.Children.map(props.children, (child) => { //Перебор всех пропсов у детей этого компонента, см. в app.js
                        return React.cloneElement(child, item)
                    })
                }
                
            </ul>
        </>
        );
    }

    const spinner = loading ? <Spinner/> : null;
    const content = !loading ? <View item={item} /> : null;

    return (
        <CharDetailsBlock className="rounded">
            {spinner}
            {content}
        </CharDetailsBlock>
    );
}

export default CharDetails;

// export default class CharDetails extends Component {

//     gotService = new gotService();

//     state = {
//         item: null,
//         loading: true
//     }

//     componentDidMount() {
//         this.updateItem();
//     }

//     componentDidUpdate(prevProps) {
//         if (this.props.itemId !== prevProps.itemId) {
//             this.updateItem();
//         }
//     }

//     updateItem() {
//         const {itemId} = this.props;
//         if(!itemId) {
//             return;
//         }
        
//         this.props.getData(itemId)
//             .then((item) => {
//                 this.setState({
//                     item,
//                     loading: false
//                 })
//             })
//         // this.foo.bar = 0;
//     }
    
//     render() {
//         if(!this.state.item) {
//             return <span className="select-error">Please select a character</span>
//         }
//         const {item, loading} = this.state;

//         const View = ({item}) => {
//             const {name} = item;
//             return (
//                 <>
//                 <CharName>{name}</CharName>
//                 <ul className="list-group list-group-flush">
//                     {/* {this.props.children}  Все компоненты которые переданы выше в Field */}
//                     {
//                         React.Children.map(this.props.children, (child) => {
//                             return React.cloneElement(child, {item})
//                         })
//                     }
//                 </ul>
//             </>
//             );
//         };

//         const spinner = loading ? <Spinner/> : null;
//         const content = !loading ? <View item={item} /> : null;

//         return (
//             <CharDetailsBlock className="rounded">
//                 {spinner}
//                 {content}
//             </CharDetailsBlock>
//         );
//     }
// }




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
