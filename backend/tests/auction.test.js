const request = require('supertest');
const app = require('../index');
const mongoose = require('mongoose');
const Auction = require('../models/Auction');
const User = require('../models/User');

let token; // Variable to store JWT token

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
  token = response.body.token; // Store the token for authenticated requests
});

afterAll(async () => {
  await Auction.deleteMany(); // Clean up auctions
  await User.deleteMany(); // Clean up users
  await mongoose.connection.close();
});

describe('Auction Endpoints', () => {
  it('should create a new auction', async () => {
    const response = await request(app)
      .post('/api/auctions')
      .set('Authorization', `Bearer ${token}`) // Set the token in the header
      .send({
        title: 'Auction Item 1',
        description: 'Description of auction item 1.',
        startingBid: 100,
        seller: 'testuser_id', // Replace with actual seller ID if needed
      });
    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe('Auction created successfully.');
  });

  it('should get all auctions', async () => {
    const response = await request(app)
      .get('/api/auctions');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true); // Check if the response is an array
  });
});