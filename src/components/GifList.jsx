import React from 'react';
import GifItem from './GifItem';

const GifList = ({ props }) => {
    const gifItems = props.data.map((image) => {
    	return <GifItem key={image.id} gif={image} />
    });
    return (
        <ul>{ gifItems }</ul>
    );
};

export default GifList;
