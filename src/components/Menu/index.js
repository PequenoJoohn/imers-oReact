import React from 'react';
import Logo from '../../assets/img/littleflix.png';
import Button from '../Button';

import { MenuWrapper, LogoImage } from './styles.js';

function Menu() {
    return (
        <MenuWrapper>
            <a href="/">
                <LogoImage src={Logo} alt="LittleFlix" />
            </a>

            <Button as="a" href="/">
                Novo Vídeo
            </Button>
        </MenuWrapper>
    )
}

export default Menu;