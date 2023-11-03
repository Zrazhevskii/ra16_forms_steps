import './Item.css';
import PropTypes from 'prop-types';

export const Item = ( props ) => {
    const { key, onDelet, item } = props

    return (
        <div className='box-item' key={key}>
            <div className='date'>
                {item.date}
            </div>
            <div className='distance'>
                {item.distance}
            </div>
            <div className='change'>
                ✎
            </div>
            <div
                className='delet'
                onClick={() => onDelet(item.date)}
            >
                ✘
            </div>
        </div>
    );
};

Item.propTypes = {
    onDelet: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    key: PropTypes.number
};
