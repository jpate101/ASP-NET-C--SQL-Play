import React, { useState, useEffect } from 'react';

const WeatherForecast = () => {
  const [forecastData, setForecastData] = useState([]);
  const [productData, setProductData] = useState({
    id: 0,
    name: '',
    type: ''
  });

  const handleInputChange = (field, value) => {
    setProductData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:7057/api/Products', {
          method: 'GET',
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setForecastData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handlePostRequest = async () => {
    try {
      const response = await fetch('https://localhost:7057/api/Products', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        // Handle the error here
        console.error('Failed to create product:', response.statusText);
        return;
      }

      const result = await response.json();
      console.log('Product created successfully:', result);
      
      // Handle the response as needed

      // Clear the input fields after successful submission
      setProductData({
        id: 0,
        name: '',
        type: ''
      });
    } catch (error) {
      console.error('Error while creating product:', error);
    }
  };

  return (
    <div>
      <h2>Weather Forecast</h2>
      <label>
        Product ID:
        <input
          type="text"
          value={productData.id}
          onChange={(e) => setProductData({ ...productData, id: e.target.value })}
        />
      </label>
      <label>
        Product Name:
        <input
          type="text"
          value={productData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
        />
      </label>
      <label>
        Product Type:
        <input
          type="text"
          value={productData.type}
          onChange={(e) => handleInputChange('type', e.target.value)}
        />
      </label>
      <button onClick={handlePostRequest}>Create Product</button>
      <ul>
        {forecastData.map((product, index) => (
          <li key={index}>
            {product.id} - {product.name} ({product.type}) 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherForecast;