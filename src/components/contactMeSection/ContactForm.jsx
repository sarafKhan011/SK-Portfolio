import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jyvx3un', 'template_fr8p51h', form.current, {
      publicKey: '12kctcLUc8hkON_JU',
    })
    .then(() => {
      setName('');
      setEmail('');
      setMessage('');
      setSuccess('✅ Message Sent!');
    }, (error) => {
      console.log('FAILED...', error.text);
      setSuccess('❌ Failed to send message.');
    });
  };

  return (
    <div>
      <p className="text-cyan font-semibold mb-2">{success}</p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 text-white">
        <input
          name="from_name"
          type="text"
          placeholder="Your Name"
          required
          className="w-full h-12 rounded-lg bg-lightBrown px-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="from_email"
          type="email"
          placeholder="Your Email"
          required
          className="w-full h-12 rounded-lg bg-lightBrown px-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={6}
          required
          className="w-full rounded-lg bg-lightBrown p-4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="w-full h-12 rounded-lg bg-cyan border border-cyan text-white font-bold text-xl hover:bg-darkcyan transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
