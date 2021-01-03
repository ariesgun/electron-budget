import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import Header from '../components/Header';
import NewCategory from '../components/NewCategory';

const CategoryPage = () => {
  return (
    <>
      <div className="p-4">
        <Header name="Category" />
        <NewCategory />
        <Categories />
      </div>
    </>
  );
};

export default CategoryPage;