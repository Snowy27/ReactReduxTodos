import React from 'react';
import PropTypes from 'prop-types';

const LinksList = ({onClick}) => (
    <ul className="links">
        <li>
            <a href="#" onClick={(event) => onClick(event, 'ALL')}>
                Show All
            </a>
        </li>
        <li>
            <a href="#" onClick={(event) => onClick(event, 'OPENED')}>
                Show Opened
            </a>
        </li>
        <li>
            <a href="#" onClick={(event) => onClick(event, 'CLOSED')}>
                Show Closed
            </a>
        </li>
    </ul>
);

LinksList.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default LinksList;
