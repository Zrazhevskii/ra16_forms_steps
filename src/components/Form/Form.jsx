import React from 'react';
import './Form.css'

export const Form = () => {
    

    return (
    <div>
        <form action="" className='form'>
            <div className='item'>
                <label htmlFor="date-label" className='date-label'>Дата (ДД/ММ/ГГ)</label>
                <input type="text" id='date-label'className='input-date'/>
            </div>
            <div className='item'>
                <label htmlFor="input-distance" className='distance-label'>Пройдено км</label>
                <input type="text" id='input-distance'className='input-distance'/>
            </div>
            <button className='btn'>ОК</button>
            
        </form>
    </div>)
};
