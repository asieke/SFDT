import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      let res = await axios.get('/getPrices');
      console.log(res.data);
    }
    getData();
  }, [])

  return (
    <h1>Hello World!</h1>
  )
}



export default App;