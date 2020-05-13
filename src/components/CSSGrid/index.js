import React, { useState } from 'react';
import './index.scss';

const CSSGrid = () => {
    const [size, setsize] = useState(100)
    const handlerChange = (e) => {
        setsize(e.target.value);
        let grid = document.querySelector('.grid');
        grid.style.width = `${e.target.value}%`;
        let width = grid.style.width.split('%')[0];
        let main = document.querySelector('main');
        console.log(width)
        if (width < 70) {
            main = document.querySelector('main').style.display = 'none';
            grid.style.gridTemplateColumns = "1fr 1fr";
        }
        else {
            main = document.querySelector('main').style.display = 'block';
            grid.style.gridTemplateColumns = "minmax(20%,25%) 1fr minmax(20%,25%);";
        }

    }
    return (
        <div className="grid">
            <header className='grid__header'>Header</header>
            <nav className='grid__nav nav'>
                <a className='nav__item' href='#'>link 1</a>
                <a className='nav__item' href='#'>link 2</a>
                <a className='nav__item' href='#'>link 3</a>
                <a className='nav__item' href='#'>link 4</a>
            </nav>
            <aside className='grid__aside' >Block aside</aside>
            <main className='grid__main main' >
                <article className='main__item'>article 1</article>
                <article className='main__item'>article 2</article>
                <article className='main__item'>article 3</article>
                <article className='main__item'>article 4</article>
            </main>
            <footer className='grid__footer'>Footer</footer>
            <div className='grid__panel'>
                <span>Width : {size} %</span>
            </div>
            <input type='range' min='50' max='100' className='grid__range-input' id='range-grid' defaultValue='100' onChange={handlerChange}></input>
            <label className='grid__label-input-range' htmlFor='range-grid'>Change size</label>
            <div className='grid__imageBlock imageBlock'>
                <div className='imageBlock__item1'>1</div>
                <div className='imageBlock__item2'>2</div>
                <div className='imageBlock__item3'>3</div>
                <div className='imageBlock__item4'>4</div>
                <div className='imageBlock__item5'>5</div>
                <div className='imageBlock__item6'>6</div>
                <div className='imageBlock__item7'>7</div>
                <div className='imageBlock__item8'>8</div>
                <div className='imageBlock__item9'>9</div>
            </div>
        </div>
    )
}
export default CSSGrid