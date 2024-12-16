import { Outlet } from 'react-router-dom'; 
import './App.css';

import { useGetCountriesQuery } from './types/graphql';

  

function App() {
  const { data, loading, error } = useGetCountriesQuery();
  console.log(data);
  return (
    <div>
      <h1>Mon Appli</h1>
      <Outlet />
    </div>
  );
}

export default App;