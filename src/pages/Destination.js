import React from 'react';

import moon from '../assets/destination/image-moon.png';

import Header from '../components/Header';
import DestInfo from '../components/DestInfo';

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
                    <DestInfo 
                        location='moon'
                        p={`See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`}
                        distance='384,400 KM'
                        eta='3 DAYS'
                    />
                </div>
            </div>
        </div>
    );
};

export default Destination;
