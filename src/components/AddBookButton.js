import React from 'react';
import { Link } from 'react-router-dom';

//stateless function

const AddBookButton = () => {
  return (
    <div className="open-search">
      <Link className="open-search" to="/search">
        Add a book
      </Link>
    </div>
  );
};

export default AddBookButton;
