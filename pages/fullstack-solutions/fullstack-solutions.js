// script.js
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
  
    if (nombre && email && mensaje) {
      alert("Gracias, ${nombre}. Hemos recibido tu mensaje: ${mensaje}. Te contactaremos pronto a ${email}.");
      document.getElementById('contactForm').reset();
    } else {
      alert('Por favor, completa todos los campos.');
    }
  });
  
  document.getElementById('learnMoreBtn').addEventListener('click', function () {
    const extraInfo = document.getElementById('extraInfo');
    if (extraInfo.style.display === 'none') {
      extraInfo.style.display = 'block';
    } else {
      extraInfo.style.display = 'none';
    }
  });
