import React from 'react'

const ContactForm = () => {
  return (
    <div className="contact-form grid">
      <form
        className="grid__start-1 grid__end-13 grid__start-3--md grid__end-11--md grid__start-1--lg grid__end-7--lg"
        name="Contact Form"
        method="POST"
        data-netlify="true"
        action="/thanks"
      >
        <input type="hidden" name="form-name" value="Contact Form" />
        <div className="contact-form__field contact-form__field--name">
          <label>
            <span class="contract-form__field-label">Name</span>
          </label>
          <input type="name" name="name" />
        </div>
        <div className="contact-form__field contact-form__field--email">
          <label>
            <span class="contract-form__field-label">Email</span>
          </label>
          <input type="email" name="email" />
        </div>
        <div className="contact-form__field contact-form__field--message">
          <label>
            <span class="contract-form__field-label">Message</span>
          </label>
          <textarea name="message" rows="6" />
        </div>
        <div className="contact-form__submit">
          <button className="button" type="submit">
            <div className="button__content">
              <span className="button__label">Submit</span>
            </div>
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
