import React from 'react';
import Youtube from 'react-youtube';
import styled from 'styled-components';

const VideoContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding: 20px;
    flex-basis: 100%;
`;

const VideoPlayer = styled.div`
    width: 60%;
    height: 100%;
    margin-right: 20px;
    .cls {
        width: 100%;
    }
`;

const YoutubePlayer = ({ bgImg, vId }) => (
    <VideoContainer className="YoutubePlayer">
        <VideoPlayer>
            <Youtube className="cls" videoId={vId} opts={{ playerVars: { autoplay: 1 } }} />
        </VideoPlayer>
    </VideoContainer>
);

export default YoutubePlayer;
