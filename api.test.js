const axios = require('axios')

async function Api(){
    const response = await axios.get('https://api.chucknorris.io/jokes/random')
    return response.data
}
test('Verifica dados objetivos da api', async()=>{
    const dados = await Api()
    expect(dados).toBeDefined();
})