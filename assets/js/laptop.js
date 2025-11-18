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
	"../productos/convertible/convertible1/convertible1-5.jpg",

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

// Obtener ID desde la URL
const params = new URLSearchParams(window.location.search);
const laptopId = params.get("laptop");

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

  // Imagen principal y miniaturas
  const mainImage = document.getElementById("imagenPrincipal");
  const thumbnails = document.getElementById("thumbnails");
  thumbnails.innerHTML = "";
  mainImage.src = laptop.imagenes[0];

  laptop.imagenes.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("miniatura");
    if (index === 0) img.classList.add("activa"); // Primera miniatura activa

    img.addEventListener("click", () => {
      mainImage.src = src;

      // Quitar borde de todas las miniaturas
      document.querySelectorAll(".miniatura").forEach(m => m.classList.remove("activa"));

      // Agregar borde a la miniatura seleccionada
      img.classList.add("activa");
    });

    thumbnails.appendChild(img);
  });

  // WhatsApp con mensaje personalizado
  const mensaje = `Hola, estoy interesado en la ${laptop.nombre}. ¿Podrías darme más información?`;
  const url = `https://wa.me/51999999999?text=${encodeURIComponent(mensaje)}`;
  document.getElementById("btnWhatsapp").href = url;

} else {
  document.body.innerHTML = "<h2>Laptop no encontrada</h2>";
}
