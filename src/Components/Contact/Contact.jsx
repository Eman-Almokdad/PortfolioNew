import './Contact.css'
import { contactBox } from '../data'
const Contact = () => {
    return (
        <div className='Contact space' id='Contact'>
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>
            <div className="container">
                <div className='left'>
                    {contactBox.map((element, index) => {
                        return (
                            <div key={index}>
                                <i className={element.img}></i>
                                <h4>{element.title1}</h4>
                                <h5>{element.title2}</h5>
                            </div>
                        )
                    })}
                </div>
                <form action="">
                    <input type="text" placeholder="Your Full Name" required="" />
                    <input type="email" placeholder="Your Email" required="" />
                    <textarea name="message" rows="7" placeholder="Your Message" required=""></textarea>
                    <button type="subnit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
