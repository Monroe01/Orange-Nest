import React from 'react';

function Listing({ filters }) {
  const listings = [
    {
      name: 'The 505 on Walnut',
      price: 1200,
      availability: 'Available for Fall 2024 - Call for availability',
      address: '505 Walnut Ave, Syracuse, NY',
      image: 'https://via.placeholder.com/150',
      description: 'Modern apartments with a fitness center and study rooms. Walking distance to Syracuse University.',
    },
    {
      name: 'The Laurel Apartments',
      price: 1500,
      availability: 'Available for Fall 2024 - Ask for price',
      address: '301 W Laurel St, Syracuse, NY',
      image: 'https://via.placeholder.com/150',
      description: 'Spacious 2-bedroom apartments with an open floor plan and in-unit laundry. Great for students!',
    },
  ];

  // Apply price filters
  const filteredListings = listings.filter((listing) => {
    return (
      (!filters.minPrice || listing.price >= filters.minPrice) &&
      (!filters.maxPrice || listing.price <= filters.maxPrice)
    );
  });

  return (
    <section>
      <h2>Available Apartments & Houses</h2>
      <div className="listing-container">
        {filteredListings.map((listing, index) => (
          <div className="listing-card" key={index}>
            <img src={listing.image} alt={`${listing.name}`} />
            <h3>{listing.name}</h3>
            <p>{listing.availability}</p>
            <p><strong>Address:</strong> {listing.address}</p>
            <p><strong>Price:</strong> ${listing.price} per month</p>
            <p>{listing.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Listing;