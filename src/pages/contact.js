import React from "react"
import { Link } from "gatsby"
import ContactForm from "../components/ContactForm/ContactForm"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Page two" />
    <ContactForm />
  </Layout>
)

export default ContactPage
