import './App.css'
import foodData from './assets/foodData.js';
import NavBar from './components/Navbar';
import MenuContainer from './components/MenuContainer.jsx';

function App() {
  return (
    <>
      <div>Hello</div>
      <NavBar />
      <MenuContainer menuItems={foodData} />
    </>
  )
}

export default App
