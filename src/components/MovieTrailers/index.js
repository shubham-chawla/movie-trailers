import React from 'react';
import Header from '../Header';
import ListItems from '../ListItems';

const MovieTrailers = ({ data }) =>
    data ? (
        <div className="MovieTrailers max-width-container margin-t-10">
            <Header />
            <ListItems data={data[1]} className="margin-t-20" />
        </div>
    ) : (
        <div className="max-width-container">Loading...</div>
    );

export default MovieTrailers;
