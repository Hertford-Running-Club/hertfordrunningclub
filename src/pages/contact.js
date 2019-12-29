import React from "react"
import ContactForm from "../components/ContactForm/ContactForm"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Us" description="Contact us at Hertford Running Club for any Memebership or Event Enquires. We look forward to hearing from you."  />
    <ContactForm />
  </Layout>
)

export default ContactPage
