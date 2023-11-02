import React, { useState } from 'react';
import './Items.css';
import { Item } from '../Item/Item';

export const Items = ({ onDelet, data }) => {

    const id = () => {
        const randomNumber1 = Math.floor(Math.random() * 1000);
        const randomNumber2 = Math.floor(Math.random() * 10000);
        return randomNumber1 + randomNumber2;
    };

    const sortElems = (date1, date2) => {
        const a = date1.split('.')
        const b = date2.split('.')
        return b[2] - a[2] || b[1] - a[1] || b[0] - a[0];
    }
    
    return (
        <div className='wrapper' key={id()}>
              <div className='wrapper-title' key={id()}>
                  <div key={id()}>
                      <h4 key={id()}>Дата (ДД/MM/ГГ)</h4>
                  </div>
                  <div key={id()}>
                      <h4 key={id()}>Пройдено (км)</h4>
                  </div>
                  <div key={id()}>
                      <h4 key={id()}>Действия</h4>
                  </div>
              </div>
              <div className='container' key={id()}>
                <div className='container-title' key={id()}>
                    {data
                        .sort((a, b) => sortElems(a.date, b.date))
                        .map((item) => {
                        return <Item onDelet={onDelet} item={item}/>;
                    })}
                </div>
            </div>
          </div>
        
    );
};
