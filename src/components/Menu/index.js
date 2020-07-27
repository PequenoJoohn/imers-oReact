import React from 'react';
import Logo from '../../assets/img/littleflix.png';

import './index.css';
import Button from '../../components/Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="LittleFlix" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu;