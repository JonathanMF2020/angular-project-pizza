import * as pizzasJson from './mocks/pizzas.json';

export const urls = [
  {
    url: '/pizzas/',
    method: 'GET',
    json: pizzasJson, // usamos .default para acceder al contenido real
    delay: 500, // opcional
    status: 200,
    simulateError: false,
  },
];
