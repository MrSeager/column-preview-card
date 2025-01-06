import React, { FC } from 'react';
//Components
import './PrewCardStyle.css';
import PrewCardCol from './PrewCardCol.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
//Spring
import { useSprings, animated } from '@react-spring/web';
//Images
import FirstImg from '../images/icon-sedans.svg';
import SeconfImg from '../images/icon-suvs.svg';
import ThirdImg from '../images/icon-luxury.svg';

interface lineStringProps {
    head_1: string;
    par_1: string;
    head_2: string;
    par_2: string;
    head_3: string;
    par_3: string;
}

const PrewCard: FC = () => {

    const lineProps: lineStringProps = {
        head_1: 'Sedans',
        par_1: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
        head_2: 'SUVs',
        par_2: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
        head_3: 'Luxury',
        par_3: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    }

    const data = [ 
        { img: FirstImg, header: lineProps.head_1, par: lineProps.par_1, color: 'orange' }, 
        { img: SeconfImg, header: lineProps.head_2, par: lineProps.par_2, color: 'dark-cyan' }, 
        { img: ThirdImg, header: lineProps.head_3, par: lineProps.par_3, color: 'darker-cyan' }, 
    ]; 
    
    const springs = useSprings( 
        data.length, 
        data.map((_, i) => ({ 
            from: { opacity: 0, transform: 'translateX(-150%) scale(0)', borderRadius: '50%' }, 
            to: { opacity: 1, transform: 'translateX(0%) scale(1)', borderRadius: '0' }, 
            delay: i * 200,
            config: {
                tension: 110,
            }
        })) 
    );

    return (
        <Container fluid className='py-5 d-flex flex-column align-items-center justify-content-center min-vh-100'>
            <Row className='cs-w rounded rounded-3 overflow-hidden'> 
                {springs.map((props, index) => ( 
                    <Col key={index} lg={4} xs={12} className='p-0'> 
                        <PrewCardCol 
                            img={data[index].img} 
                            header={data[index].header} 
                            par={data[index].par} 
                            color={data[index].color} 
                            style={props} 
                        /> 
                    </Col> 
                ))} 
            </Row>
        </Container>
    );
}

export default PrewCard;