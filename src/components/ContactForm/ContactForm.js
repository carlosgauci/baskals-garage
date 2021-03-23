// Contact form on the index page

import React, { useState } from "react"
import {
  container,
  form,
  name,
  email,
  phone,
  company,
  success,
} from "./ContactForm.module.scss"

const ContactForm = () => {
  const [sent, setSent] = useState(false)
  const [message, setMessage] = useState("")

  // Contact form submit
  const onSubmit = async e => {
    e.preventDefault()
    const formElements = [...e.currentTarget.elements]

    // Check honeypot
    const isValid =
      formElements.filter(elem => elem.name === "bot-field")[0].value === ""
    const validFormElements = isValid ? formElements : []
    if (validFormElements.length < 1) {
      setMessage("Looks like you've filled in too many fields..")
    } else {
      // Send form
      const filledOutElements = validFormElements
        .filter(elem => !!elem.value)
        .map(
          element =>
            encodeURIComponent(element.name) +
            "=" +
            encodeURIComponent(element.value)
        )
        .join("&")

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: filledOutElements,
      })
        .then(() => {
          setMessage(
            "Your message was sent successfully, we'll contact you back as soon as possible!"
          )
          setSent(true)
        })
        .catch(_ => {
          setMessage(
            "There was an error submitting the form, please email us at baskal@baskalsgarage.com"
          )
        })
    }
  }

  return (
    <section className={container} id="contact">
      {!sent ? <h2>Get a Quote</h2> : <h2>Success!</h2>}
      {/* Netlify contact form, sends user to /success page after submit */}
      {!sent && (
        <form
          className={form}
          name="contact-form"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          onSubmit={e => onSubmit(e)}
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
      )}
      {message && <p className={success}>{message}</p>}
    </section>
  )
}

export default ContactForm
