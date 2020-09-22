import React from 'react'

const ContactForm = () => {
  return (
    <div className="contact-form">
      <p>Some stuff</p>
      <form name="Contact Form" method="POST" data-netlify="true" action="/thanks">
        <input type="hidden" name="form-name" value="Contact Form" />
        <div>
          <label>Name</label>
          <input type="name" name="name" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
