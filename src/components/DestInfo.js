import React from 'react';

const DestInfo = ({ location, p, distance, eta }) => {
    return (
        <div className='dest-info'>
            <h1 className='dest-info-title'>{location}</h1>
            <p className='dest-info-txt'>{p}</p>
            <div className='header-line dest-line' />
            <div className='dest-container'>
                <div className='dest-fact-container'>
                    <p className='dest-subtitle'>AVG. DISTANCE</p>
                    <p className='dest-fact'>{distance}</p>
                </div>
                <div className='dest-fact-container'>
                    <p className='dest-subtitle'>EST. TRAVEL TIME</p>
                    <p className='dest-fact'>{eta}</p>
                </div>
            </div>
        </div>
    );
};

export default DestInfo;