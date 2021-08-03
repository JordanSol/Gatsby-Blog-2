import React from 'react'
import emailjs from 'emailjs-com'
import * as styles from './EmailForm.module.scss'

const EmailForm = () => {

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_mwti2si', 'template_xnl5t4r', e.target, 'user_ZuXnFjcfJ5N3CUa11HcDz')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
        e.target.reset()
    }

    return (
        
        <form className={styles.emailForm} onSubmit={sendEmail}>
            <h3>Send me an Email, don't be shy!</h3>
            <input type="hidden" name="contact_number" />
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <textarea name="message" placeholder="Message" className={styles.message}/>
            <input type="submit" value="Send" className={styles.send}/>
        </form>
    )
}


export default EmailForm