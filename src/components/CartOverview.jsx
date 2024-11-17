import './CartOverview.css';

function CartOverview() {
  return (
    <section id="cart-overview-container">
      <i className="fa-solid fa-circle-xmark fa-2xl" id="cart-overview-close-btn"></i>
      <div className="cart-overview">
        <h1>Cart Overview</h1>
        <div id="cart-overview-items-container">

        </div>
        <div id="price-row">
          <span>Total:</span><span id="total-price"> $0</span>
        </div>
      </div>
    </section>
  )
}

export default CartOverview;
