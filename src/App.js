import logo from './logo.svg';
import './App.css';
import { useQuery } from 'react-query';
import axios from 'axios';
import React from 'react';

function App() {
  const fetchCoffeeImage = React.useCallback(async () => {
    const res = await axios.get("http://localhost:3001/randomcoffee");
    return res.data;
  }, []);
  
  const { data, refetch } = useQuery("CurrentApp", fetchCoffeeImage, {
    manual: true,
    enabled: false
  });

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={data?.file} className="App-logo" alt="logo" />
        <button className='button-body' onClick={() => refetch()}>
          Click to show random coffee image
        </button>
      </header>
    </div>
  );
}

export default App;
