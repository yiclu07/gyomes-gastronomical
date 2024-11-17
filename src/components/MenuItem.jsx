function MenuItem(props) {
  return (
    <>
      <div className="menu-item">
        <img src={`./src/assets/food-${props.food.id}.jpg`} alt={props.food.name} />
        <div className="menu-item-info-container">
          <div className="menu-item-info">
            <div>{props.food.name}</div>
            <div>${props.food.price}</div>
          </div>
          {/* {Need to add an onClick handler for the button to add the food item to cart. Will need to do it differently in React} */}
          <button className="add-item-btn">ADD</button>
        </div>
      </div>
    </>
  )
}

export default MenuItem;
