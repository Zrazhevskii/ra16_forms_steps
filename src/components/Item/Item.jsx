import React from 'react';
import './Item.css'

export const Item = ({onDelet, item }) => {
    let index = 120;
    
    return (
    <div className='box-item' key={++index}>
        <div className='date' >{item.date}</div>
        <div className='distance'>{item.distance}</div>
        <div className='change' >✎</div>
        <div className='delet' onClick={() => onDelet(item.date)}>✘</div>
    </div>
    )
};
