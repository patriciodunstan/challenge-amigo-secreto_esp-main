// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = []

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    if (nombre === '') {
        alert("Por favor, ingresa un nombre valido")
        return;
    }

    amigos.push(nombre);

    inputAmigo.value = '';

    console.log('Amigos actuales', amigos);

    actualizarListaAmigos()
}

function actualizarListaAmigos() {

    const listaAmigos = document.getElementById('listaAmigos');

    if (listaAmigos) {
        listaAmigos.innerHTML = '';

        amigos.forEach(amigo => {
            const list = document.createElement('li');
            list.textContent = amigo;
            listaAmigos.appendChild(list);
        });
    }
}

function sortearAmigo() {

    if (amigos.length === 0) {
        alert('No hay amigos en al lista, Por favor agregue al menos un amigo')
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoElement = document.getElementById('resultado');
    if (resultadoElement) {
        resultadoElement.innerHTML = `
        <li class="result-item">
           <span>¡El amigo seleccionado es:</span>
           <strong>${amigoSorteado}</strong>
        </li>
        `;
    }

    console.log('Amigo sorteado', amigoSorteado);
}

document.addEventListener('DOMContentLoaded', function () {
    const botonAgregar = document.querySelector('.button-add');
    if (botonAgregar) {
        botonAgregar.addEventListener('click', agregarAmigo);
    }

    if (botonAgregar) {
        botonAgregar.addEventListener('click', sortearAmigo);
    }
})