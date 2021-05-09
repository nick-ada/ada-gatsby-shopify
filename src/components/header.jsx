import * as React from "react"
import { Link } from "gatsby"
import { StoreContext } from "../context/store-context"
import Logo from "../icons/logo"

import { CartButton } from "./cart-button"
import SearchIcon from "../icons/search"
import { Toast } from "./toast"
import {
  header,
  container,
  logo as logoCss,
  searchButton,
  nav,
  headerInnerTop,
  headerTopLeft,
  headerTopCenter,
  headerTopRight,
  headerNav,
  headerNavPrimary,
  headerNavSecondary,
  headerNavInner,
  headerNavItem,
  headerFadingWordmark,
  wordmarkImg,
  headerLogoStamp,
  headerLogo
} from "./header.module.css"

export function Header() {
  const { checkout, loading, didJustAddToCart } = React.useContext(StoreContext)

  const items = checkout ? checkout.lineItems : []

  const quantity = items.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  return (
    <div className={container}>
      <header className={header}>
        <div className={headerInnerTop} >
          <div className={headerTopLeft}>
          </div>
          <div className={headerTopCenter} >               
            <nav className={headerNavPrimary} data-nc-element="primary-nav" data-content-field="navigation" >           
              <div className={headerNavInner}>
                <Link to="/buy-lab-diamonds" data-boverlay="boverlay-buy-lab-diamonds" className={headerNavItem} data-test="template-nav" >Diamonds</Link>
                <Link to="/engagement-rings-and-wedding-bands" data-boverlay="boverlay-engagement-rings-and-wedding-bands" className={headerNavItem} data-test="template-nav" >Bridal</Link>
                <Link to="/fashion-jewelry-home" data-boverlay="boverlay-fashion-jewelry-home" className={headerNavItem} data-test="template-nav" >Jewelry</Link>
              </div>
            </nav>
            <Link to="/" data-boverlay="main" className={headerLogoStamp} >      
              <img src="//static1.squarespace.com/static/59b054ce1abeabbe4986b687/t/5b576f9d352f53e2b32a9d96/1620486348430/?format=100w" alt="Ada Diamonds" className={headerLogo} />
            </Link>
            <nav className={headerNavSecondary} data-nc-element="secondary-nav"  data-content-field="navigation" >           
              <div className={headerNavInner}>
              <Link to="/about-menu" data-boverlay="boverlay-about-menu" className={headerNavItem}  data-test="template-nav" >About</Link>
              <Link to="/diamond-and-jewelry-knowledge-base" data-boverlay="boverlay-diamond-and-jewelry-knowledge-base" className={headerNavItem}  data-test="template-nav" >Education</Link>
              <Link to="/inquire" data-boverlay="boverlay-inquire" className={headerNavItem}  data-test="template-nav" >Inquire</Link>
              </div>
            </nav>
          </div>
          <div className={headerTopRight}>
            <Link to="/search" className={searchButton}>
              <SearchIcon />
            </Link>
            <CartButton quantity={quantity} />
            {/*<a href="/cart"><svg id="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="28" height="28" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M189.750 25.728 C 154.861 30.550,127.668 59.777,125.195 95.112 L 124.854 99.975 98.302 100.112 L 71.750 100.250 69.250 101.555 C 62.787 104.930,62.895 104.404,60.780 143.000 C 59.809 160.738,58.673 181.100,58.256 188.250 C 57.432 202.384,56.912 211.736,55.754 233.250 C 55.339 240.950,54.773 251.188,54.495 256.000 C 54.217 260.813,53.541 272.850,52.992 282.750 C 52.443 292.650,51.630 306.938,51.186 314.500 C 49.480 343.543,50.053 346.317,58.374 349.287 C 61.165 350.283,338.835 350.283,341.626 349.287 C 349.946 346.318,350.520 343.543,348.817 314.500 C 347.410 290.499,346.998 283.277,345.724 260.250 C 344.420 236.704,343.326 216.607,342.498 201.000 C 342.228 195.912,341.786 188.150,341.517 183.750 C 341.247 179.350,340.790 171.250,340.503 165.750 C 340.215 160.250,339.760 152.262,339.492 148.000 C 339.225 143.738,338.768 135.300,338.477 129.250 C 337.458 108.069,337.009 105.965,332.830 102.777 C 329.208 100.015,329.039 100.000,301.011 100.000 L 275.148 100.000 274.813 95.236 C 271.763 51.846,232.559 19.811,189.750 25.728 M207.883 50.755 C 230.724 54.460,247.697 72.843,249.772 96.125 L 250.117 100.000 199.990 100.000 L 149.862 100.000 150.206 96.125 C 152.811 66.805,179.140 46.094,207.883 50.755 M125.000 150.000 L 125.000 175.000 137.500 175.000 L 150.000 175.000 150.000 150.000 L 150.000 125.000 200.000 125.000 L 250.000 125.000 250.000 150.000 L 250.000 175.000 262.500 175.000 L 275.000 175.000 275.000 149.994 L 275.000 124.988 294.109 125.119 L 313.218 125.250 313.332 127.250 C 313.395 128.350,313.686 133.750,313.978 139.250 C 314.503 149.128,315.761 171.830,317.255 198.420 C 317.678 205.939,318.358 218.427,318.766 226.170 C 319.502 240.139,320.547 259.184,321.498 276.000 C 322.925 301.214,324.000 321.460,324.000 323.125 L 324.000 325.000 199.923 325.000 L 75.846 325.000 76.169 318.625 C 76.489 312.320,77.551 292.946,78.505 276.000 C 79.706 254.661,80.545 239.222,81.236 225.750 C 81.645 217.775,82.101 209.675,82.250 207.750 C 82.399 205.825,82.740 200.088,83.009 195.000 C 83.277 189.912,83.837 179.450,84.253 171.750 C 84.669 164.050,85.231 153.475,85.503 148.250 C 85.774 143.025,86.105 137.625,86.240 136.250 C 86.374 134.875,86.517 131.950,86.559 129.750 C 86.600 127.550,86.729 125.581,86.846 125.375 C 86.963 125.169,95.596 125.000,106.030 125.000 L 125.000 125.000 125.000 150.000 " stroke="none" fill="#000000" fill-rule="evenodd"></path></g></svg></a>*/}
          </div>
        </div>
        <div className={headerFadingWordmark}>
          <Link to="/" data-boverlay="main" >
            <img alt="Ada Diamonds Wordmark" data-src="https://static1.squarespace.com/static/ta/59b054ce1abeabbe4986b687/3747/assets/nav/wordmark-image.png" className={wordmarkImg} data-image-resolution="500w" src="https://static1.squarespace.com/static/ta/59b054ce1abeabbe4986b687/3747/assets/nav/wordmark-image.png?format=500w" />  
          </Link>
        </div>
        {/*<Link to="/" className={logoCss}>
          <Logo />
  </Link>*/}        
      </header>
      <Toast show={loading || didJustAddToCart}>
        {!didJustAddToCart ? (
          "Updating…"
        ) : (
          <>
            Added to cart{" "}
            <svg
              width="14"
              height="14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.019 10.492l-2.322-3.17A.796.796 0 013.91 6.304L6.628 9.14a1.056 1.056 0 11-1.61 1.351z"
                fill="#fff"
              />
              <path
                d="M5.209 10.693a1.11 1.11 0 01-.105-1.6l5.394-5.88a.757.757 0 011.159.973l-4.855 6.332a1.11 1.11 0 01-1.593.175z"
                fill="#fff"
              />
              <path
                d="M5.331 7.806c.272.326.471.543.815.163.345-.38-.108.96-.108.96l-1.123-.363.416-.76z"
                fill="#fff"
              />
            </svg>
          </>
        )}
      </Toast>
      </div>
  )
}
