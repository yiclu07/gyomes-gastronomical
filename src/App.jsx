import './App.css'
import foodData from './assets/foodData.js';
import Navbar from './components/Navbar';
import MenuContainer from './components/MenuContainer.jsx';

function App() {
  return (
    <>
      <Navbar />
      <MenuContainer menuItems={foodData} />
    </>
  )
}

export default App
