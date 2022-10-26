import React,{ useRef } from 'react'
import emailjs from '@emailjs/browser'
                                    
function Contact() {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_lu1of8n', 'template_7ukvip4', form.current, 'vEjBKvvVFAosxOS7A')     
      .then((result) => {
          window.location.reload(false)
          alert("Message Successfully sent!")
          e.preventDefault();
      }, (error) => {
          alert("Failed to Send Message")
      }
    )
  }
  return (
    <div className="contact" id='contact'>
      <h2 className="heading">Contact Us</h2>
      <div className="contact-form">
        <form className="form" ref={form} onSubmit={sendEmail}>
          <ul>
            <li>
              <input type="text" data-aos="fade-up" data-aos-duration="1500" className="first media" name="name" placeholder="Name" required/>
            </li>
            <li>
              <input type="email" data-aos="fade-up" data-aos-duration="1500" className="second media" name="email" placeholder="Email" required/>
            </li>
            <li>
              <input type="text" data-aos="fade-up" data-aos-duration="1500" className="third media" name="subject" placeholder="Subject" required/>
            </li>
            <li>
              <textarea placeholder="Message" data-aos="fade-up" data-aos-duration="1500" className="forth media" name="message" required></textarea>
            </li>
            <li>
              <input type="submit" data-aos="fade-up" data-aos-duration="1500" className="button" value="SEND" />
            </li>
          </ul>
        </form>
      </div>
    </div>
  )
}

export default Contact