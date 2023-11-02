import React, { useState } from 'react';
import './Form.css';
import { Items } from '../Items/Items';
import { Valid } from './Valid';

export const Form = () => {
    const [valueDate, setValueDate] = useState({
        date: '',
        distance: '',
    });

    const [items, setItems] = useState([
        {
            date: '15.05.23',
            distance: '10',
        },
        {
            date: '24.09.23',
            distance: '6.7',
        },
        {
            date: '07.05.23',
            distance: '7.4',
        },
    ]);

    const { date, distance } = valueDate;

    const changeHandler = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setValueDate((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const addTask = (evt) => {
        if (valueDate.date.length === 0 || evt.distance.length === 0) {
            alert('Заполните все поля!');
            return;
        }

        if (!Valid(valueDate.date)) {
            alert('Неправильный формат даты');
            return;
        }

        if (items.some((el) => el.date === evt.date)) {
            setItems((prevItems) =>
                prevItems.map((e) => {
                    if (e.date === valueDate.date) {
                        return {
                            ...e,
                            distance: +e.distance + +evt.distance,
                        };
                    }
                    return e;
                })
            );
        } else {
            setItems((prevItems) => [...prevItems, evt]);
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();

        addTask(valueDate);

        setValueDate({
            date: '',
            distance: '',
        });
    };

    const DeletElem = (date) => {
        return setItems(items.filter((e) => e.date !== date))
    }

    return (
        <div>
            <form action='' className='form' onSubmit={submitHandler}>
                <div className='item'>
                    <label htmlFor='date-label' className='date-label'>
                        Дата (ДД/ММ/ГГ)
                    </label>
                    <input
                        type='text'
                        id='date-label'
                        className='input-date'
                        name='date'
                        value={date}
                        placeholder='формат ввода дд.мм.гг'
                        onChange={changeHandler}
                    />
                </div>
                <div className='item'>
                    <label htmlFor='input-distance' className='distance-label'>
                        Пройдено км
                    </label>
                    <input
                        type='text'
                        id='input-distance'
                        name='distance'
                        className='input-distance'
                        placeholder='например: 8 или 4.5'
                        value={distance}
                        onChange={changeHandler}
                    />
                </div>
                <button type='submit' className='btn'>
                    ОК
                </button>
            </form>
            <Items onDelet={DeletElem} data={items}/>
        </div>
    );
};
