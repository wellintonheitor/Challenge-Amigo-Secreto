//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {

    let campoTexto = document.querySelector('#amigo');
    let nomeAmigo = campoTexto.value.trim();

    if (nomeAmigo != '') {
        amigos.push(nomeAmigo);
        console.log(amigos);
        campoTexto.value = '';
    
        atualizarListaAmigos();

    } else {
        alert('Por favor, insira um nome.');

    }
    
}

function atualizarListaAmigos() {
    let listaAmigos = document.querySelector('#listaAmigos');

    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {

        let nomeAmigo = amigos[i];

        let itemLista = document.createElement('li');
        itemLista.textContent = nomeAmigo;

        listaAmigos.appendChild(itemLista);
}
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceAleatorio];

    let elementoResultado = document.querySelector('#resultado');
    elementoResultado.innerHTML = `Amigo sorteado: <strong>${nomeSorteado}</strong>`;

}
