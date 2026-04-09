import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <>
       <section id="contact">
        <div className="contact__container">
          <h3 className="contact__title">
            Send Us a Message
          </h3>
          <form className="contact__input--container">
  
            <input type="name" placeholder="Enter your First Name" required />
           
            <input type="name" placeholder="Enter your Last Name" required />
            <textarea placeholder="Enter your Message" required />
            <button className="btn">Send Message</button>
          </form>
          </div>
          <div className="contact__info--container">
            <h3 className="contact_info--title">
              Contact Us
            </h3>
            <p className="phone_number"><FontAwesomeIcon icon={faPhone} /> Phone: <a href="tel:3525386816">(352) 538-6816</a></p>
            <p className="email_address"><FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:andreworeilly04@gmail.com">andreworeilly04@gmail.com</a></p>
          </div>
       </section>
    </>
  )
}

export default Contact