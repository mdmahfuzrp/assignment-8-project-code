import React from 'react';
import './Footer.css'
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container className='footer-container'>
            <div className='footer'>
                <p>Copyright &copy; 2023- Code by S. Ranu</p>
            </div>
        </Container>
    );
};

export default Footer;