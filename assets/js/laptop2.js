document.addEventListener("DOMContentLoaded", () => {
  const laptops = {
    // Tu objeto laptops completo aquí (no lo repito por espacio)
  };

  const params = new URLSearchParams(window.location.search);
  const laptopId = params.get("laptop");

  // Inicializar Swiper primero
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });

  function cargarLaptop(laptop) {
    const imagenPrincipal = document.getElementById('imagenPrincipal');
    imagenPrincipal.src = laptop.imagenes[0];

    // Miniaturas para pantallas grandes
    const thumbnailsOriginal = document.getElementById('thumbnails-original');
    thumbnailsOriginal.innerHTML = '';
    laptop.imagenes.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = 'Vista del producto';
      img.className = 'miniatura';
      img.onclick = () => {
        imagenPrincipal.src = src;
        document.querySelectorAll('.miniatura').forEach(m => m.classList.remove('activa'));
        img.classList.add('activa');
      };
      thumbnailsOriginal.appendChild(img);
    });

    // Miniaturas para móviles (Swiper)
    const thumbnailsSwiper = document.getElementById('thumbnails');
    thumbnailsSwiper.innerHTML = '';
    laptop.imagenes.forEach(src => {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.innerHTML = `<img src="${src}" alt="Vista del producto" onclick="document.getElementById('imagenPrincipal').src='${src}'">`;
      thumbnailsSwiper.appendChild(slide);
    });

    swiper.update();
  }

  if (laptopId && laptops[laptopId]) {
    const laptop = laptops[laptopId];

    // Rellenar datos
    document.getElementById("laptopTitle").textContent = laptop.nombre;
    document.getElementById("laptopMarca").textContent = `Marca: ${laptop.marca}`;
    document.getElementById("precioAnterior").textContent = laptop.precioAnterior;
    document.getElementById("precioActual").textContent = laptop.precioActual;

    // Especificaciones
    const specsList = document.getElementById("laptopSpecs");
    specsList.innerHTML = "";
    laptop.specs.forEach(spec => {
      const li = document.createElement("li");
      li.textContent = spec;
      specsList.appendChild(li);
    });

    // Cargar imágenes
    cargarLaptop(laptop);

    // WhatsApp
    const mensaje = `Hola, estoy interesado en la ${laptop.nombre}. ¿Podrías darme más información?`;
    const url = `https://wa.me/51999999999?text=${encodeURIComponent(mensaje)}`;
    document.getElementById("btnWhatsapp").href = url;
  } else {
    document.body.innerHTML = "<h2>Laptop no encontrada</h2>";
  }
});