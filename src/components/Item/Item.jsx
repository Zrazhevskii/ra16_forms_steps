import React from 'react';
import './Item.css'

export const Item = ({ item }) => {
    // console.log(item);
    return (
    <div className='box-item'>
        <div className='date'>{item.date}</div>
        <div className='distance'>{item.distance}</div>
        <div className='change'>✎</div>
        <div className='delet'>✘</div>
    </div>
    )
};
