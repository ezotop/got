import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
margin-top: 50px;
    color: #fff;
    text-align: center;
`;
const Explain = styled.div`
    color: #fff;
    font-size: 29px;
    text-align: center;
`;

const HomePage = () => {
    return (
        <>
            <H1>Welcome to Game of Thrones DB</H1>
            <Explain>The data base where you can find all about characters, houses and books of the universe of Ice And Fire</Explain>
        </>
    );
};

export default HomePage;