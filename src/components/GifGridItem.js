import React from 'react';
import PropTypes from "prop-types";

export const GifGridItem = ({ title, url }) => {

    //console.log( id, title, url );
    const titleLength = title.indexOf('GIF');
    const titleShort = title.substring( 0, titleLength ).trim();


    return (
        <div className='card animate__animated animate__fadeIn'>
            <div className='img'>
                <img src={ url } alt={ titleShort } />
                <p> { titleShort } </p>
            </div>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}