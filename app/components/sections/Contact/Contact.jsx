"use client";

import { useState } from "react";
import {
  Phone,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";

import Container from "../../ui/Container/Container";
import FadeUp from "../../ui/Motion/FadeUp";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  }

  function validate() {
    const newErrors = {};

    if (!form.name.trim())
      newErrors.name = "Name is required.";

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Please enter a valid 10-digit number.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Please enter your message.";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validation = validate();

    if (Object.keys(validation).length) {
      setErrors(validation);
      return;
    }

    console.log(form);

    setSuccess(true);

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  }

  return (
    <section id="contact" className={styles.contact}>
      <Container>
        <FadeUp>
          <div className={styles.heading}>
            <span>CONTACT</span>

            <h2>START YOUR FITNESS JOURNEY TODAY!</h2>

            <p>
              Have questions? Contact our fitness experts and we&apos;ll help
              you achieve your goals. It starts with you.
            </p>
          </div>

          <div className={styles.wrapper}>
            <div className={styles.info}>
              <div className={styles.card}>
                <Phone size={22} />

                <div>
                  <h4>Call Us</h4>
                  <p>+91 88674 41378<br />+91 88674 91378</p>
                </div>
              </div>

              <div className={styles.card}>
                <FaInstagram size={22} />
                <div>
                  <h4>Instagram</h4>
                  <p>@goldstonefitness</p>
                </div>
              </div>

              <div className={styles.card}>
                <MapPin size={22} />

                <div>
                  <h4>Visit Us</h4>
                  <p>#No 62, KFC Building – 4th Floor<br />Baba Nagar, Bagalur Main Road<br />Yelahanka, Bengaluru - 560064</p>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className={styles.form}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
              />

              {errors.name && (
                <small>{errors.name}</small>
              )}

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
              />

              {errors.email && (
                <small>{errors.email}</small>
              )}

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />

              {errors.phone && (
                <small>{errors.phone}</small>
              )}

              <textarea
                rows="6"
                name="message"
                placeholder="Tell us about your fitness goals..."
                value={form.message}
                onChange={handleChange}
              />

              {errors.message && (
                <small>{errors.message}</small>
              )}

              <button type="submit">
                Send Message
              </button>

              {success && (
                <div className={styles.success}>
                  <CheckCircle size={20} />
                  Message sent successfully!
                </div>
              )}
            </form>
          </div>

          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps?q=Goldstone+Fitness+Baba+Nagar+Bengaluru&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Gym Location"
            />
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}