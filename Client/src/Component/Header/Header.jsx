import React from 'react'
import logo from '../../commonResource/images/icons/logo-sm.png';
import search from '../../commonResource/images/icons/search-icon-sm.png';
import cart from '../../commonResource/images/icons/cart-sm.png';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
           <Link className="navbar-brand mx-auto" to="/">
              <img src={logo} />
            </Link>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <li className="nav-item">
                 <Link className="nav-link js-scroll-trigger" to="/Mac/">
                    Mac
                  </Link>
                </li>
                <li className="nav-item">
                 <Link className="nav-link js-scroll-trigger" to="/Iphone/">
                    Iphone
                  </Link>
                </li>
                <li className="nav-item">
                 <Link className="nav-link js-scroll-trigger" to="/Ipad/">
                    Ipad
                  </Link>
                </li>
                <li className="nav-item">
                 <Link className="nav-link js-scroll-trigger" to="/Watch/">
                    Watch
                  </Link>
                </li>
                <li className="nav-item">
                 <Link className="nav-link js-scroll-trigger" to="/Tv/">
                    Tv
                  </Link>
                </li>
                <li className="nav-item">
                 <Link className="nav-link js-scroll-trigger" to="/Music/">
                    Music
                  </Link>
                </li>
                <li className="nav-item">
                 <Link className="nav-link js-scroll-trigger" to="/Support/">
                    Support
                  </Link>
                </li>
                <li className="nav-item">
                 <Link className="nav-link js-scroll-trigger" to="/Search/">
                    <img src={search} />
                  </Link>
                </li>
                <li className="nav-item">
                 <Link className="nav-link js-scroll-trigger" to="/Cart/">
                    <img src={cart} />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header