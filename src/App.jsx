import './App.css'
import foodData from './assets/foodData.js';
import Navbar from './components/Navbar';
import MenuContainer from './components/MenuContainer.jsx';
import CartOverview from './components/CartOverview.jsx';

function App() {
  return (
    <>
      <Navbar />
      <MenuContainer menuItems={foodData} />
      <CartOverview />
    </>
  )
}

export default App
