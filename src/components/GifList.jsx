import React from 'react';
import GifItem from './GifItem';

const GifList = ({ gif }) => {
    const gifItems = gif.map((item, i) => {
    	return <GifItem key={i} image={item.images.downsized.url} />
    });
    return (
        <ul>{ gifItems }</ul>
    );
};

export default GifList;
