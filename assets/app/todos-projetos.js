var containerProjetos = document.querySelector('#projetos__container');

var projetos = [
    {   
        "url": 'https://optimustech-eight.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/projeto-optimustech.png',
        "titulo": 'Projeto Optimus Tech',
        "tecnologia": 'HTML e CSS',
        "caracteristica": 'Site não responsivo, apenas desktop.'
    },
    {
        "url": 'https://barbearia-alura-five-omega.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/projeto-barbeariaalura.png',
        "titulo": 'Projeto Barbearia Alura',
        "tecnologia": 'HTML e CSS',
        "caracteristica": 'Site responsivo.'
    },
    {
        "url": 'https://skateecamisaalura.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/skate-e-camisa.png',
        "titulo": 'Projeto HZC',
        "tecnologia": 'JavaScript, HTML e CSS',
        "caracteristica": 'Site responsivo.'
    },
    {
        "url": 'https://alurageek-ecru.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/projeto-alurageek.png',
        "titulo": 'Projeto Alura Geek',
        "tecnologia": 'JavaScript, HTML e CSS',
        "caracteristica": 'Site responsivo.'
    },
    {
        "url": 'https://alurabook-eight-kappa.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/projeto-alurabook.png',
        "titulo": 'Projeto AluraBook',
        "tecnologia": 'HTML e CSS',
        "caracteristica": 'Site responsivo.'
    },
    {
        "url": 'https://aluraplus-six-khaki.vercel.app/',
        "imagem": 'assets/imagens/projetos-imagens/projeto-aluraplus.png',
        "titulo": 'Projeto AluraPlus',
        "tecnologia": 'HTML e CSS',
        "caracteristica": 'Site não responsivo, apenas desktop'
    },
    {
        "url": 'https://aluraapeperia-nine.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/projeto-aluraapeperia.png',
        "titulo": 'Projeto Alura Apeperia',
        "tecnologia": 'HTML e CSS',
        "caracteristica": 'Site responsivo.'
    },
    {
        "url": 'https://alurastore.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/projeto-alurastore.png',
        "titulo": 'Projeto AluraStore',
        "tecnologia": 'HTML e CSS',
        "caracteristica": 'Site responsivo.'
    },
    {
        "url": 'https://aluramidi-lovat.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/projeto-aluramidi.png',
        "titulo": 'Projeto AluraMidi',
        "tecnologia": 'JavaScript, HTML e CSS',
        "caracteristica": 'Site não responsivo, apenas desktop'
    },
    {
        "url": 'https://numerosecreto-omega.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/projeto-numerosecreto.png',
        "titulo": 'Projeto Número Secreto',
        "tecnologia": 'JavaScript, HTML e CSS',
        "caracteristica": 'Site não responsivo, apenas desktop'
    },
    {
        "url": 'https://mochiladeviagem-ten.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/projeto-mochiladeviagem.png',
        "titulo": 'Projeto Mochila de Viagem',
        "tecnologia": 'JavaScript, HTML e CSS',
        "caracteristica": 'Site não responsivo, apenas desktop'
    },
    {
        "url": 'https://alurabookstore.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/projeto-alurabookstore.png',
        "titulo": 'Projeto AluraBook Store',
        "tecnologia": 'JavaScript, HTML e CSS',
        "caracteristica": 'Site não responsivo, apenas desktop'
    },
    {
        "url": 'https://aluraspace-chi.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/aluraspace.png',
        "titulo": 'Projeto Alura Space',
        "tecnologia": 'REACT.JS',
        "caracteristica": 'Site não responsivo, apenas desktop.'
    },
    {
        "url": 'https://olamundo-theta.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/projeto-olamundo.png',
        "titulo": 'Projeto Olá Mundo',
        "tecnologia": 'REACT.JS',
        "caracteristica": 'Site responsivo.'
    },
    {
        "url": 'https://organo-three-xi.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/projeto-organo.png',
        "titulo": 'Projeto Organo',
        "tecnologia": 'REACT.JS',
        "caracteristica": 'Site responsivo.'
    },
    {
        "url": 'https://cinetag-lilac.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/projeto-cinetag.png',
        "titulo": 'Projeto Cinetag',
        "tecnologia": 'REACT.JS',
        "caracteristica": 'Site não responsivo, apenas desktop'
    },

    {
        "url": 'https://feirareactjs.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/projeto-feirareact.png',
        "titulo": 'Projeto Feira React',
        "tecnologia": 'REACT.JS',
        "caracteristica": 'Site responsivo.'
    }
]

function carregarProjetos(projetos) {
    let lista = ''

    projetos.forEach(projeto => {
        lista += `<article class="card__projeto">
                    <a href="${projeto.url}"><img src="${projeto.imagem}" alt="" class="card__imagem"></a>
                    <div class="card__descricao">
                        <h3 class="card__titulo">${projeto.titulo}</h3>
                        <p class="card__texto">${projeto.tecnologia}</p>
                        <p class="card__caracteristica">${projeto.caracteristica}</p>
                    </div>
                </article>`
    })

    containerProjetos.innerHTML = lista;
}

carregarProjetos(projetos)