import React from 'react';
import {Col, Row} from 'reactstrap';

const RowBlock = ({left, right}) => {
    return (
        <Row>
            <Col md='6'>
                {left}
                {/* {itemList} */}
            </Col>
            <Col md='6'>
                {right}
                {/* {charDetails} */}
            </Col>
        </Row>
    )
}

export default RowBlock;