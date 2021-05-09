import * as React from "react"
import Logo from "../icons/logo"
import {
  footerStyle,
  copyright,
  links,
  blurb,
  logos,
  footerNavList,
  footerNavListItem,
  footerNav,
  footerNavItem,
  backToTop
} from "./footer.module.css"

export function Footer() {
  return (
    <footer className={footerStyle}>
      <div className={blurb}>
        <div className={logos}>
        <nav class="sqs-svg-icon--list">
          <a href="https://www.instagram.com/adadiamonds" target="_blank" class="sqs-svg-icon--wrapper instagram-unauth" aria-label="Ada Diamonds">
            <div>
              IG
              <svg class="sqs-svg-icon--social" viewBox="0 0 64 64">
                
              </svg>
            </div>
          </a>
          <a href="https://www.facebook.com/adadiamonds" target="_blank" class="sqs-svg-icon--wrapper facebook" aria-label="Ada Diamonds">
            <div>
              FB
              <svg class="sqs-svg-icon--social" viewBox="0 0 64 64">

              </svg>
            </div>
          </a>
          <a href="https://www.pinterest.com/adadiamonds/" target="_blank" class="sqs-svg-icon--wrapper pinterest" aria-label="Ada Diamonds ">
            PN
            <div>
              <svg class="sqs-svg-icon--social" viewBox="0 0 64 64">

              </svg>
            </div>
          </a>
        </nav>
        </div>
      </div>
      <nav class={footerNav} data-content-field="navigation">

        <div class="Footer-nav-group">
          
          <a href="/ada-diamonds-reviews" class={footerNavItem} >Reviews</a>
          <a href="/press" class={footerNavItem}>Press</a>
          <a href="/careers" class={footerNavItem}>Careers</a>
          <a href="/terms" class={footerNavItem}>Terms</a>
          <a href="/visit" class={footerNavItem}>Visit</a></div>

        <div id={backToTop} class="external"><a href="#" onclick="smoothScrollTo('body')"><span>BACK TO TOP</span></a></div>
      </nav>
      <div className={copyright}>
        <strong>© {new Date().getFullYear()} Ada Diamonds, Inc.</strong> All diamonds offered by Ada Diamonds™ are proudly laboratory-grown and can be referred to as <em>lab created diamonds, grown diamonds, synthetic diamonds, man-made diamonds, cultivated diamonds, or cultured diamonds</em>.
      </div>
    </footer>
  )
}
