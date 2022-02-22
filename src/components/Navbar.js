import React from 'react';
import ReactLogo from '../images/logo192.png';

function Navbar() {
	return (
		<nav className='navbar'>
			<img src={ReactLogo} alt='' className='navbarLogo' />
			<div className='navbarHeader'>ReactFacts</div>
			<div className='navbarTitle'>React Course - Project 1</div>
		</nav>
	);
}

export default Navbar;
