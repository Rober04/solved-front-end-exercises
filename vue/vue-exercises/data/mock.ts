type Product = {
  id: number,
  title: string,
  image: string,
  description: string,
  price: number,
};

const apple: Product = {
  id: 1,
  title: 'Apple',
  image: 'https://via.placeholder.com/150',
  description: 'A red apple',
  price: 1.99,
};

const banana: Product = {
  id: 2,
  title: 'Banana',
  image: 'https://via.placeholder.com/150',
  description: 'A yellow banana',
  price: 0.99,
};

const pear: Product = {
  id: 3,
  title: 'Pear',
  image: 'https://via.placeholder.com/150',
  description: 'A green pear',
  price: 1.49,
};

const products: Product[] = [apple, banana, pear];

export { products };