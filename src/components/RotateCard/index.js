import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faVk, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './index.scss';

const RotateCard = () => {
    return (
        <div className="rotate-card-contaner">
            <div className='card'>
                <div className='card__face'></div>
                <div className='card__back'>
                    <h1>Oleg Shkalikov</h1>
                    <span>Front-end Developer</span>
                    <ul className='socials'>
                        <li><a href='#' ><FontAwesomeIcon icon={faGithub} /></a></li>
                        <li><a href='#' ><FontAwesomeIcon icon={faVk} /></a></li>
                        <li><a href='#' ><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li><a href='#' ><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    </ul>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RotateCard