import React from 'react';
import { HomeWrapper } from './Home.style';
import { Gallery, Settings } from '../../Layout';

const Home = () => (
    <HomeWrapper>
        <Settings />
        <Gallery />
    </HomeWrapper>
);

export default Home;