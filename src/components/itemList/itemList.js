import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';

const ListGroup = styled.ul`
    background-color: #fff;
    opacity: 0.8;
`;

const ListGroupItem = styled.li`
    cursor: pointer;
`;

function ItemList({getData, renderItem, onItemSelected}) {

    const [itemList, updateList] = useState([]);

    useEffect(() => {
        getData()
            .then((data) => {
                updateList(data)
            })
    }, []);

    const renderItems = (arr) => {
        return arr.map((item) => {
            const {id} = item;
            const label = renderItem(item);
            
            return (
                <ListGroupItem
                key={id[0]}
                className="list-group-item"
                onClick={ () => onItemSelected(id[0]) }>
                    {label}
                </ListGroupItem>
            );
            
        })
    }

    if(!itemList) { //Если пустой то будет спиннер
        return <Spinner/>
    }

    const items = renderItems(itemList);

    return (
        <ListGroup>
            {items}
        </ListGroup>
    );
    
}

export default ItemList;