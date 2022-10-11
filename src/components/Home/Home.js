import React from 'react';
import Feedback from '../Feedback/Feedback';

import Header from '../Header/Header';
import Package from '../Package/Package';
import Topics from '../Topics/Topics';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Topics></Topics>
            <Package></Package>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;