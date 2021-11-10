import React from 'react';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import WatchItems from '../WatchItems/WatchItems';

const Home = () => {
    return (
        <div id="#home">
            <Banner />
            <WatchItems />
            <Review></Review>
        </div>
    );
};

export default Home;