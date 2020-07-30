import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Title, List, Button } from './styles';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const initialState = {
    name: '',
    description: '',
    color: '#000',
  };

  const [values, setValues] = useState(initialState);
  const [categorias, setCategorias] = useState([]);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChangeValues(e) {
    setValue(
      e.target.getAttribute('name'),
      e.target.value,
    );
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://api-soundflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (response) => {
        const resposta = await response.json();
        setCategorias([...resposta]);
      });
  }, []);

  // setTimeout(() => {
  //   setCategorias([
  //     ...categorias,
  //     {
  //       id: 1,
  //       nome: 'Eletro House',
  //       descricao: 'Si num tem leite então bota uma pinga aí cumpadi! ',
  //       cor: '#000000',
  //     },
  //     {
  //       id: 2,
  //       nome: 'Rock',
  //       descricao: 'Si num tem leite então bota uma pinga aí cumpadi! ',
  //       cor: '#000000',
  //     },
  //   ]);
  // }, 4 * 1000);

  return (
    <PageDefault>
      <Title>Cadastro de Categoria</Title>

      <form onSubmit={(e) => {
        e.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        setValues(initialState);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChangeValues}
        />

        <FormField
          label="Descrição"
          type="text"
          name="description"
          value={values.description}
          onChange={handleChangeValues}
        />

        <FormField
          label="Color"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChangeValues}
        />

        <Button>Cadastrar</Button>

      </form>

      {categorias.length === 0 && (
      <div>
        Loading...
      </div>
      )}

      <List>
        {categorias.map((categoria) => (
          <li key={`${categoria}`}>
            Categoria:
            {' '}
            {categoria.name}
          </li>
        ))}
      </List>

      <Link to="/">
        Voltar para Home
      </Link>

    </PageDefault>
  );
}

export default CadastroCategoria;
