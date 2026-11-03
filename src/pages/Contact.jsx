import '../styles/Contact.css';
import { useState } from "react";
import emailjs from '@emailjs/browser';
import PAGES from '../data/pagesData';
import MainContent from '../components/MainContent';

const contactPage = PAGES.contact;

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage(null);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Les clés de cet objet = {{variable}} de mon Template EmailJS
    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      phone: values.phone,
      message: values.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log("Email envoyé avec succès !", response.status, response.text);
        setStatusMessage({ type: "success", text: "Votre message a bien été envoyé !" });
        setValues({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi :", error);
        setStatusMessage({ type: "error", text: "Une erreur est survenue, veuillez réessayer." });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <article className='contact-page'>     
      <section className='page-layout'>
        <MainContent
          title={contactPage.title}
          subtitle={contactPage.subtitle}
          badges={contactPage.badges}
          firstcontent={contactPage.firstcontent}
          secondcontent={contactPage.secondcontent}
        />
          
        <div className='form-layout'>
          <div className='form-container'>

            <form className='form' onSubmit={handleSubmit}>
              <label htmlFor="name">Nom</label>
              <input 
                id="name"
                className='form-case'
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder='Vos nom et prénom'
                required
              />

              <label htmlFor="email">Mail</label>
              <input
                id="email"
                className='form-case'
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder='Votre adresse mail'
                required
              />

              <label htmlFor="phone">Téléphone</label>
              <input
                id="phone"
                className='form-case'
                type="tel"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                placeholder='Votre numéro de téléphone'             
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                className='form-case'
                name="message"
                value={values.message}
                onChange={handleChange}
                placeholder="Votre message"
                required
              />

              <button className='submit-btn' type="submit" disabled={isSending}>
                {isSending ? "Envoi en cours..." : "Envoyer"}
              </button>

              {statusMessage && (
                <p className={`status-msg ${statusMessage.type}`}>
                  {statusMessage.text}
                </p>
              )}

            </form>
          </div>
            
        </div>
      </section>
    </article>
  );
}