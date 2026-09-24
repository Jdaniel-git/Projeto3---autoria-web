window.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    window.location.href = 'https://Operações.com';
    event.preventDefault();
  }
});
const textoGame1 = document.getElementById('texto-game1');

textoGame.addEventListener('click', () => {
    textoGame.classList.add('pulsar-rapido');
    textoGame.innerText = 'CARREGANDO...';
    
    setTimeout(() => {
        textoGame.classList.remove('pulsar-rapido');
        textoGame.classList.remove('pulsar'); 
        
        textoGame.innerText = 'FASE 1';
        textoGame.style.color = '#00ffcc';
        textoGame.style.textShadow = '0 0 15px #00ffcc';
    }, 1500);
});
