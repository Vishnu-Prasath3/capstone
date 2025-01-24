const request = require('supertest');
const app = require('../index');
const mongoose = require('mongoose');
const Product = require('../models/Product');
const User = require('../models/User');

let token;

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

  // Create a test user and log in to get a token
  const user = new User({
    name: 'Test User',
    email: 'testuser@example.com',
    password: 'password123',
  });
  await user.save();

  const response = await request(app)
    .post('/api/auth/login')
    .send({
      email: 'testuser@example.com',
      password: 'password123',
    });
  token = response.body.token;
});

afterAll(async () => {
  await Product.deleteMany(); // Clean up products
  await User.deleteMany(); // Clean up users
  await mongoose.connection.close();
});

describe('Product Endpoints', () => {
  it('should create a new product', async () => {
    const response = await request(app)
      .post('/api/products')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Product 1',
        description: 'Description of product 1.',
        price: 50,
        seller: 'testuser_id', // Replace with actual seller ID if needed
      });
    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe('Product created successfully.');
  });

  it('should get all products', async () => {
    const response = await request(app)
      .get('/api/products');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true); // Check if the response is an array
  });
}); 