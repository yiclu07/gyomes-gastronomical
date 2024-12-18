import './MenuContainer.css';
import MenuItem from "./MenuItem.jsx";

function MenuContainer(props) {
  return (
    <section className="menu-container">
      {props.menuItems.map((item, index) => {
        return <MenuItem food={item} key={`${item.name}${index}`} addToCart={props.addToCart} />
      })}
    </section>
  )
}

export default MenuContainer;
