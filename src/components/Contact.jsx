import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import CountrySelect from './CountrySelect.jsx'
import MaterialIcon from './MaterialIcon.jsx'
import PartnerTypeSelect from './PartnerTypeSelect.jsx'

export default function Contact() {
  const [state, handleSubmit] = useForm('mvzeykjy')
  const [phone, setPhone] = useState()

  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">
        {state.succeeded ? (
          <div className="contact__form contact__success">
            <MaterialIcon name="check_circle" size={48} fill={1} className="contact__success-icon" />
            <h2 className="contact__form-title">Thanks for reaching out!</h2>
            <p>We&rsquo;ve received your message and will get back to you shortly.</p>
          </div>
        ) : (
          <form className="contact__form reveal" onSubmit={handleSubmit}>
            <h2 className="contact__form-title">Contact Form</h2>

            <PartnerTypeSelect name="partnerType" />

            <label className="contact__field">
              <span className="contact__label">Organization Name</span>
              <input type="text" name="organization" placeholder="Organization name" />
            </label>

            <label className="contact__field">
              <span className="contact__label">Full Name</span>
              <input type="text" name="fullName" placeholder="Your Full Name" />
            </label>

            <div className="contact__row">
              <label className="contact__field">
                <span className="contact__label">Phone Number</span>
                <PhoneInput
                  className="contact__phone"
                  international
                  defaultCountry="IN"
                  name="phone"
                  placeholder="Your phone number"
                  value={phone}
                  onChange={setPhone}
                  countrySelectComponent={CountrySelect}
                />
              </label>
              <label className="contact__field">
                <span className="contact__label">Email</span>
                <input type="email" name="email" placeholder="you@email.com" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="contact__field-error" />
              </label>
            </div>

            <label className="contact__field">
              <span className="contact__label">Message</span>
              <textarea rows={4} name="message" placeholder="Type here..." required />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="contact__field-error" />
            </label>

            <ValidationError errors={state.errors} className="contact__field-error" />

            <button type="submit" className="btn btn-primary contact__submit" disabled={state.submitting}>
              <MaterialIcon name="send" size={24} fill={1} style={{ color: '#fff' }} />
              {state.submitting ? 'Sending…' : 'Send'}
            </button>
          </form>
        )}

        <div className="contact__info reveal">
          <div>
            <h2 className="contact__info-title">Let&rsquo;s Get In Touch</h2>
            <p className="contact__info-lead">Whether you are:</p>
            <ul className="contact__info-list">
              <li>MSME aggregator scaling procurement</li>
              <li>An organized retailer securing consistent high-quality volume</li>
              <li>A partner exploring strategic opportunities</li>
            </ul>
            <p className="contact__info-lead contact__info-close">
              Bluestone is here to provide the trade infrastructure you need.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
