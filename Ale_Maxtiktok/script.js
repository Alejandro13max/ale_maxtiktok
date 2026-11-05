// Selección de elementos del DOM
const liveContainer = document.getElementById('liveContainer');
const chatInput = document.getElementById('chatInput');
const btnEnviarChat = document.getElementById('btnEnviarChat');
const logOutput = document.getElementById('logOutput');

const variantSelect = document.getElementById('variantSelect');
const orderForm = document.getElementById('orderForm');
const userTikTok = document.getElementById('userTikTok');

const btnMenuLive = document.getElementById('btnMenuLive');
const mainContent = document.getElementById('mainContent');

function logEvent(tipo, mensaje) {
  const hora = new Date().toLocaleTimeString();
  const item = document.createElement('div');
  item.textContent = `[${hora}] ${tipo}: ${mensaje}`;
  logOutput.prepend(item);
}

// Evento para alternar la visibilidad de la página completa con el botón hamburguesa
btnMenuLive.addEventListener('click', () => {
  mainContent.classList.toggle('hidden');
  const isVisible = !mainContent.classList.contains('hidden');
  
  if (isVisible) {
    logEvent('SISTEMA', '🔴 Transmisión iniciada: Interfaz desplegada.');
  } else {
    logEvent('SISTEMA', '⚪ Transmisión minimizada: Interfaz oculta.');
  }
});

// Delegación de eventos (Día 1)[cite: 1, 2]
liveContainer.addEventListener('click', (e) => {
  if (e.target.dataset.prod) {
    logEvent('OFERTA_CLICK', `Prenda deportiva seleccionada: "${e.target.dataset.prod}"`);
  } else if (e.target.dataset.action === 'like') {
    logEvent('LIKE_STREAM', '💜 ¡Apoyo masivo enviado al Live deportivo!');
  }
});

liveContainer.addEventListener('dblclick', (e) => {
  if (e.target.dataset.action === 'like' || e.target.classList.contains('video-screen')) {
    logEvent('REACCIÓN_DOBLE', '⚡🔥 ¡Ráfaga de energía y likes en directo!');
  }
});

function enviarComentario() {
  const mensaje = chatInput.value.trim();
  if (mensaje !== '') {
    logEvent('CHAT_MENSAJE', `Comentario en stream: "${mensaje}"`);
    chatInput.value = '';
  }
}

btnEnviarChat.addEventListener('click', enviarComentario);
chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    enviarComentario();
  }
});

// Eventos de formulario (Día 2)[cite: 3, 4]
variantSelect.addEventListener('change', (e) => {
  logEvent('CAMBIO_VARIANTE', `Kit deportivo seleccionado: ${e.target.value}`);
});

orderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const kit = variantSelect.value;
  const usuario = userTikTok.value.trim();
  
  if (usuario !== '') {
    logEvent('COMPRA_EXITOSA', `🏆 Pedido flash confirmado para ${usuario} (${kit})`);
    orderForm.reset();
  }
});