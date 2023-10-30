import React from 'react';
import './Items.css';
import { Item } from '../Item/Item';

export const Items = ({ data }) => {
    // console.log(data)
    return (
        <div className='container'>
            <div className='container-title'>
                {data.map((item) => {
                    return <Item item={item} />;
                    // console.log(item)
                })}
            </div>
        </div>
    );
};
