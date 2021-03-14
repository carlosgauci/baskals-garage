// Contact form on the index page

import React from "react"
import {
  container,
  form,
  name,
  email,
  phone,
  company,
} from "./ContactForm.module.scss"

const ContactForm = () => {
  return (
    <section className={container} id="contact">
      <h2>Get a Quote</h2>
      {/* Netlify contact form, sends user to /success page after submit */}
      <form
        className={form}
        name="contact-form"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        action="/success"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact-form" />

        <input
          type="text"
          name="name"
          placeholder="Your name"
          aria-label="Your Name"
          className={name}
        />

        <input
          type="email"
          name="email"
          placeholder="Your email address"
          aria-label="Your email address"
          className={email}
        />

        <input
          type="number"
          name="number"
          placeholder="Phone number"
          aria-label="Your Phone Number"
          className={phone}
        />

        <input
          type="text"
          name="company"
          placeholder="Company (optional)"
          aria-label="Company (optional)"
          className={company}
        />

        <textarea
          name="message"
          rows="7"
          placeholder="Type your message here..."
          aria-label="Your Message"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default ContactForm
