export const products = [
  {
    id: 1,
    title: "Cheddar",
    price: 1400,
    img: require('../assets/img/producto1.avif'),
    category: "Hamburguesas",
    desc: "Carne, chedar, tomate y lechuga",

  },
  {
    id: 2,
    title: "Parrillera",
    price: 1750,
    img: require('../assets/img/producto2.jpg'),
    category: "Hamburguesas",
    desc: "Carne parrillera, chedar, tomate, lechuga y pepino ",

  },
  {
    id: 3,
    title: "Cheta ",
    price: 1200,
    img: require('../assets/img/producto3.avif'),
    category: "Hamburguesas",
    desc: "Carne,chedar, huevo, pepino y tomate",

  },
  {
    id: 4,
    title: "Jumbo",
    price: 1900,
    img: require('../assets/img/producto4.jpg'),
    category: "Hamburguesas",
    desc: "Carne,lechuga, tomate, queso y morrón",
    
  },
  {
    id: 5,
    title: "Tradicional",
    price: 1200,
    img: require('../assets/img/producto5.jpg'),
    category: "Hamburguesas",
    desc: "Carne, lechuga, queso y tomate ",

  },
  {
    id: 6,
    title: "nuggets",
    price: 1000,
    img: require('../assets/img/producto6.jpg'),
    category: "Pollos",
    desc: "nuggets de pollo y salsas de la casa",

  },
  {
    id: 7,
    title: "spiedo",
    price: 3500,
    img: require('../assets/img/producto7.jpg'),
    category: "Pollos",
    desc: "Pollo entero + papas fritas y ensalada",

  },
  {
    id: 8,
    title: "Broaster",
    price: 4200,
    img: require('../assets/img/producto8.jpg'),
    category: "Pollos",
    desc: "Pollo crocante 12 piezzas + papas fritas",

  },
  {
    id: 9,
    title: "Hot dog L",
    price: 700,
    img: require('../assets/img/producto9.webp'),
    category: "Hotdogs",
    desc: "hot dog con cebolla morada, tocineta y cheddar",

  },
  {
    id: 10,
    title: "hot dog especial",
    price: 850,
    img: require('../assets/img/producto10.jpg'),
    category: "Hotdogs",
    desc: "hot dog con cebolla, tomate y pepinillo",

  },
  {
    id: 11,
    title: "Gaseosa 1",
    price: 300,
    img: require('../assets/img/producto11.jpg'),
    category: "Bebidas",
    desc: "Rica Coca cola bien fría y lista para disfrutar",
    like: 8,
  },
  {
    id: 12,
    title: "Gaseosa 2",
    price: 300,
    img: require('../assets/img/producto12.jpg'),
    category: "Bebidas",
    desc: "Rica 7up bien fría y lista para disfrutar",

  },
  {
    id: 13,
    title: "Cerveza",
    price: 350,
    img: require('../assets/img/producto13.jpg'),
    category: "Bebidas",
    desc: "Rica cerveza servida directo del barril",

  }
  
];

export const TotalProducts = products.length;

export const Products = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }

  acc[product.category] = [...acc[product.category], product];

  return acc;
}, {});
