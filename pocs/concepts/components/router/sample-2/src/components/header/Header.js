import React from 'react'

import Menu from '../menu'

import './Header.css'

const Header = () => (
    <header className="app-header">
        <span className="app-header__logo"/>
        <Menu />
    </header>
)

export default Header