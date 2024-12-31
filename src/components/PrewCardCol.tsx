import React, { FC } from 'react';
//Components
import './PrewCardStyle.css';
//Bootstrap
import { Col, Image, Button } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';

interface PrewCardColProps {
    img: string;
    header: string;
    par: string;
    color: string;
}

const PrewCardCol: FC<PrewCardColProps> = ({ img, header, par, color }) => {
    return (
        <Col lg={4} xs={12} className={`cs-bg-${color} p-5 d-flex flex-column align-items-start gap-4`}>
            <Image fluid src={img} alt='image logo' />
            <h1 className='cs-ff-bsd cs-fc-white'>{header}</h1>
            <p className='cs-fc-white'>{par}</p>
            <Button className={`cs-btn border-2 rounded-pill px-4 cs-bg-white cs-tc-${color}`}>Learn More</Button>
        </Col>
    );
}

export default PrewCardCol;