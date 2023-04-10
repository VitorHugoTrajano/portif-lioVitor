var containerProjetos = document.querySelector('#projetos__container');

var projetos = [
    {
        "url": 'https://optimustech-eight.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/projeto-optimustech.png',
        "titulo": 'Projeto Optimus Tech',
        "descricao": "Projeto feito durante o desafio 7Days on Code proposto pela Alura, pelo Figma recebi o layout de uma empresa de tecnologia e transformei em código aquele layout. O código está em meu Github e o deploy pela Vercel.",
        "tecnologia": " HTML e CSS",
        "caracteristica": 'Projeto apenas para desktop'
    },
    {
        "url": 'https://barbearia-alura-five-omega.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/projeto-barbeariaalura.png',
        "titulo": 'Projeto Barbearia Alura',
        "descricao": "Projeto feito durante as aulas de HTML e CSS da Alura. Neste projeto, incorporamos elementos da web, tratamos de responsividade, formulários, unidades de medida e estilizações com CSS. O código está em meu Github e o deploy pela Vercel.",
        "tecnologia": "HTML e CSS",
        "caracteristica": 'Projeto responsivo.'
    },
    {
        "url": 'https://skateecamisaalura.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/skate-e-camisa.png',
        "titulo": 'Projeto HZC',
        "descricao": "Projeto feito durante as aulas de HTML e CSS da Alura. Neste projeto recebido pelo Figma, foi trabalhado flexbox e grid layout, responsividade, JavaScript e estilizações com CSS. O código está em meu Github e o deploy pela Vercel.",
        "tecnologia": 'JavaScript, HTML e CSS',
        "caracteristica": 'Projeto responsivo.'
    },
    {
        "url": 'https://alurageek-ecru.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/projeto-alurageek.png',
        "titulo": 'Projeto Alura Geek',
        "descricao": "Projeto feito durante uma challenge proposta pela Alura, pelo figma recebi o layout da loja AluraGeek e transformei aquele layout em código. O código está em meu Github e o deploy pela Vercel. Obs: Use o login email: exemplo@gmail.com e senha: 1234Ex",
        "tecnologia": 'JavaScript, HTML e CSS',
        "caracteristica": 'Projeto responsivo.'
    },
    {
        "url": 'https://alurabook-eight-kappa.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/projeto-alurabook.png',
        "titulo": 'Projeto AluraBook',
        "descricao": "Projeto feito durante as aulas de HTML e CSS da Alura. Neste projeto recebido pelo Figma, foi trabalhado flexbox e grid layout, responsividade, acessibilidade e estilizações com CSS. O código está em meu Github e o deploy pela Vercel.",
        "tecnologia": 'HTML e CSS',
        "caracteristica": 'Projeto responsivo.'
    },
    {
        "url": 'https://aluraplus-six-khaki.vercel.app/',
        "imagem": 'assets/imagens/projetos-imagens/projeto-aluraplus.png',
        "titulo": 'Projeto AluraPlus',
        "descricao": "Projeto feito durante as aulas de HTML e CSS da Alura. Neste projeto recebido pelo Figma, foi trabalhado grid layout e flexbox, posicionamentos de elementos, imagens como background e estilizações com CSS. O código está em meu Github e o deploy pela Vercel.",
        "tecnologia": 'HTML e CSS',
        "caracteristica": 'Projeto apenas desktop'
    },
    {
        "url": 'https://aluraapeperia-nine.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/projeto-aluraapeperia.png',
        "titulo": 'Projeto Alura Apeperia',
        "descricao": "Projeto feito durante as aulas de HTML e CSS da Alura. Neste projeto recebido pelo Figma, foi trabalho flexbox e grid layout, posicionamento de elementos, responsividade e estilizações com CSS. O código está em meu Github e o deploy pela Vercel.",
        "tecnologia": 'HTML e CSS',
        "caracteristica": 'Projeto responsivo.'
    },
    {
        "url": 'https://alurastore.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/projeto-alurastore.png',
        "titulo": 'Projeto AluraStore',
        "descricao": "Projeto feito durante as aulas de HTML e CSS da Alura. Neste projeto, foi trabalhado flexblox, grid layout, posicionamento de elementos, responsividade e estilizações com CSS. O código está em meu Github e o deploy pela Vercel.",
        "tecnologia": 'HTML e CSS',
        "caracteristica": 'Projeto responsivo.'
    },
    {
        "url": 'https://aluramidi-lovat.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/projeto-aluramidi.png',
        "titulo": 'Projeto AluraMidi',
        "descricao": "Projeto feito durante as aulas de JavaScript da Alura. Neste projeto, foi trabalhado manipulação do DOM, condições e laços de repetição. O código está em meu Github e o deploy pela Vercel.",
        "tecnologia": 'JavaScript, HTML e CSS',
        "caracteristica": 'Projeto apenas desktop'
    },
    {
        "url": 'https://numerosecreto-omega.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/projeto-numerosecreto.png',
        "titulo": 'Projeto Número Secreto',
        "descricao": "Projeto feito durante as aulas de JavaScript da Alura. Neste projeto, trabalhamos algumas validações, manipulação do DOM, a como utilizar reconhecimento de voz e escutadores de evento. O código está em meu Github e o deploy pela Vercel.",
        "tecnologia": 'JavaScript, HTML e CSS',
        "caracteristica": 'Projeto apenas desktop'
    },
    {
        "url": 'https://mochiladeviagem-ten.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/projeto-mochiladeviagem.png',
        "titulo": 'Projeto Mochila de Viagem',
        "descricao": "Projeto feito durante as aulas de JavaScript da Alura. Neste projeto, trabalhamos com o localStorage, escutadores de eventos, condições e métodos de arrays. O código está em meu Github e o deploy pela Vercel.", 
        "tecnologia": 'JavaScript, HTML e CSS',
        "caracteristica": 'Projeto apenas desktop'
    },
    {
        "url": 'https://alurabookstore.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/projeto-alurabookstore.png',
        "titulo": 'Projeto AluraBook Store',
        "descricao": "Projeto feito durante as aulas de JavaScript da Alura. Neste projeto, trabalhamos com vários métodos de arrays e manipulação do DOM. O código está em meu Github e o deploy pela Vercel.",
        "tecnologia": 'JavaScript, HTML e CSS',
        "caracteristica": 'Projeto apenas desktop'
    },
    {
        "url": 'https://aluraspace-chi.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/aluraspace.png',
        "titulo": 'Projeto Alura Space',
        "descricao": "Projeto feito durante as aulas de React.Js da Alura. Neste projeto, trabalhamos a organização dos componentes, arquivo de estilo contendo variáveis, SASS, absolut imports e praticamos o useState. O código está em meu Github e o deploy pela Vercel.",
        "tecnologia": 'REACT.JS',
        "caracteristica": 'Projeto apenas desktop.'
    },
    {
        "url": 'https://olamundo-theta.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/projeto-olamundo.png',
        "titulo": 'Projeto Olá Mundo',
        "descricao": "Projeto feito durante as aulas de React.Js da Alura. Neste projeto, trabalhamos com SPA(Single Page Aplication) e a biblioteca React Router DOM, Rotas Aninhadas e utilizamos os hooks do React useParams e useLocation. O código está em meu Github e o deploy pela Vercel.",
        "tecnologia": 'REACT.JS',
        "caracteristica": 'Projeto responsivo.'
    },
    {
        "url": 'https://organo-three-xi.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/projeto-organo.png',
        "titulo": 'Projeto Organo',
        "descricao": "Projeto feito durante as aulas de React.Js da Alura. Neste projeto, trabalhamos com a implementação dos componentes, conceito de props, controle de inputs, conceitos do useState e manipular arrays. O código está em meu Github e o deploy pela Vercel.",
        "tecnologia": 'REACT.JS',
        "caracteristica": 'Projeto responsivo.'
    },
    {
        "url": 'https://cinetag-lilac.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/projeto-cinetag.png',
        "titulo": 'Projeto Cinetag',
        "descricao": "Projeto feito durante as aulas de React.Js da Alura. Neste projeto, trabalhamos com rotas dinâmicas e aninhadas, com hooks(useState, useParams, useEffect e useContext) e consumo de API externa. O código está em meu Github e o deploy pela Vercel.",
        "tecnologia": 'REACT.JS',
        "caracteristica": 'Projeto apenas desktop'
    },

    {
        "url": 'https://feirareactjs.vercel.app',
        "imagem": 'assets/imagens/projetos-imagens/projeto-feirareact.png',
        "titulo": 'Projeto Feira React',
        "descricao": "Projeto feito durante as aulas de React.Js da Alura. Neste projeto, gerenciamos estados globais com ContextAPI, vimos a importancia de se retirar responsabilidades dos componentes e usamos hooks personalizados. O código está em meu Github e o deploy pela Vercel.",
        "tecnologia": 'REACT.JS',
        "caracteristica": 'Projeto responsivo.'
    }
]

function carregarProjetos(projetos) {
    let lista = ''

    projetos.forEach(projeto => {
        lista += `<div class="card" id="cards">
                    <div class="card__frente">
                        <img src="${projeto.imagem}" alt="" class="card__imagem">
                        <span class="card__maisinfo">+info no verso</span>
                    </div>
                    <div class="card__atras">
                        <h3 class="card__titulo">${projeto.titulo}</h3>
                        <p class="card__descricao">${projeto.descricao}</p>
                        <ul class="card__lista">
                            <li class="card__lista-item">
                                ${projeto.tecnologia}
                            </li>
                            <li class="card__lista-item">
                                ${projeto.caracteristica}
                            </li>
                        </ul>
                        <a href="${projeto.url}" target="_black" class="card__link">Ver projeto</a>
                    </div>
                </div>`
    })

    containerProjetos.innerHTML = lista;
}

carregarProjetos(projetos)

var cards = document.querySelectorAll('#cards')

var flip = function () {
    this.classList.toggle('card__flip')
}

function girarCard() {
    for (var i = 0; cards.length > i; i++) {
        let cartao = cards[i]

        cartao.addEventListener("click", flip)
    }
}

girarCard()





