const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

// Elementos del DOM en una const
const input = document.getElementById('input');
const button = document.getElementById('button');
let caja = document.getElementById('caja');


const clickHandler = (e) => {

// Prevenir accion por defecto
e.preventDefault();

//Definir el numero ingresado en el inputo como numeroId
const numeroId = parseInt(input.value); 

//Buscar que el numero ingesado coincida con una pizza
const pizza = pizzas.find((pizza) => pizza.id === numeroId);

if (pizza) {

// Estructura de la pizza seleccionada
  caja.innerHTML = 
  `
  <div class="card">
    <h2>#:${pizza.id}</h2>
    <img alt="${pizza.nombre}" src="${pizza.imagen}">
    <div class="priceContainer">
      <p>Ingredientes: ${pizza.ingredientes.join(', ')}</p>
      <span>Precio: $${pizza.precio}</span>
    </div>
  </div>
  `;

// Guarda en localStorage
  localStorage.setItem('pizza', JSON.stringify(pizza));

} else {
// Alerta de numero no valido
  alert('El número ingresado no es válido'); 
}};

const pizzaSave = () => {
  const pizzaSave = JSON.parse(localStorage.getItem('pizza'))
  if (pizzaSave) {
    // Estructura de la pizza guardada
      caja.innerHTML = 
      `
      <div class="card">
        <h2>#:${pizzaSave.id}</h2>
        <img alt="${pizzaSave.nombre}" src="${pizzaSave.imagen}">
        <div class="priceContainer">
          <p>Ingredientes: ${pizzaSave.ingredientes.join(' ')}</p>
          <span>Precio: $${pizzaSave.precio}</span>
        </div>
      </div>
      `;
}};

// Funion init
const init = () => {
  button.addEventListener('click', clickHandler)
  window.addEventListener('load', pizzaSave);
};

init();