import React from 'react';
import Banner from '../Banner/Banner';
import Contacts from '../Contacts/Contacts';
import Review from '../Review/Review';
import WatchItems from '../WatchItems/WatchItems';

const Home = () => {
    return (
        <div id="#home">
            <Banner />
            <WatchItems />
            <Review></Review>
            <Contacts></Contacts>
        </div>
    );
};

export default Home;