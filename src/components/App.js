
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemList from './ItemList.js'; 
import ItemDetail from './ItemDetail.js';

function App() {
  return (
    <Router>
      <div>
    {/* Do not remove the main div */}
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/items/:id" element={<ItemDetail />} /> 
      </Routes>
  </div>  
  </Router>
  );
}

export default App;
