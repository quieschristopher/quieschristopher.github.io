const laptops = {
  gamer1: {
    nombre: "Laptop Gamer 1 - Lenovo LOQ",
    marca: "Lenovo",
    precioAnterior: "S/ 4,199.00",
    precioActual: "S/ 3,799.00",
    specs: [
      "Procesador: Intel Core i5-12450H (10 núcleos)",
      "Memoria RAM: 24GB DDR5",
      "Almacenamiento: 512GB SSD",
      "Pantalla: 15.6\" FHD 144Hz",
      "Tarjeta gráfica: NVIDIA RTX 3050 8GB"
    ],
    imagenes: [
      "../productos/gamer/gamer1/gamer1.jpg",
      "../productos/gamer/gamer1/gamer1-1.jpg",
      "../productos/gamer/gamer1/gamer1-2.jpg",
      "../productos/gamer/gamer1/gamer1-3.jpg"
    ]
  },

  gamer2: {
    nombre: "Laptop Gamer 2 - HP Victus",
    marca: "HP",
    precioAnterior: "S/ 5,199.00",
    precioActual: "S/ 4,699.00",
    specs: [
      "Procesador: Intel Core i9-13900H",
      "Memoria RAM: 32GB DDR5",
      "Almacenamiento: 1TB SSD",
      "Pantalla: 16\" QHD 165Hz",
      "Tarjeta gráfica: NVIDIA RTX 4060 8GB"
    ],
    imagenes: [
      "../productos/gamer/gamer2/gamer2-1.jpg",
      "../productos/gamer/gamer2/gamer2-2.jpg",
      "../productos/gamer/gamer2/gamer2-3.jpg",
      "../productos/gamer/gamer2/gamer2-4.jpg"
    ]
  },

  gamer3: {
    nombre: "Laptop Gamer 3 - ASUS TUF",
    marca: "ASUS",
    precioAnterior: "S/ 6,499.00",
    precioActual: "S/ 5,999.00",
    specs: [
      "Procesador: AMD Ryzen 7 7840HS",
      "Memoria RAM: 16GB DDR5",
      "Almacenamiento: 1TB SSD",
      "Pantalla: 15.6\" FHD 165Hz",
      "Tarjeta gráfica: NVIDIA RTX 4070 8GB"
    ],
    imagenes: [
      "../productos/gamer/gamer3/gamer3-1.jpg",
      "../productos/gamer/gamer3/gamer3-2.jpg",
      "../productos/gamer/gamer3/gamer3-3.jpg",
      "../productos/gamer/gamer3/gamer3-4.jpg"
    ]
  },

  convertible1: {
    nombre: "Laptop Gamer 1 - Lenovo LOQ",
    marca: "Lenovo",
    precioAnterior: "S/ 4,199.00",
    precioActual: "S/ 3,799.00",
    specs: [
      "Procesador: Intel Core i5-12450H (10 núcleos)",
      "Memoria RAM: 24GB DDR5",
      "Almacenamiento: 512GB SSD",
      "Pantalla: 15.6\" FHD 144Hz",
      "Tarjeta gráfica: NVIDIA RTX 3050 8GB"
    ],
    imagenes: [
      "../productos/convertible/convertible1/convertible1.jpg",
      "../productos/convertible/convertible1/convertible1-1.jpg",
      "../productos/convertible/convertible1/convertible1-2.jpg",
      "../productos/convertible/convertible1/convertible1-3.jpg",
      "../productos/convertible/convertible1/convertible1-4.jpg",
      "../productos/convertible/convertible1/convertible1-5.jpg"
    ]
  },

  convertible2: {
    nombre: "Laptop Gamer 2 - HP Victus",
    marca: "HP",
    precioAnterior: "S/ 5,199.00",
    precioActual: "S/ 4,699.00",
    specs: [
      "Procesador: Intel Core i9-13900H",
      "Memoria RAM: 32GB DDR5",
      "Almacenamiento: 1TB SSD",
      "Pantalla: 16\" QHD 165Hz",
      "Tarjeta gráfica: NVIDIA RTX 4060 8GB"
    ],
    imagenes: [
      "../productos/gamer/gamer2/gamer2-1.jpg",
      "../productos/gamer/gamer2/gamer2-2.jpg",
      "../productos/gamer/gamer2/gamer2-3.jpg",
      "../productos/gamer/gamer2/gamer2-4.jpg"
    ]
  },

  convertible3: {
    nombre: "Laptop Gamer 3 - ASUS TUF",
    marca: "ASUS",
    precioAnterior: "S/ 6,499.00",
    precioActual: "S/ 5,999.00",
    specs: [
      "Procesador: AMD Ryzen 7 7840HS",
      "Memoria RAM: 16GB DDR5",
      "Almacenamiento: 1TB SSD",
      "Pantalla: 15.6\" FHD 165Hz",
      "Tarjeta gráfica: NVIDIA RTX 4070 8GB"
    ],
    imagenes: [
      "../productos/gamer/gamer3/gamer3-1.jpg",
      "../productos/gamer/gamer3/gamer3-2.jpg",
      "../productos/gamer/gamer3/gamer3-3.jpg",
      "../productos/gamer/gamer3/gamer3-4.jpg"
    ]
  }
};


// ===============================
// 🔎 OBTENER ID DE LA URL
// ===============================

const params = new URLSearchParams(window.location.search);
const laptopId = params.get("laptop");

// índice actual para slider/puntitos/swipe
let currentIndex = 0;

if (laptopId && laptops[laptopId]) {

  const laptop = laptops[laptopId];

  // Rellenar datos
  document.getElementById("laptopTitle").textContent = laptop.nombre;
  document.getElementById("laptopMarca").textContent = `Marca: ${laptop.marca}`;
  document.getElementById("precioAnterior").textContent = laptop.precioAnterior;
  document.getElementById("precioActual").textContent = laptop.precioActual;


  // ============================
  // 📌 ESPECIFICACIONES
  // ============================
  const specsList = document.getElementById("laptopSpecs");
  specsList.innerHTML = "";

  laptop.specs.forEach(spec => {
    const li = document.createElement("li");
    li.textContent = spec;
    specsList.appendChild(li);
  });



  // ============================
  // 🖼 IMAGEN PRINCIPAL + MINIATURAS
  // ============================
  const mainImage = document.getElementById("imagenPrincipal");
  const thumbnails = document.getElementById("thumbnails");

  thumbnails.innerHTML = "";
  mainImage.src = laptop.imagenes[0];
  currentIndex = 0; // empezamos en la primera imagen

  laptop.imagenes.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("miniatura");

    if (index === 0) img.classList.add("activa");

    img.addEventListener("click", () => {
      mainImage.src = src;
      currentIndex = index; // sincronizar con slider

      document.querySelectorAll(".miniatura").forEach(m => m.classList.remove("activa"));
      img.classList.add("activa");
      actualizarPuntos(index);
    });

    thumbnails.appendChild(img);
  });

  // 🔥 Puntitos para móvil
  renderSliderPoints(laptop.imagenes);

  // 🔥 Swipe para móvil
  enableSwipe(laptop.imagenes);



  // ============================
  // 💬 BOTÓN WHATSAPP
  // ============================
  const mensaje = `Hola, estoy interesado en la ${laptop.nombre}. ¿Podrías darme más información?`;
  const url = `https://wa.me/51999999999?text=${encodeURIComponent(mensaje)}`;
  document.getElementById("btnWhatsapp").href = url;


} else {
  document.body.innerHTML = "<h2>Laptop no encontrada</h2>";
}



// ===============================
// 📱 SLIDER PARA MÓVIL (PUNTITOS)
// ===============================

function renderSliderPoints(images) {
  const puntos = document.getElementById("puntosSlider");
  puntos.innerHTML = "";

  images.forEach((src, i) => {
    const punto = document.createElement("div");
    punto.classList.add("punto");

    if (i === 0) punto.classList.add("activo");

    punto.addEventListener("click", () => {
      document.getElementById("imagenPrincipal").src = src;
      currentIndex = i;
      actualizarPuntos(i);
    });

    puntos.appendChild(punto);
  });
}

function actualizarPuntos(index) {
  document.querySelectorAll(".punto").forEach((p, i) => {
    p.classList.toggle("activo", i === index);
  });
}



// ======================================
// 📱 SWIPE (DESLIZAR CON EL DEDO)
// ======================================

function enableSwipe(images) {
  // solo en pantallas pequeñas
  if (window.innerWidth > 768) return;

  const imageBox = document.querySelector(".imagen-principal");
  const mainImage = document.getElementById("imagenPrincipal");
  if (!imageBox || !mainImage) return;

  let startX = null;

  imageBox.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  imageBox.addEventListener("touchend", (e) => {
    if (startX === null) return;

    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    // swipe muy corto → ignorar
    if (Math.abs(diff) < 40) {
      startX = null;
      return;
    }

    if (diff > 0) {
      // izquierda → siguiente imagen
      currentIndex++;
      if (currentIndex >= images.length) currentIndex = 0;
    } else {
      // derecha → imagen anterior
      currentIndex--;
      if (currentIndex < 0) currentIndex = images.length - 1;
    }

    mainImage.src = images[currentIndex];
    actualizarPuntos(currentIndex);

    startX = null;
  });
}
