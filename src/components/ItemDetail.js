import React from 'react';
import { useParams } from 'react-router-dom';

function ItemDetail() {
  const { id } = useParams(); // Fetch the item id from URL

  const renderItemDetails = (id) => {
    switch (id) {
      case '1':
        return (
          <>
            <h1>Item 1</h1>
            <p>Description for Item 1</p>
          </>
        );
      case '2':
        return (
          <>
            <h1>Item 2</h1>
            <p>Description for Item 2</p>
          </>
        );
      case '3':
        return (
          <>
            <h1>Item 3</h1>
            <p>Description for Item 3</p>
          </>
        );
      default:
        return <p>Item not found</p>;
    }
  };

  return (
    <div>
      {renderItemDetails(id)}
    </div>
  );
}

export default ItemDetail;
