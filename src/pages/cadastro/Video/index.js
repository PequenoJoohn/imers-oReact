import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

import { Title, Button } from './styles';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { values, handleChangeValues } = useForm({
    titulo: 'Video Padrão',
    url: 'https://youtu.be/7EvkebaBBg0',
    categoria: 'Front End',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  console.log(categorias);

  return (
    <PageDefault>
      <Title>Cadastro de Vídeo</Title>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaId = categorias.find((categoria) => categoria.titulo === values.categoria);

        console.log(categoriaId);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaId.id,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            return history.push('/');
          });
      }}
      >

        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChangeValues}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChangeValues}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChangeValues}
          suggestions={categoryTitles}
        />

        <Button type="submit">Cadastrar</Button>

      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>

    </PageDefault>
  );
}

export default CadastroVideo;
