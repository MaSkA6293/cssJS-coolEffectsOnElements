import React from 'react';
import './index.scss';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const LeftPanel = ({ list }) => {
    let history = useHistory();
    return (
        <div className='leftPanel'>
            <div className='leftPanel__title'>
                <h2>Skills</h2>
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

LeftPanel.propTypes = {
    list: PropTypes.array
}
export default LeftPanel