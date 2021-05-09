import * as React from "react"
//import Logo from "../icons/logo"
import {
  footerStyle,
  copyright,
 // links,
  blurb,
  logos,
 // footerNavList,
 // footerNavListItem,
  footerNav,
  footerNavGroup,
  footerNavItem,
  backToTop,
  socialIconList,
  socialIcon
} from "./footer.module.css"

export function Footer() {
  return (
    <footer className={footerStyle}>
      <div className={blurb}>
        <div className={logos}>
        <nav className={socialIconList}>
          <a href="https://www.instagram.com/adadiamonds" target="_blank"  rel="noreferrer" className={socialIcon} aria-label="Ada Diamonds">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" id="instagram-icon" viewBox="0 0 64 64">
                <g>
                  <path d="M46.91,25.816c-0.073-1.597-0.326-2.687-0.697-3.641c-0.383-0.986-0.896-1.823-1.73-2.657c-0.834-0.834-1.67-1.347-2.657-1.73c-0.954-0.371-2.045-0.624-3.641-0.697C36.585,17.017,36.074,17,32,17s-4.585,0.017-6.184,0.09c-1.597,0.073-2.687,0.326-3.641,0.697c-0.986,0.383-1.823,0.896-2.657,1.73c-0.834,0.834-1.347,1.67-1.73,2.657c-0.371,0.954-0.624,2.045-0.697,3.641C17.017,27.415,17,27.926,17,32c0,4.074,0.017,4.585,0.09,6.184c0.073,1.597,0.326,2.687,0.697,3.641c0.383,0.986,0.896,1.823,1.73,2.657c0.834,0.834,1.67,1.347,2.657,1.73c0.954,0.371,2.045,0.624,3.641,0.697C27.415,46.983,27.926,47,32,47s4.585-0.017,6.184-0.09c1.597-0.073,2.687-0.326,3.641-0.697c0.986-0.383,1.823-0.896,2.657-1.73c0.834-0.834,1.347-1.67,1.73-2.657c0.371-0.954,0.624-2.045,0.697-3.641C46.983,36.585,47,36.074,47,32S46.983,27.415,46.91,25.816z M44.21,38.061c-0.067,1.462-0.311,2.257-0.516,2.785c-0.272,0.7-0.597,1.2-1.122,1.725c-0.525,0.525-1.025,0.85-1.725,1.122c-0.529,0.205-1.323,0.45-2.785,0.516c-1.581,0.072-2.056,0.087-6.061,0.087s-4.48-0.015-6.061-0.087c-1.462-0.067-2.257-0.311-2.785-0.516c-0.7-0.272-1.2-0.597-1.725-1.122c-0.525-0.525-0.85-1.025-1.122-1.725c-0.205-0.529-0.45-1.323-0.516-2.785c-0.072-1.582-0.087-2.056-0.087-6.061s0.015-4.48,0.087-6.061c0.067-1.462,0.311-2.257,0.516-2.785c0.272-0.7,0.597-1.2,1.122-1.725c0.525-0.525,1.025-0.85,1.725-1.122c0.529-0.205,1.323-0.45,2.785-0.516c1.582-0.072,2.056-0.087,6.061-0.087s4.48,0.015,6.061,0.087c1.462,0.067,2.257,0.311,2.785,0.516c0.7,0.272,1.2,0.597,1.725,1.122c0.525,0.525,0.85,1.025,1.122,1.725c0.205,0.529,0.45,1.323,0.516,2.785c0.072,1.582,0.087,2.056,0.087,6.061S44.282,36.48,44.21,38.061z M32,24.297c-4.254,0-7.703,3.449-7.703,7.703c0,4.254,3.449,7.703,7.703,7.703c4.254,0,7.703-3.449,7.703-7.703C39.703,27.746,36.254,24.297,32,24.297z M32,37c-2.761,0-5-2.239-5-5c0-2.761,2.239-5,5-5s5,2.239,5,5C37,34.761,34.761,37,32,37z M40.007,22.193c-0.994,0-1.8,0.806-1.8,1.8c0,0.994,0.806,1.8,1.8,1.8c0.994,0,1.8-0.806,1.8-1.8C41.807,22.999,41.001,22.193,40.007,22.193z"></path>
                </g>
              </svg>
            </div>
          </a>
          <a href="https://www.facebook.com/adadiamonds" target="_blank"  rel="noreferrer" className={socialIcon} aria-label="Ada Diamonds">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" id="facebook-icon" viewBox="0 0 64 64">
                <g>
                  <path d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"></path>
                </g>
              </svg>
            </div>
          </a>
          <a href="https://www.pinterest.com/adadiamonds/" target="_blank"  rel="noreferrer" className={socialIcon} aria-label="Ada Diamonds ">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" id="pinterest-icon" viewBox="0 0 64 64">
                <g>
                  <path d="M32,16c-8.8,0-16,7.2-16,16c0,6.6,3.9,12.2,9.6,14.7c0-1.1,0-2.5,0.3-3.7 c0.3-1.3,2.1-8.7,2.1-8.7s-0.5-1-0.5-2.5c0-2.4,1.4-4.1,3.1-4.1c1.5,0,2.2,1.1,2.2,2.4c0,1.5-0.9,3.7-1.4,5.7 c-0.4,1.7,0.9,3.1,2.5,3.1c3,0,5.1-3.9,5.1-8.5c0-3.5-2.4-6.1-6.7-6.1c-4.9,0-7.9,3.6-7.9,7.7c0,1.4,0.4,2.4,1.1,3.1 c0.3,0.3,0.3,0.5,0.2,0.9c-0.1,0.3-0.3,1-0.3,1.3c-0.1,0.4-0.4,0.6-0.8,0.4c-2.2-0.9-3.3-3.4-3.3-6.1c0-4.5,3.8-10,11.4-10 c6.1,0,10.1,4.4,10.1,9.2c0,6.3-3.5,11-8.6,11c-1.7,0-3.4-0.9-3.9-2c0,0-0.9,3.7-1.1,4.4c-0.3,1.2-1,2.5-1.6,3.4 c1.4,0.4,3,0.7,4.5,0.7c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16z"></path>
                </g>
              </svg>
            </div>
          </a>
        </nav>
        </div>
      </div>
      <nav className={footerNav} data-content-field="navigation">

        <div className={footerNavGroup}>
          
          <a href="/ada-diamonds-reviews" className={footerNavItem} >Reviews</a>
          <a href="/press" className={footerNavItem}>Press</a>
          <a href="/careers" className={footerNavItem}>Careers</a>
          <a href="/terms" className={footerNavItem}>Terms</a>
          <a href="/visit" className={footerNavItem}>Visit</a></div>

        <div id={backToTop} >
          {/*TODO:  onClick="smoothScrollTo('body')"*/}
          <a href="#"><span>BACK TO TOP</span></a>
          </div>
      </nav>
      <div className={copyright}>
        <strong>© {new Date().getFullYear()} Ada Diamonds, Inc.</strong> All diamonds offered by Ada Diamonds™ are proudly laboratory-grown and can be referred to as <em>lab created diamonds, grown diamonds, synthetic diamonds, man-made diamonds, cultivated diamonds, or cultured diamonds</em>.
      </div>
    </footer>
  )
}
