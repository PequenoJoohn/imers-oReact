import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

import { Title } from './styles'

function CadastroVideo() {
    return (
        <PageDefault>
            <Title>Cadastro de Vídeo</Title>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
            
        </PageDefault>
    )
}

export default CadastroVideo;