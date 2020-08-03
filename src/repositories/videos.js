import config from '../config';

const URL_VIDEOS = `${config.URL_TOP}/videos`;

function create(objectVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objectVideo),
  })
    .then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();
        return resposta;
      }

      throw new Error('Não foi possível cadastrar os dados no servidor!');
    });
}

export default {
  create,
};
