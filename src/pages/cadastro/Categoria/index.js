import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

import { Title, List } from './styles'
import { FormField, FormTextArea } from '../../../components/FormField';

function CadastroCategoria() {

    const initialState = {
        name: '',
        description: '',
        color: '#000'
    }

    const [values, setValues] = useState(initialState);
    const [categorias, setCategorias] = useState([]);

    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value
        })
    }

    function handleChangeValues(e) {
        setValue(
            e.target.getAttribute('name'),
            e.target.value
        );
    }

    return (
        <PageDefault>
            <Title>Cadastro de Categoria</Title>

            <form onSubmit={(e) => {
                e.preventDefault();
                setCategorias([
                    ...categorias,
                    values,
                ]);
                setValues(initialState)
            }}>

                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChangeValues} />

                <FormTextArea
                    label="Descrição"
                    type="text"
                    name="description"
                    value={values.description}
                    onChange={handleChangeValues} />

                <FormField
                    label="Color"
                    type="color"
                    name="color"
                    value={values.color}
                    onChange={handleChangeValues}
                />

                <button>Cadastrar</button>

            </form>

            <List>
                {categorias.map((categoria, index) => {
                    return (
                        <li key={`${categoria}${index}`}>
                            Nome: {categoria.name}
                            Categoria: {categoria.description}
                            Cor: {categoria.color}
                        </li>
                    )
                })}
            </List>

            <Link to="/">
                Voltar para Home
            </Link>

        </PageDefault >
    )
}

export default CadastroCategoria;
