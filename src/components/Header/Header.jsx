import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

const Header = () => {
    return (
        <Navbar>
            <Container className='nav-bar'>
                <Navbar.Brand className='navbar-brand' href="#home">Knowledge Cafe</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <img className='nav-profile' src="https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/318930549_1789874011375223_2519543062550349521_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BYRPWjb-KK0AX-sHm91&_nc_ht=scontent.fdac24-4.fna&oh=00_AfB1TdHARqSi4LSzpNHrPF6iVfN2XUFzH73fPa3NED6xdA&oe=642D4A56" alt="" />
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;