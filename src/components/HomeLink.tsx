import React from 'react';
import { Link } from 'react-router-dom';

const HomeLink = () => {
  return (
    <Link to="/" className="home-link">
      <span>VF </span>
      <span>Resourcing</span>
    </Link>
  );
};

export default HomeLink;
