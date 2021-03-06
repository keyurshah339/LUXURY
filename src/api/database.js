import faker from "faker";

faker.seed(4);

export const database = [...Array(25)].map((_) => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  image: faker.image.fashion(0,0 , true),
  price: faker.commerce.price(),
  category: faker.random.arrayElement([
    "Bags",
    "Footwear",
    "Fasion Accessories",
    "Sneakers",
    "Topwear",
    "Bottomwear",
    "Grooming",
  ]),
  brand: faker.random.arrayElement([
    "GUCCI",
    "Louis Vuitton",
    "Chanel",
    "Burberry",
    "Prada",
    "Armani"
  ]),
  inStock: faker.datatype.boolean(),
  fastDelivery: faker.datatype.boolean(),
  rating: faker.random.arrayElement([1.0, 2.0,2.5, 3.0, 3.5, 4.0, 4.5, 5.0]),
  offer: faker.random.arrayElement([
    "Save ₹350",
    "70% bonanza",
    "Flat 50%",
    "Early bird offer",
    "40% Festive sale",
    "60% Lighting deal",
    "Payment mode offers"
  ]),
  level: faker.random.arrayElement([
    "beginner",
    "amateur",
    "intermediate",
    "advanced",
    "professional"
  ]),
  color: faker.commerce.color(),
  avalQty: faker.random.arrayElement([10, 11, 12, 13, 14, 15])
}));
