
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemList from './ItemList'; // import ItemList component
import ItemDetail from './ItemDetail'; // import ItemDetail component

function App() {
  return (
    <Router>
      <div>
    {/* Do not remove the main div */}
      <Routes>
        <Route path="/" element={<ItemList />} /> {/* Home page with item list */}
        <Route path="/items/:id" element={<ItemDetail />} /> {/* Dynamic item detail page */}
      </Routes>
  </div>  
  </Router>
  );
}

export default App;
