import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

import { Title, Form } from './styles'

function CadastroCategoria() {
    return (
        <PageDefault>
            <Title>Cadastro de Categoria</Title>

            <Form>

                <label>
                    Nome da Categoria:
                    <input
                        type="text"
                    />
                </label>

                <button>Cadastrar</button>

            </Form>

            <Link to="/">
                Voltar para Home
            </Link>

        </PageDefault>
    )
}

export default CadastroCategoria;