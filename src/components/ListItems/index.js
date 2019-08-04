import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaRegPlayCircle } from 'react-icons/fa';

import YoutubePlayer from '../YoutubePlayer';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: #4a4a4a;
    color: #ffffff;
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    width: 232px;
    min-height: 300px;
    margin: 40px auto;
    padding: 0 10px;
    position: relative;
`;

const CoverLayout = styled.div`
    background-color: rgba(0, 0, 0, 0.1);
    position: absolute;
    height: 300px;
    width: 212px;
`;

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: ${props => props.border && '2px solid #029e72'};
`;

const ListItems = ({ className, data }) => {
    const [vId, setVId] = useState(null);
    const [obj, currObj] = useState(null);
    const [itemIdx, setIdx] = useState(null);
    const [items, setItems] = useState(null);

    useEffect(() => {
        const calculateWidth = () => {
            const width = Math.abs(window.innerWidth - 100);
            const calculatedItems = Math.floor(width / 232);
            setItems(calculatedItems > 5 ? 5 : calculatedItems);
        };

        calculateWidth();
        window.addEventListener('resize', calculateWidth);
        return () => {
            window.removeEventListener('resize', calculateWidth);
        };
    });

    const getItemIndex = index => Math.floor(index / items) * items;

    const getVId = data => data.TrailerURL.split('?v=')[1];

    return (
        <Container className={`ListItems ${className || ''}`}>
            {Object.keys(data).map((x, i) => (
                <React.Fragment key={i}>
                    {vId && i === itemIdx && <YoutubePlayer vId={vId} bgImg={`https://in.bmscdn.com/events/moviecard/${obj.EventImageCode}.jpg`} />}
                    <Item key={i}>
                        <StyledImage border={vId === getVId(data[x])} src={`https://in.bmscdn.com/events/moviecard/${data[x].EventImageCode}.jpg`} alt={data[x].EventImageCode} />
                        {vId !== getVId(data[x]) && <CoverLayout />}
                        <div className="small white margin-t-5">{data[x].EventName}</div>
                        {vId !== getVId(data[x]) && (
                            <FaRegPlayCircle
                                className="play-btn white"
                                onClick={() => {
                                    setIdx(getItemIndex(i));
                                    setVId(getVId(data[x]));
                                    currObj(data[x]);
                                }}
                            />
                        )}
                    </Item>
                </React.Fragment>
            ))}
        </Container>
    );
};

export default ListItems;
