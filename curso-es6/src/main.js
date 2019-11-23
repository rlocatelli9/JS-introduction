import api from './api'

class App {
  constructor() {
    this.repositories = [];
    this.formReference = document.getElementById('repo-form');
    this.listReference = document.getElementById('repo-list');
    this.inputReference = document.querySelector('input[name=repository]')
    this.registerHandlers();
  }

  registerHandlers() {
    this.formReference.onsubmit = event => this.addRepository(event);
  }

  setLoading(loading = true) {
    if (loading === true) {
      let loadingReference = document.createElement('span')
      loadingReference.appendChild(document.createTextNode('Carregando'))
      loadingReference.setAttribute('id', 'loading')

      this.formReference.appendChild(loadingReference)
    } else {
      document.getElementById('loading').remove()
    }
  }

  async addRepository(event) {
    //não deixa form recarregar pagina
    event.preventDefault();

    const repoInput = this.inputReference.value;
    if (repoInput.length === 0)
      return

    this.setLoading()

    try {
      //listar todos repositórios do usuário
      //const response = await api.get(`/users/${repoInput}/repos`)

      //listar diretorio especifico do usuário: ...repos/user/repositorio
      const response = await api.get(`/repos/${repoInput}`)

      const { name, description, html_url, owner: { avatar_url } } = response.data

      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url,
      })
      this.inputReference.value = '';
      this.render();
    } catch (err) {
      alert('O repositório não existe!')
      this.inputReference.value = '';
    }

    this.setLoading(false);
  }

  render() {
    this.listReference.innerHTML = '';
    this.repositories.forEach(repo => {
      let imgElement = document.createElement('img');
      imgElement.setAttribute('src', repo.avatar_url);
      imgElement.setAttribute('alt', `Avatar do repositório ${repo.name}`);

      let titleElement = document.createElement('strong');
      titleElement.appendChild(document.createTextNode(repo.name))

      let descriptionElement = document.createElement('p');
      descriptionElement.appendChild(document.createTextNode(repo.description))

      let linkElement = document.createElement('a');
      linkElement.setAttribute('target', '_blank')
      linkElement.setAttribute('href', repo.html_url)
      linkElement.appendChild(document.createTextNode('Acessar'))

      let lstElement = document.createElement('li')
      lstElement.appendChild(imgElement);
      lstElement.appendChild(titleElement);
      lstElement.appendChild(descriptionElement);
      lstElement.appendChild(linkElement);

      this.listReference.appendChild(lstElement)

    })
  }
}
new App();