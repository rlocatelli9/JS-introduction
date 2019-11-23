import Usuario from './modulo-02';
import axios from 'axios';

alert('Opa, meu amigo!')

Usuario.info();

const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => { resolve('OK!') }, 3000)
})

async function handlePromise() {
  const response = await minhaPromise();
  console.log(response);
  console.log("executando a segunda promise");
  console.log(await minhaPromise());
}

handlePromise();

const executaPromise = async () => {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
}

executaPromise();

class Api {
  static async getUserInfo(username) {
    try {
      const resp = await axios.get(`https://api.github.com/users/${username}`)
      console.log(resp);
    } catch (err) {
      console.log('Erro na API');
    }
  }
}

Api.getUserInfo('rlocatelli9')
Api.getUserInfo('rloca')