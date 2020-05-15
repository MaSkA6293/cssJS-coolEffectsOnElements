import React, { useState } from 'react';
import './index.scss';

const SearchButton = () => {

    const [search, setsearsh] = useState('');

    const handlerInputChange = (value) => {
        setsearsh(value);
    }

    const handlerClick = () => {
        setsearsh('')

    }
    const handlerFinde = () => {

    }

    return (
        <div className="search-button-contaner">
            <div className="search-button">
                <label htmlFor="search-button__input" onClick={() => handlerClick()} />
                <input
                    type='text'
                    placeholder='search'
                    id="search-button__input"
                    value={search}
                    onChange={(e) => handlerInputChange(e.target.value)}
                />
                <div className="search-button__button" onClick={() => handlerFinde()}></div>
            </div >
        </div>
    )
}
export default SearchButton