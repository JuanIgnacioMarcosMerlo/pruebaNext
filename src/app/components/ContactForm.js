'use client';

import { useState } from 'react';
import styles from '../styles/contactForm.module.css';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!form.name) tempErrors.name = 'El nombre es requerido';
    if (!form.email) {
      tempErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = 'El email no es válido';
    }
    if (!form.message) tempErrors.message = 'El mensaje es requerido';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  const getErrorClass = (fieldName) => errors[fieldName] ? styles.errorInput : '';

  return (
    <div 
      className={styles.container}
      id='ContactForm'
    >
    <h2 className={styles.title}>Contacto</h2>
    <section className={styles.contact}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputField}>
          <label className={styles.label}>
            Nombre:
          </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`${styles.input} ${getErrorClass('name')}`}
            />
        </div>
            {errors.name && <span className={styles.error}>{errors.name}</span>}
        <div className={styles.inputField}>
        <label className={styles.label}>
          Email:
        </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`${styles.input} ${getErrorClass('email')}`}
          />
        </div>
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        <div className={styles.inputField}>
          <label className={styles.label}>
            Mensaje:
          </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className={`${styles.input} ${getErrorClass('message')}`}
            ></textarea>
          </div>
          {errors.message && <span className={styles.error}>{errors.message}</span>}
        <button type="submit" className={styles.enviar}>Enviar</button>
      </form>
      {success && <p className={styles.success}>¡Mensaje enviado con éxito!</p>}
    </section>
    </div>
  );
};

export default ContactForm;