import React from 'react';
import './index.scss';
import { useHistory } from 'react-router-dom';


const LeftPanel = ({ list }) => {
    let history = useHistory();
    return (
        <div className='leftPanel'>
            <div className='leftPanel__title'>
                <h2>Меню</h2>
            </div>
            <div className='leftPanel__list'>
                <ul className='leftPanel__nav nav'>
                    {list.map((item, index) => {
                        return (
                            <li key={index} className='nav__item' onClick={() => history.push(`/list/${item.id}`)}>{item.title}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
export default LeftPanel