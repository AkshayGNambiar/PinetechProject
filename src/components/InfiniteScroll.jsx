
// InfiniteScroll.js

import React, { useState, useEffect } from 'react';

const InfiniteScroll = ({array}) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      setLoading(true);

      // Replace the following with your actual API call
      
      const data = array
      console.log('in data',data)

      setItems((prevItems) => [...prevItems, ...array]);
      setPage((prevPage) => prevPage + 1);
      setLoading(false);
    };

    // Attach a scroll event listener
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        fetchData();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page]); // Run this effect every time 'page' changes

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;
