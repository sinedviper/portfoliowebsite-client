import React, {useRef} from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
	
		emailjs.sendForm('service_5od560f', 'template_ru6b8pd', form.current, 'M7FViY0JWBDyGtd0-')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
	  };

	return (
		<section id='contact'>
			<h5>Get in touch</h5>
			<h2>Contact me</h2>

			<div className='container contact__container'>
				<div className='contact__options'>
					<article className='contact__option'>
						<MdOutlineEmail className='contact__option-icon'/>
						<h4>Email</h4>
						<h5>sinedviper@gmail.com</h5>
						<a href="mailto:sinedviper@gmail.com" target="_blank">Send a message</a>
					</article>
					<article className='contact__option'>
						<RiMessengerLine className='contact__option-icon'/>
						<h4>Message</h4>
						<h5>egatortutorials</h5>
						<a href="https://m.me/sinedviper" target="_blank">Send a message</a>
					</article>
					<article className='contact__option'>
						<BsWhatsapp className='contact__option-icon'/>
						<h4>Email</h4>
						<h5>+123456789</h5>
						<a href="https://api.whatsapp.com/send?phone+123456789" target="_blank">Send a message</a>
					</article>
				</div>
				<form ref={form} onSubmit={sendEmail}> 
					<input type="text" name='name' placeholder='Your full name' required/>
					<input type="email" name='email' placeholder='Your email' required/>
					<textarea name="message" rows="7" placeholder='Your message' required></textarea>
					<button type='submit' className='btn btn-primary'>Send message</button>
				</form>
			</div>
		</section>
	)
}

export default Contact;