import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../spendee.svg';

export default function Header() {
	return <header className="header">
		<span style={{ fontWeight: 600, color: '#222' }}>
			<img src={logo} alt="" className="header-logo" />
			&gt; Cash Wallet
			</span>
		<ul className="header__nav">
			<li className="nav__item"><NavLink to="/transactions" className="nav__link">Transactions</NavLink></li>
			<li className="nav__item"><NavLink to="/categories" className="nav__link">Categories</NavLink></li>
			<li className="nav__item"><NavLink to="/overview" className="nav__link">Overview</NavLink></li>
		</ul>
		<span style={{fontWeight: '600', color: '#324c5b', fontSize: '1.4rem'}}>Awesome User</span>
	</header>
}