import React from "react"
import Styles from "./Footer.module.scss"
import InstagramLogo from "./InstagramLogo"
import StravaLogo from "./StravaLogo.js"

const Footer = () => (
  <footer className={Styles.footer}>
    <div className={Styles.footerprint}>
      © {new Date().getFullYear()}, Hertford Running Club
    </div>
    <div className={Styles.logos}>
      <StravaLogo />
      <InstagramLogo />
    </div>
  </footer>
)

export default Footer
