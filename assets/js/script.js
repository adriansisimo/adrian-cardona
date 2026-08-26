const btn = document.querySelector('.hamburguesa');
const navMenu = document.querySelector('.nav-menu');

btn.addEventListener('click', () => {
  btn.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Cerrar el menú móvil al tocar cualquier link de navegación
document.querySelectorAll('.nav-links').forEach((link) => {
  link.addEventListener('click', () => {
    btn.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// ===== DATOS DE LOS PROYECTOS =====
const proyectos = {
  sportech: {
    titulo: 'SporTech',
    texto: 'Este proyecto es una página web interactiva que estoy desarrollando actualmente para Jóvenes creaTIvos donde aprendo mayor parte de lo que hago.',
    imagen: 'assets/img/sportech.png'
  },
  portfolio: {
    titulo: 'My Portfolio',
    texto: 'Este proyecto es una página web interactiva que muestra información acerca de mí, mis habilidades y lo que aprendo poco a poco. ¡Es la web en donde estás actualmente!',
    imagen: 'assets/img/portfolio.png'
  },
  proximo: {
    titulo: 'Más proyectos vendrán pronto!',
    texto: 'Estate al tanto de mis nuevos proyectos contactándome o siguiéndome en mis redes sociales, las tienes en el footer!',
    imagen: 'assets/img/comingsoon.jpg'
  }
};

// ===== MODAL DE PROYECTOS =====
const modalOverlay = document.querySelector('#modal-overlay');
const modalImg = document.querySelector('#modal-img');
const modalTitle = document.querySelector('#modal-title');
const modalText = document.querySelector('#modal-text');
const modalClose = document.querySelector('#modal-close');
const botonesProyecto = document.querySelectorAll('.btn-conocer-mas');

function abrirModal(id) {
  const data = proyectos[id];
  if (!data) return;

  modalTitle.textContent = data.titulo;
  modalText.textContent = data.texto;

  if (data.imagen) {
    modalImg.src = data.imagen;
    modalImg.alt = data.titulo;
    modalImg.classList.remove('hidden');
  } else {
    modalImg.classList.add('hidden');
  }

  modalOverlay.classList.add('active');
  document.body.classList.add('no-scroll');
}

function cerrarModal() {
  modalOverlay.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

botonesProyecto.forEach((boton) => {
  boton.addEventListener('click', () => abrirModal(boton.dataset.project));
});

modalClose.addEventListener('click', cerrarModal);

// Cerrar si se hace clic fuera del recuadro (en el fondo oscuro)
modalOverlay.addEventListener('click', (evento) => {
  if (evento.target === modalOverlay) cerrarModal();
});

// Cerrar con la tecla Escape
document.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape') cerrarModal();
});
