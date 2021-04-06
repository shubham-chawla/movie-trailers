import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaRegPlayCircle } from 'react-icons/fa';

import YoutubePlayer from '../YoutubePlayer';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
    -ms-grid-columns: (1fr)[${({ columns }) => columns}];
    grid-gap: 30px;
    padding: 20px;
    background-color: #4a4a4a;
    color: #ffffff;
    transition: all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

const CoverLayout = styled.div`
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 50%);
    background-size: cover;
    position: absolute;
    height: 100%;
    width: 100%;
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
    const [items, setItems] = useState(5);

    useEffect(() => {
        const calculateWidth = () => {
            const width = Math.abs(window.innerWidth - 100);
            const calculatedItems = Math.floor(width / 250);
            setItems(calculatedItems);
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
        <Container columns={items} className={`ListItems ${className || ''}`}>
            {Object.keys(data).map((x, i) => (
                <React.Fragment key={i}>
                    {vId && i === itemIdx && <YoutubePlayer columns={items} vId={vId} obj={obj} bgImg={`https://in.bmscdn.com/events/moviecard/${obj.EventImageCode}.jpg`} />}
                    <Item key={i}>
                        <StyledImage border={vId === getVId(data[x])} src={`https://in.bmscdn.com/events/moviecard/${data[x].EventImageCode}.jpg`} alt={data[x].EventImageCode} />
                        {vId !== getVId(data[x]) && <CoverLayout />}
                        <div className="small white margin-t-5 zIndex">{data[x].EventName}</div>
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
