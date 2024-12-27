import React from "react";
import { useParams } from "react-router-dom";
import "./AuctionDetail.css"; // Optional: Create a CSS file for styling

const AuctionDetail = () => {
  const { id } = useParams();

  // Generate mock auction data for 500 items
  const auctionData = Array.from({ length: 500 }, (_, index) => ({
    id: index + 1,
    title: `Auction Item ${index + 1}`,
    description: `Description for auction item ${index + 1}. This is a detailed description of the item.`,
    image: `https://images.unsplash.com/photo-1511391409280-894fddf1a3a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHZpbnRhZ2UlMjBjYXJ8ZW58MHx8fHwxNjg1MjY0NzY0&ixlib=rb-1.2.1&q=80&w=400`,
    price: `$${(index + 1) * 100}`, // Example price
    biddingStatus: index % 2 === 0 ? "Open" : "Closed", // Example bidding status
  }));

  const auction = auctionData.find((item) => item.id === parseInt(id));

  if (!auction) {
    return <div>Auction not found.</div>; // Handle case where auction does not exist
  }

  return (
    <div className="auction-detail">
      <h2>{auction.title}</h2>
      <img src={auction.image} alt={auction.title} className="auction-image" />
      <p>{auction.description}</p>
      <p><strong>Price:</strong> {auction.price}</p>
      <p><strong>Bidding Status:</strong> {auction.biddingStatus}</p>
    </div>
  );
};

export default AuctionDetail;
