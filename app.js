const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample data for halal food categories and items
const halalFoodCategories = [
  { id: 1, name: 'Meat and Poultry' },
  { id: 2, name: 'Fruits and Vegetables' },
  { id: 3, name: 'Dairy Products' },
];

const halalFoodItems = [
  { id: 1, category_id: 1, name: 'Halal Chicken' },
  { id: 2, category_id: 1, name: 'Halal Beef' },
  { id: 3, category_id: 2, name: 'Halal Apples' },
  { id: 4, category_id: 2, name: 'Halal Carrots' },
  { id: 5, category_id: 3, name: 'Halal Milk' },
  { id: 6, category_id: 3, name: 'Halal Cheese' },
];

// Endpoint to get halal food categories
app.get('/categories', (req, res) => {
  res.json(halalFoodCategories);
});

// Endpoint to get halal food items within a specific category
app.get('/items/:categoryId', (req, res) => {
  const categoryId = parseInt(req.params.categoryId);
  const items = halalFoodItems.filter(
    (item) => item.category_id === categoryId
  );
  res.json(items);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
