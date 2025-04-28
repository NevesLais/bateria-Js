// Seleciona todos os elementos com a classe 'key' e converte NodeList para Array
const keys = Array.from(document.querySelectorAll('.key'));
// Adiciona ouvintes de eventos 'transitionend' a todas as teclas para acionar removeTransition
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); 
// Adiciona um ouvinte de eventos à janela que aciona a função playSound quando uma tecla é pressionada
window.addEventListener('keydown', playSound);

// Define uma função que toca um som correspondente a uma tecla pressionada no teclado
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // Seleciona o elemento de áudio correspondente à tecla pressionada
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`); // Seleciona o elemento div correspondente à tecla pressionada
    if (!audio) return; // Se nenhum elemento de áudio for encontrado, sai da função

    key.classList.add('playing'); // Adiciona a classe 'playing' ao elemento div para possivelmente disparar uma animação ou efeito
    audio.currentTime = 0; // Reinicia a posição de reprodução do clipe de áudio para o início
    audio.play(); // Reproduz o clipe de áudio
}

// Define uma função para remover o efeito de transição de um elemento
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // Verifica se a transição que terminou não é 'transform', então sai da função
    e.target.classList.remove('playing'); // Remove a classe 'playing' do elemento que disparou o evento
}