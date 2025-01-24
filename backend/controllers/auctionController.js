const Auction = require('../models/Auction'); // Ensure you create this model

// Get all auctions
exports.getAllAuctions = async (req, res) => {
  try {
    const auctions = await Auction.find().populate('seller', 'name email'); // Populate seller details
    res.json(auctions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching auctions." });
  }
};

// Create a new auction
exports.createAuction = async (req, res) => {
  const { title, description, startingBid, seller } = req.body;

  const auction = new Auction({
    title,
    description,
    startingBid,
    seller, // Assuming seller is passed in the request body
  });

  try {
    await auction.save();
    res.status(201).json({ message: "Auction created successfully.", auction });
  } catch (error) {
    res.status(500).json({ message: "Error creating auction." });
  }
};

