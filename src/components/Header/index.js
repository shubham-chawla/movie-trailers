import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
    display: flex;
    height: 30px;
    padding: 5px;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${props => props.bg || '#4a4a4a'};
    cursor: pointer;
    border-radius: 2px;
    color: ${props => props.color || '#fff'};
    border: ${props => props.border};
`;

const Header = () => (
    <div className="Header">
        <div className="frow f-space-between">
            <div className="frow center">
                <span className="big solid margin-l-20">Movie Trailers</span>
                <Button bg="#029e72" className="margin-l-10 small">
                    COMING SOON
                </Button>
                <Button className="margin-l-10 small">NOW SHOWING</Button>
            </div>
            <div className="frow center">
                <Button border="1px solid #029e72" color="#029e72" bg="#000" className="margin-l-10 small">
                    Filter1
                </Button>
                <Button border="1px solid #029e72" color="#029e72" bg="#000" className="margin-l-10 small">
                    Filter2
                </Button>
            </div>
        </div>
    </div>
);

export default Header;
