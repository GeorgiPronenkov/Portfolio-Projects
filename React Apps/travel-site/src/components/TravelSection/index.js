import React, {useState} from 'react';
import Video from '../videos/video.mp4';
import {
    TravelContainer,
    TravelBg,
    VideoBg,
    TravelContent,
    TravelH1,
    TravelP,
    TravelBtnWrapper,
    ArrowForward,
    ArrowRight
} from './TravelElements'
import { Button } from '../ButtonElements';

const TravelSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }

    return (
        <TravelContainer>
            <TravelBg>
                <VideoBg
                    autoPlay
                    loop
                    muted
                    src={Video}
                    type='video.mp4'
                />
            </TravelBg>
            <TravelContent>
                <TravelH1>Travel whereever you want!</TravelH1>
                <TravelP>Sign up for a new account now and receive discount ticket for your next destination!</TravelP>
                <TravelBtnWrapper>
                    <Button
                        to="signup"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                    >
                        Get started { hover ? <ArrowForward /> : <ArrowRight /> }
                    </Button>
                </TravelBtnWrapper>
            </TravelContent>
        </TravelContainer>
    )
};

export default TravelSection;
