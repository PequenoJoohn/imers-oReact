import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/soundflix.png';
import Button from '../Button';

import { MenuWrapper, LogoImage } from './styles';

function Menu() {
  return (
    <MenuWrapper>
      <Link to="/">
        <LogoImage src={Logo} alt="LittleFlix" />
      </Link>

      <Button as={Link} to="/cadastro/video">
        Novo Vídeo
      </Button>
    </MenuWrapper>
  );
}

export default Menu;
