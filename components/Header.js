app.component('header-banco', {
    // props: ['valor', 'fecha'], 
    props: {
        username: { type: String, required: true },
        tituloapp: { type: String, required: true },
    },
    template: /*html*/`
        
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">{{ tituloapp }}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </div>
      <div class="navbar-nav ml-auto text-white">
      Bienvenido: <h4> {{username}} </h4> 
      </div>
    </div>
  </div>
</nav>
    `,
    data() {
         return {
            textoComponent: 'Footer de mi sitio web dinámico',
        }
    }
})


