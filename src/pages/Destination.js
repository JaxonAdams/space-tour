import React from 'react';

import moon from '../assets/destination/image-moon.png';

import Header from '../components/Header';

const Destination = () => {
    return (
        <div className='destination'>
            <Header />
            <h1 className='destination-txt-lg'><span>01</span> PICK YOUR DESTINATION</h1>
            <div className='destination-container'>
                <img className='destination-img' src={moon} alt='your destination' />
                <div className='dest-info-container'>
                    <ul className='dest-nav'>
                        <li className='dest-link'>
                            MOON
                        </li>
                        <li className='dest-link'>
                            MARS
                        </li>
                        <li className='dest-link'>
                            EUROPA
                        </li>
                        <li className='dest-link'>
                            TITAN
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Destination;
