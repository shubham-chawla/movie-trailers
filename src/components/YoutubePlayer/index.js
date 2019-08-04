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
    position: relative;
`;

const ImageBg = styled.div`
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 50%), url(${props => props.bgImg}) 50% 50% no-repeat;
    filter: blur(5px);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding: 20px;
    position: absolute;
`;

const VideoPlayer = styled.div`
    width: 60%;
    height: 100%;
    z-index: 1;
    margin-right: 20px;
    .cls {
        width: 100%;
        height: 400px;
    }
`;

const DetailLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 400px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    z-index: 1;
`;

const EventGenre = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 10px;
    color: #f0f0f0;
    border: 1px solid #f0f0f0;
    border-radius: 20px;
    padding: 10px;
    height: 15px;
`;

const YoutubePlayer = ({ bgImg, vId, obj }) => (
    <VideoContainer className="YoutubePlayer">
        <ImageBg bgImg={bgImg} />
        <VideoPlayer>
            <Youtube className="cls" videoId={vId} opts={{ playerVars: { autoplay: 1 } }} />
        </VideoPlayer>
        <DetailLayout>
            <div className="big text-bold white">{obj.EventName}</div>
            <div className="small off-white margin-t-10">{obj.EventLanguage}</div>
            <div className="frow">
                {obj.EventGenre &&
                    obj.EventGenre.split('|').map((x, i) => (
                        <EventGenre key={i} className="margin-t-10 margin-r-5">
                            {x}
                        </EventGenre>
                    ))}
            </div>
        </DetailLayout>
    </VideoContainer>
);

export default YoutubePlayer;
