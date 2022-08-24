import React from 'react';
import { Link } from 'react-router-dom';

// import components
import Header from '../components/Header';

const Home = () => {
    return (
        <div className='homepage'>
            <Header />
            <div className='home-main'>
                <div className='home-info'>
                    <p className='home-txt-lg'>SO, YOU WANT TO TRAVEL TO</p>
                    <h1 className='home-title'>SPACE</h1>
                    <p className='home-txt-sm'>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
                </div>
                <Link to='/space-tour/destination' className='link'>
                    <div className='explore-btn'>
                        <div className='explore-effect' />
                        <p>EXPLORE</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Home;