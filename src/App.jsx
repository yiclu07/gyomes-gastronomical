import './App.css'
import { useState } from 'react';
import foodData from './assets/foodData.js';
import Navbar from './components/Navbar';
import MenuContainer from './components/MenuContainer.jsx';
import CartOverview from './components/CartOverview.jsx';

function App() {
  const [cart, setCart] = useState([
    {
      id: 2,
      name: `Eldraine's Wild Bounty`,
      price: 17.99,
      qty: 1
    }
  ]);

  // Add to cart using the item's unique ID, which is currently defined in the foodData.js file (no DB for this project)
  const addToCart = (itemId, itemQty) => {
    const itemIndex = cart.findIndex((item) => {
      return item.id === itemId;
    })
    
    if (itemIndex >= 0) {
      setCart(prevCart => {
        const newCart = prevCart;
        newCart[itemIndex].qty = prevCart[itemIndex].qty + itemQty;

        return newCart;
      });
    } else {
      setCart(prevCart => {
        const foodDataIndex = foodData.findIndex((food) => {
          return itemId === food.id;
        });

        return [...prevCart, {...foodData[foodDataIndex], qty: itemQty}];
      });
    }
  }

  return (
    <>
      <Navbar />
      <MenuContainer menuItems={foodData} addToCart={addToCart} />
      <CartOverview />
    </>
  )
}

export default App
