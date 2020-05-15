import React, { Fragment } from 'react';
import './index.scss';

import PropTypes from 'prop-types';

const ContentPanel = ({ list, component }) => {

    return (
        <Fragment>
            <div className='content-panel__header'>
                <h1>{list.title}</h1>
            </div>
            <div className='content-panel__exemple'>
                {component}
            </div>
        </Fragment>
    )
}
ContentPanel.propTypes = {
    list: PropTypes.object,
    component: PropTypes.node
}

export default ContentPanel