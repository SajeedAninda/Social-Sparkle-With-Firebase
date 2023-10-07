import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../../Services/Services';
import ChooseUs from '../AboutUs/ChooseUs';
import Clients from '../Clients/Clients';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ChooseUs></ChooseUs>
            <Clients></Clients>
        </div>
    );
};

export default Home;