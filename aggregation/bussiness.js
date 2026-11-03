use businessAnalytics;
db.sales.insertMany([
  {
    "orderId": "ORD101",
    "customer": "Alice",
    "items": [
      { "productId": "P01", "name": "Laptop", "quantity": 1, "price": 1200.00 },
      { "productId": "P02", "name": "Mouse", "quantity": 2, "price": 25.00 }
    ],
    "storeLocation": "New York"
  },
  {
    "orderId": "ORD102",
    "customer": "Bob",
    "items": [
      { "productId": "P02", "name": "Mouse", "quantity": 1, "price": 25.00 },
      { "productId": "P03", "name": "Monitor", "quantity": 2, "price": 300.00 }
    ],
    "storeLocation": "Los Angeles"
  },
  {
    "orderId": "ORD103",
    "customer": "Charlie",
    "items": [
      { "productId": "P01", "name": "Laptop", "quantity": 2, "price": 1200.00 }
    ],
    "storeLocation": "New York"
  }
]);