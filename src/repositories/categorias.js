import URL_BACKEND from '../config';

const URL_CATEGORIES = `${URL_BACKEND}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`).then(async (response) => {
    if (response.ok) {
      const resposta = await response.json();
      return resposta;
    }

    throw new Error('Error Unknow');
  });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();
        return resposta;
      }

      throw new Error('Error Unknow');
    });
}

export default { getAll, getAllWithVideos };
