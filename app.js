const friends = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const errorMessage = document.getElementById('error-message');
    const name = input.value.trim();
    if (!name) {
        errorMessage.textContent = "El campo nombre no puede estar vacío";
        return;
    }
    if (!friends.includes(name)) {
        friends.push(name);
        actualizarListaAmigos();
        input.value = '';
        errorMessage.textContent = ''; // Clear error message
    }
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    friends.forEach((friend) => {
        const li = document.createElement('li');
        li.textContent = friend;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    if (friends.length < 2) {
        resultado.textContent = "Debe haber al menos 2 amigos en la lista para realizar el sorteo.";
        return;
    }
    const randomIndex = Math.floor(Math.random() * friends.length);
    const amigoSecreto = friends[randomIndex];
    resultado.textContent = `Amigo Secreto: ${amigoSecreto}`;
}

// Llamar a actualizarListaAmigos para mostrar la lista inicial (vacía)
document.addEventListener('DOMContentLoaded', actualizarListaAmigos);