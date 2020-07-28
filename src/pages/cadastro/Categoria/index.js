import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

import { Title } from './styles'

function CadastroCategoria() {
    return (
        <PageDefault>
            <Title>Cadastro de Categoria</Title>

            <Link to="/">
                Voltar para Home
            </Link>
            
        </PageDefault>
    )
}

export default CadastroCategoria;