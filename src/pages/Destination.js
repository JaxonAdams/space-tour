import React, { useState } from 'react';

import moon from '../assets/destination/image-moon.png';
import mars from '../assets/destination/image-mars.png';
import europa from '../assets/destination/image-europa.png';
import titan from '../assets/destination/image-titan.png';

import Header from '../components/Header';
import DestInfo from '../components/DestInfo';

const Destination = () => {
    const [currentDest, setCurrentDest] = useState('moon');

    return (
        <div className='destination'>
            <Header />
            <h1 className='destination-txt-lg'><span>01</span> PICK YOUR DESTINATION</h1>
            <div className='destination-container'>
                {currentDest === 'moon' && <img className='destination-img' src={moon} alt='your destination' />}
                {currentDest === 'mars' && <img className='destination-img' src={mars} alt='your destination' />}
                {currentDest === 'europa' && <img className='destination-img' src={europa} alt='your destination' />}
                {currentDest === 'titan' && <img className='destination-img' src={titan} alt='your destination' />}
                <div className='dest-info-container'>
                    <ul className='dest-nav'>
                        <li className={`dest-link ${currentDest === 'moon' && 'current-page'}`} onClick={() => setCurrentDest('moon')}>
                            MOON
                        </li>
                        <li className={`dest-link ${currentDest === 'mars' && 'current-page'}`} onClick={() => setCurrentDest('mars')}>
                            MARS
                        </li>
                        <li className={`dest-link ${currentDest === 'europa' && 'current-page'}`} onClick={() => setCurrentDest('europa')}>
                            EUROPA
                        </li>
                        <li className={`dest-link ${currentDest === 'titan' && 'current-page'}`} onClick={() => setCurrentDest('titan')}>
                            TITAN
                        </li>
                    </ul>
                    {currentDest === 'moon' &&
                        <DestInfo 
                            location='moon'
                            p={`See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`}
                            distance='384,400 KM'
                            eta='3 DAYS'
                        />
                    }
                    {currentDest === 'mars' &&
                        <DestInfo 
                            location='mars'
                            p={`Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!`}
                            distance='225 MIL KM'
                            eta='9 MONTHS'
                        />
                    }
                    {currentDest === 'europa' &&
                        <DestInfo 
                            location='europa'
                            p={`The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`}
                            distance='628 MIL KM'
                            eta='3 YEARS'
                        />
                    }
                    {currentDest === 'titan' &&
                        <DestInfo 
                            location='titan'
                            p={`The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`}
                            distance='1.6 BIL KM'
                            eta='7 YEARS'
                        />
                    }
                </div>
            </div>
        </div>
    );
};

export default Destination;
