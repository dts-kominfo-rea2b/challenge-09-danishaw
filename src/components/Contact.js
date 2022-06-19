// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = (props) => {
    const {name, phone, email, photo} = props.data;
    return (
        <div className="contact">
            <div className="contact-avatar">
                <img src={photo} alt={name} className="contact-photo"/>
            </div>
            <div className="contact-info">
                <h2 className='name'>{name}</h2>
                <p className='phone'>{phone}</p>
                <p className='email'>{email}</p>
            </div>
            
        </div>
    )
 }


export default Contact;