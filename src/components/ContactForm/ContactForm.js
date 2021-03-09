import React from "react"
import { container, form } from "./ContactForm.module.scss"

const ContactForm = () => {
  return (
    <section className={container} id="contact">
      <h2>Get a Quote</h2>
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
        <input type="text" name="name" placeholder="Your name" />
        <input type="email" name="email" placeholder="Your email address" />
        <input type="number" name="number" placeholder="Phone number" />
        <input type="text" name="company" placeholder="Company (optional)" />

        <textarea
          name="message"
          rows="7"
          placeholder="Type your message here..."
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default ContactForm
