import React from 'react';

const GifItem = (image) => {
    return (
        <li>
        	<img src={image.url} alt="something" />
        </li>
    );
};

export default GifItem;
