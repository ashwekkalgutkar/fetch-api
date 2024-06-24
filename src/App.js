import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`https://fakestoreapi.com/products`);
      setData(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    
  }, []);

  return (
    <div className="App">
      <button onClick={getData}>Get data</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {data.map((item) => (
            <li key={item.id}>
              <div>
                <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px'  }} />
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>${item.price}</p>
              </div>
            </li>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
