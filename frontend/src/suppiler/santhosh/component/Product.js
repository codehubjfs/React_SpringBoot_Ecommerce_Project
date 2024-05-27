import React, { useState } from 'react';
import Questionnaire from './QuestionSelect';
import '../title.css';

const DropdownComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [showForm, setShowForm] = useState(false);

  const categories = [
    {
      name: 'Clothing',
      subCategories: ['Saree', 'Shirt', 'Dhoti']
    },
    {
      name: 'Electronics',
      subCategories: ['Phone', 'TV', 'Fan']
    },
    {
      name: 'Toys',
      subCategories: ['Car', 'Kitchen-kits', 'Teddy-Bear']
    }
  ];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedSubCategory(''); // Reset subcategory when category changes
    setShowForm(false); // Hide form when category changes
  };

  const handleSubCategoryChange = (e) => {
    setSelectedSubCategory(e.target.value);
    setShowForm(!!e.target.value); // Show form if subcategory is selected
  };

  return (
    <div>
      <h1 style={{ marginTop: '70px' }}>Product Q/A</h1>
      <h3 style={{ marginTop: '10px' }}>Select a Category</h3>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Category</option>
        {categories.map((category, index) => (
          <option key={index} value={category.name}>{category.name}</option>
        ))}
      </select>

      {selectedCategory && (
        <div style={{ marginTop: '15px' }}>
          <h3 style={{ marginTop: '10px' }}>Select SubCategory</h3>
          <select value={selectedSubCategory} onChange={handleSubCategoryChange}>
            <option value="">Subcategory</option>
            {categories.find(category => category.name === selectedCategory).subCategories.map((subCategory, index) => (
              <option key={index} value={subCategory}>{subCategory}</option>
            ))}
          </select>
        </div>
      )}

      {showForm && selectedSubCategory && (
        <Questionnaire selectedCategory={selectedCategory} selectedSubCategory={selectedSubCategory} />
      )}
    </div>
  );
};

export default DropdownComponent;
