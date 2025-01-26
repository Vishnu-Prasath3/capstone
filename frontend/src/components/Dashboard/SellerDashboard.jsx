import React, { useState, useEffect } from "react";
import "./SellerDashboard.css"; // Import the CSS file

const SellerDashboard = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: null,
  });
  const [products, setProducts] = useState([]); // State to hold the list of products

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts(); // Call fetchProducts on mount
  }, []); // Empty dependency array means this runs once on mount

  const fetchProducts = async () => {
    // Simulate fetching products from a server
    // In a real application, you would fetch from an API
    const dummyProducts = [
      {
        id: 1,
        name: "Product 1",
        description: "Description 1",
        price: 10,
        image: null,
      },
      {
        id: 2,
        name: "Product 2",
        description: "Description 2",
        price: 20,
        image: null,
      },
    ];
    setProducts(dummyProducts); // Set the fetched products
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Temporarily store the product details in the state
    setProducts([...products, { ...product, id: products.length + 1 }]); // Add a new product with a temporary ID
    console.log("Product added temporarily:", product); // Log the product details
    setProduct({ name: "", description: "", price: "", image: null }); // Reset the form
  };

  return (
    <div className="dashboard-container">
      <h2>Seller Dashboard</h2>
      <p>Welcome to your seller dashboard! Here you can:</p>
      <ul>
        <li>Create new auctions</li>
        <li>Manage your active auctions</li>
        <li>View sales history and earnings</li>
      </ul>

      <h3>Add New Product</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        {product.image && (
          <div>
            <h4>Preview:</h4>
            <img
              src={URL.createObjectURL(product.image)}
              alt="Product Preview"
              style={{ width: "200px", height: "auto" }}
            />
          </div>
        )}
        <button type="submit">Add Product</button>
      </form>

      <h3>Current Products</h3>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((prod) => (
            <div key={prod.id} className="product-card">
              <h4>{prod.name}</h4>
              <p>{prod.description}</p>
              <p>Price: ${prod.price}</p>
              {prod.image && (
                <img
                  src={URL.createObjectURL(prod.image)}
                  alt={prod.name}
                  style={{ width: "100px", height: "auto" }}
                />
              )}
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default SellerDashboard;
