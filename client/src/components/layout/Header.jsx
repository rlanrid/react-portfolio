import React from 'react'
import nav from '../../data/nav.js'

const Header = () => {
    return (
        <header id="header">
            <div className="header__wrap containerH">
                <div className="header__container">
                    <div className="header__logo">
                        <div className="logo__text">
                            <a href="/">
                                Frontend Developer - W<i>oojoo</i><em>K<i>im</i></em>
                            </a>
                        </div>
                    </div>
                    <nav className="nav">
                        <ul>
                            {nav.map((navItem, key) => (
                                <li key={key}>
                                    <a href={navItem.url} className="nav__link">{navItem.title}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="nav__mobile__menu" id="navToggle" aria-controls="primary-menu" aria-expanded="false"
                        role="button">
                        <span></span>
                    </div>
                </div>
                <div className="header__line"></div>
            </div>
        </header>
    )
}

export default Header
