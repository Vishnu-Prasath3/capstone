import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./AuctionList.css"; // Import the CSS file for styling

const AuctionList = () => {
  // Generate mock auction data with live images
  const auctions = Array.from({ length: 500 }, (_, index) => ({
    id: index + 1,
    title: `Auction Item ${index + 1}`,
    description: `Description for auction item ${index + 1}. This is a brief description of the item.`,
    image: `https://images.unsplash.com/photo-1511391409280-894fddf1a3a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHZpbnRhZ2UlMjBjYXJ8ZW58MHx8fHwxNjg1MjY0NzY0&ixlib=rb-1.2.1&q=80&w=400`, // Placeholder image URL
  }));

  return (
    <div className="auction-list">
      <h2>Auction List</h2>
      <div className="card-container">
        {auctions.map((auction) => (
          <div className="card" key={auction.id}>
            <Link to={`/auction/${auction.id}`}>
              <img src={auction.image} alt={auction.title} className="card-image" />
              <div className="card-content">
                <h3>{auction.title}</h3>
                <p>{auction.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuctionList;
