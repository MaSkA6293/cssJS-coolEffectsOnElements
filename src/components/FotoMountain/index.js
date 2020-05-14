import React, { useEffect, useState } from 'react';
import './index.scss';


const FotoMountain = () => {
    const [mountain, setmountain] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setmountain(shuffle(initialmountain));
        }, 1500)

    }, [])
    let initialmountain = [
        '1.jpg',
        '2.jpg',
        '3.webp',
        '4.jpg',
        '5.webp',
        '6.jpg'
    ];
    let count = mountain.length;
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handlerClick = (elem, index) => {
        if (count > 0) {
            if (index % 2 > 0) {
                elem.classList.add('mountain__item_go-right');
                count--;
            }
            else {
                elem.classList.add('mountain__item_go-left');
                count--;
            }
        }
        if (count === 0) {
            setTimeout(() => {
                let allMontain = document.querySelectorAll('.mountain__item');
                for (let i = 0; i < allMontain.length; i++) {
                    allMontain[i].classList.remove('mountain__item_go-left');
                    allMontain[i].classList.remove('mountain__item_go-right');
                }
                count = allMontain.length;
                setmountain([...shuffle(initialmountain)]);
            }, 800)
        }
    }

    return (
        mountain ? <div className="fotoMountain-contaner mountain">
            {mountain.map((item, index) => {
                return (
                    <div key={index}
                        className='mountain__item'
                        style={{
                            backgroundImage: `url(../assets/fotomountain/${item})`,
                            left: `${getRandomIntInclusive(0, 20)}px`,
                            transform: `rotate(${getRandomIntInclusive(-15, 15)}deg)`,
                        }}
                        onClick={(e) => handlerClick(e.target, index)} />)
            })}

        </div> : <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
}

export default FotoMountain