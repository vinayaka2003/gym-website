"use client";

import { useState } from "react";
import {
  Phone,
  MapPin,
  CheckCircle,
  ChevronDown,
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
  const [activeAddressId, setActiveAddressId] = useState(1); // Yelahanka open by default

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
    <>
      <section id="contact" className={styles.contact}>
        <Container>
          <FadeUp>
            <div className={styles.heading}>
              <span>CONTACT</span>

              <h2>START YOUR FITNESS JOURNEY TODAY!</h2>
            </div>

            <div className={styles.wrapper}>
              <div className={styles.info}>
                <a href="tel:+918867441378" className={styles.card} aria-label="Call Goldstone Fitness">
                  <Phone size={22} />

                  <div>
                    <h4>Call Us</h4>
                    <p>+91 88674 41378</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/goldstone_fitness_01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                  aria-label="Visit Goldstone Fitness Instagram"
                >
                  <FaInstagram size={22} />
                  <div>
                    <h4>Instagram</h4>
                    <p>@goldstone_fitness_01</p>
                  </div>
                </a>


                <div className={`${styles.card} ${styles.visitCard}`}>
                  <div className={styles.visitHeader}>
                    <MapPin size={22} className={styles.visitIcon} />
                    <h4>Visit Us</h4>
                  </div>

                  <div className={styles.locationsList}>
                    {/* Kattigenahalli Location Item */}
                    <div className={`${styles.locationItem} ${activeAddressId === 1 ? styles.locationItemActive : ""}`}>
                      <button
                        type="button"
                        className={styles.locationToggle}
                        onClick={() => setActiveAddressId(activeAddressId === 1 ? null : 1)}
                      >
                        <span className={styles.locationName}>Kattigenahalli Branch</span>
                        <ChevronDown 
                          size={16} 
                          className={`${styles.locationChevron} ${activeAddressId === 1 ? styles.chevronRotated : ""}`} 
                        />
                      </button>
                      
                      <div className={`${styles.addressWrapper} ${activeAddressId === 1 ? styles.addressExpanded : ""}`}>
                        <div className={styles.addressInner}>
                          <p className={styles.addressText}>
                            #No 62, KFC Building – 4th Floor, Dwaraka Nagar, Bagalur Main Road, Kattigenahalli, Bengaluru - 560064
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Jakkur Location Item */}
                    <div className={`${styles.locationItem} ${activeAddressId === 2 ? styles.locationItemActive : ""}`}>
                      <button
                        type="button"
                        className={styles.locationToggle}
                        onClick={() => setActiveAddressId(activeAddressId === 2 ? null : 2)}
                      >
                        <span className={styles.locationName}>Jakkur Branch</span>
                        <ChevronDown 
                          size={16} 
                          className={`${styles.locationChevron} ${activeAddressId === 2 ? styles.chevronRotated : ""}`} 
                        />
                      </button>
                      
                      <div className={`${styles.addressWrapper} ${activeAddressId === 2 ? styles.addressExpanded : ""}`}>
                        <div className={styles.addressInner}>
                          <p className={styles.addressText}>
                            No 4, Sai ram building - 1st floor, above Kotak Mahindra bank, K V Jairam road, MCECHS layout phase 2, jakkur layout, jakkur, banglore - 560064
                          </p>
                        </div>
                      </div>
                    </div>
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
          </FadeUp>
        </Container>
      </section>
    </>
  );
}