import './Navbar.css';

function Navbar() {
  return (
    <>
      <header>
        <i className="fa-brands fa-wizards-of-the-coast fa-4x" id="logo"></i>
        <nav>
          <ul className="navbar-item-container">
            <li><a>ORDER NOW</a></li>
            <li><a>MENU</a></li>
            <li><a>CATERING</a></li>
            <li><a>MEMBERSHIP</a></li>
            <li><a>OUR JOURNEY</a></li>
            <li id="user-cart-container">
              <a><i className="fa-solid fa-user fa-lg user-cart"></i></a>
              <a>
                <i
                  className="fa-solid fa-basket-shopping fa-lg user-cart"
                  id="cart"
                ></i
              ></a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar;
