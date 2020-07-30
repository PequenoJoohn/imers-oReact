import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

import { Title } from './styles';

function CadastroVideo() {
  return (
    <PageDefault>
      <Title>Cadastro de Vídeo</Title>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>

    </PageDefault>
  );
}

export default CadastroVideo;
