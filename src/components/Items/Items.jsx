import './Items.css';
import { Item } from '../Item/Item';
import PropTypes from 'prop-types';

export const Items = ({ onDelet, data }) => {
    const id = () => {
        const randomNumber1 = Math.floor(Math.random() * 1000);
        const randomNumber2 = Math.floor(Math.random() * 10000);
        return randomNumber1 + randomNumber2;
    };

    const sortElems = (date1, date2) => {
        const a = date1.split('.');
        const b = date2.split('.');
        return b[2] - a[2] || b[1] - a[1] || b[0] - a[0];
    };

    return (
        <div className='wrapper'>
            <div className='wrapper-title'>
                <div>
                    <h4>Дата (ДД/MM/ГГ)</h4>
                </div>
                <div>
                    <h4>Пройдено (км)</h4>
                </div>
                <div>
                    <h4>Действия</h4>
                </div>
            </div>
            <div className='container'>
                <div className='container-title'>
                    {data
                        .sort((a, b) => sortElems(a.date, b.date))
                        .map((item) => {
                            return <Item onDelet={onDelet} item={item} key={id()}/>;
                        })}
                </div>
            </div>
        </div>
    );
};

Items.propTypes = {
    onDelet: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
};
