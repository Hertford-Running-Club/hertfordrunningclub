import React from "react"
import Styles from "./Social.module.scss"
import InstagramFeed from "../Instagram/InstagramFeed"


const Social = () => (
  <section className={Styles.social}>
    <h2>We Are Sociable too!!</h2>
    <p>
      On the last Tuesday of each month we stick around after the run at
      Hertford House Hotel for a beer / wine or two...
    </p>
    <p>
      On Sundays after our run we normally have coffee at Hertford House Hotel,
      and the last Sunday of the month we usually will have brunch. We plan to
      introduce some other social events throughout the year.
    </p>
    <p>
      We will also be hosting a fundraising event for various charities that we
      are representing at races throughout 2020.
    </p>
    <hr />

    <InstagramFeed loadUserData={true} NumberPhotosToLoad={13} accessToken={`${process.env.GATSBY_INSTAGRAM_ACCESS_TOKEN}`} / >
  
  </section>
)

export default Social
