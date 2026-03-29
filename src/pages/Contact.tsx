import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import SectionWrapper from '../components/SectionWrapper';
import CtaSection from '../components/CtaSection';
import styles from './Contact.module.css';

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <HeroSection
        title="Get in "
        accentText="Touch"
        subtitle="Ready to start your AI journey? Tell us a bit about your business and we'll be in touch within one business day."
      />

      <SectionWrapper>
        <div className={styles.layout}>
          {/* Left column — intro & book a conversation */}
          <div className={styles.intro}>
            <h2 className={styles.introTitle}>Let's start a conversation</h2>
            <p className={styles.introBody}>
              We work with forward-thinking local businesses to design and
              deliver practical AI solutions. Whether you have a clear project in
              mind or are just exploring the possibilities, we'd love to hear
              from you.
            </p>
            <p className={styles.introBody}>
              No jargon, no pressure — just an honest conversation about where
              AI could unlock value in your business.
            </p>

            <div className={styles.bookCard}>
              <p className={styles.bookLabel}>Prefer to talk directly?</p>
              <p className={styles.bookTitle}>Book a conversation</p>
              <p className={styles.bookBody}>
                Once we've reviewed your enquiry we'll send you a calendar link
                to book a free 30-minute discovery call with a member of our
                team.
              </p>
              <p className={styles.bookNote}>
                📅 Calendar booking available after initial enquiry.
              </p>
            </div>

            <div className={styles.contactDetails}>
              <p className={styles.contactDetailsTitle}>Other ways to reach us</p>
              <ul className={styles.contactDetailsList}>
                <li>
                  <span className={styles.contactIcon}>✉️</span>
                  <span>hello@brentwoodaifactory.com.au</span>
                </li>
                <li>
                  <span className={styles.contactIcon}>📍</span>
                  <span>Brentwood, Perth, Western Australia</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right column — contact form */}
          <div className={styles.formColumn}>
            <div className={styles.earlyNote}>
              <strong>Early enquiry form</strong> — This site is in early access.
              We review every submission personally and aim to respond within one
              business day.
            </div>

            {submitted ? (
              <div className={styles.successCard}>
                <p className={styles.successIcon}>✅</p>
                <h3 className={styles.successTitle}>Thanks for reaching out!</h3>
                <p className={styles.successBody}>
                  We've received your message and will be in touch within one
                  business day.
                </p>
                <button
                  className={styles.resetButton}
                  onClick={() => {
                    setSubmitted(false);
                    setFormData(initialFormData);
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.fieldRow}>
                  <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>
                      Name <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={styles.input}
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="company" className={styles.label}>
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className={styles.input}
                      placeholder="Your business name"
                      value={formData.company}
                      onChange={handleChange}
                      autoComplete="organization"
                    />
                  </div>
                </div>

                <div className={styles.fieldRow}>
                  <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>
                      Email <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={styles.input}
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="phone" className={styles.label}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className={styles.input}
                      placeholder="+61 4xx xxx xxx"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="message" className={styles.label}>
                    Message <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={`${styles.input} ${styles.textarea}`}
                    placeholder="Tell us about your business and what you'd like to explore with AI…"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <p className={styles.requiredNote}>
                  <span className={styles.required}>*</span> Required fields
                </p>

                <button type="submit" className={styles.submitButton}>
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </SectionWrapper>

      <CtaSection
        title="Not ready to fill out a form?"
        subtitle="Explore our Insights page to learn more about AI for local businesses — or browse our Success Stories."
        buttonLabel="Read Our Insights"
        buttonTo="/insights"
      />
    </div>
  );
}
