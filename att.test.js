const axios = require('axios');
const { test, expect } = require('@jest/globals');

test('Busca por ID específico', async () => {
  const idEsperado = 2;
  const resposta = await axios.get(`https://minhaapi.com/itens/${idEsperado}`);

  expect(resposta.status).toBe(200);
  expect(resposta.data.id).toBe(idEsperado);
});