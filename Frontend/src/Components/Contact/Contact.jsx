import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className='container Contact-us'>
        <h3 className='text-center'>Contact with US</h3>
        <div className="row contact-aria">
            <div className="col-md-6 pe-2 ps-2 contact-section">
                <form action='https://formspree.io/f/mrgnebdq' method='POST' className='contact-form'>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder='Enter your name' 
                        required 
                        autoComplete='off' 
                    />
                    <input
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder='Enter your email' 
                        required 
                        autoComplete='off'
                    />
                    <input 
                        type="number" 
                        name="number" 
                        id="number" 
                        placeholder='Enter your number' 
                        required 
                        autoComplete='off'
                    />
                    <textarea 
                        name="message" 
                        id="message" 
                        placeholder='Write your message...' 
                        autoComplete='off'>
                    </textarea>
                    <div className="d-flex justify-content-center mt-2">
                        <button type='submit'>Send</button>
                    </div>
                </form>
            </div>
            <div className="col-md-6 contact-section">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58386.22922761892!2d89.15452335767296!3d23.849185804802904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe91f902499f97%3A0x16852cb6a43f634f!2sKumarkhali!5e0!3m2!1sen!2sbd!4v1705935330277!5m2!1sen!2sbd" width="600" height="450"></iframe>
            </div>
        </div>
    </div>
  )
}

export default Contact;


