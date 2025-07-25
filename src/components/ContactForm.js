import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    clientFirstName: '',
    clientLastName: '',
    email: '',
    dobMonth: '',
    dobDay: '',
    dobYear: '',
    phone: '',
    location: '',
    preferredTime: '',
    therapyBefore: '',
    insurance: '',
    therapist: '',
    language: '',
    comment: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Optional: Auto-tab/focus for date fields
    if (name === 'dobMonth' && value.length === 2 && value.match(/^\d+$/)) {
      document.getElementById('dobDay').focus();
    }
    if (name === 'dobDay' && value.length === 2 && value.match(/^\d+$/)) {
      document.getElementById('dobYear').focus();
    }

    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    // Clear error for the field as user types
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };


  const validateStep = (step) => {
    let newErrors = {};
    let fieldsToValidate = [];

    switch (step) {
      case 1: // Potential Client Information fields + DOB
        fieldsToValidate = ['clientFirstName', 'clientLastName', 'email', 'phone', 'dobMonth', 'dobDay', 'dobYear'];
        break;
      case 2: // Preferences fields
        fieldsToValidate = ['location', 'preferredTime', 'therapyBefore'];
        break;
      case 3: // Other Details fields
        fieldsToValidate = ['insurance', 'therapist', 'language'];
        break;
      default:
        break;
    }

    fieldsToValidate.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    });

    // Specific validation for email
    if (step === 1 && formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }

    // Date of Birth validation for M/D/Y fields
    if (step === 1 && !newErrors.dobMonth && !newErrors.dobDay && !newErrors.dobYear) {
      const { dobMonth, dobDay, dobYear } = formData;

      const month = parseInt(dobMonth, 10);
      const day = parseInt(dobDay, 10);
      const year = parseInt(dobYear, 10);

      let dobValid = true;

      if (isNaN(month) || month < 1 || month > 12) {
        newErrors.dobMonth = 'Invalid Month';
        dobValid = false;
      }
      if (isNaN(day) || day < 1 || day > 31) {
        newErrors.dobDay = 'Invalid Day';
        dobValid = false;
      }
      if (isNaN(year) || dobYear.length !== 4 || year < 1900 || year > new Date().getFullYear()) {
        newErrors.dobYear = 'Invalid Year';
        dobValid = false;
      }

      if (dobValid) {
        const date = new Date(year, month - 1, day);
        if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
          if (!newErrors.dobDay) newErrors.dobDay = 'Invalid Date';
          dobValid = false;
        }
      }

      if (!dobValid && !newErrors.dobDay && !newErrors.dobMonth && !newErrors.dobYear) {
         newErrors.dobYear = 'Invalid Date';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prevStep => prevStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      const finalFormData = {
        ...formData,
        dob: `${formData.dobMonth}/${formData.dobDay}/${formData.dobYear}`
      };
      console.log('Form data submitted:', finalFormData);
      setIsSubmitted(true);
    } else {
      console.log('Form has validation errors:', errors);
    }
  };

  const totalSteps = 3;

  if (isSubmitted) {
    return (
      <section className="thank-you-section">
        <div className="thank-you-container">
          <div className="success-icon">✓</div>
          <h2>Thank You for Your Inquiry!</h2>
          <p>Your message has been successfully sent. We appreciate you reaching out to ACR Counseling LLC.</p>
          <p>We typically respond within 1-2 business days. Please check your email for a confirmation and further details.</p>
          <Link to="/" className="back-home-button">Back to Home</Link>
        </div>
      </section>
    );
  }

  const isMonthFilledAndValid = formData.dobMonth.length > 0 && !errors.dobMonth;
  const isDayFilledAndValid = formData.dobDay.length > 0 && !errors.dobDay;
  const isDobComplete = isMonthFilledAndValid && isDayFilledAndValid && formData.dobYear.length === 4 && !errors.dobYear;

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <h2>Fill out the form, you’ll hear from us soon!</h2>
        <p className="required-note">* Indicates required field</p>

        <div className="progress-bar">
          <div className="progress" style={{ width: `${((currentStep - 1) / (totalSteps -1)) * 100}%` }}></div>
        </div>
        <div className="step-indicator">Step {currentStep} of {totalSteps}</div>

        <form onSubmit={handleSubmit} className="contact-form">
          {currentStep === 1 && (
            <div className="form-step active">
              <fieldset>
                <legend>Potential Client Information</legend>
                <div className="form-group">
                  <label htmlFor="clientFirstName">First Name *</label>
                  <input
                    type="text"
                    id="clientFirstName"
                    name="clientFirstName"
                    value={formData.clientFirstName}
                    onChange={handleChange}
                    className={errors.clientFirstName ? 'error' : ''}
                    aria-required="true"
                  />
                  {errors.clientFirstName && <span className="error-message">{errors.clientFirstName}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="clientLastName">Last Name *</label>
                  <input
                    type="text"
                    id="clientLastName"
                    name="clientLastName"
                    value={formData.clientLastName}
                    onChange={handleChange}
                    className={errors.clientLastName ? 'error' : ''}
                    aria-required="true"
                  />
                  {errors.clientLastName && <span className="error-message">{errors.clientLastName}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    aria-required="true"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label>Date of Birth *</label>
                  <div className="dob-group">
                    <input
                      type="text"
                      id="dobMonth"
                      name="dobMonth"
                      value={formData.dobMonth}
                      onChange={handleChange}
                      placeholder="MM"
                      maxLength="2"
                      inputmode="numeric" // Added for numpad
                      pattern="[0-9]*"     // Added for numpad
                      className={errors.dobMonth ? 'error' : ''}
                      aria-label="Month"
                      aria-required="true"
                    />
                    <input
                      type="text"
                      id="dobDay"
                      name="dobDay"
                      value={formData.dobDay}
                      onChange={handleChange}
                      placeholder="DD"
                      maxLength="2"
                      inputmode="numeric" // Added for numpad
                      pattern="[0-9]*"     // Added for numpad
                      className={errors.dobDay ? 'error' : ''}
                      aria-label="Day"
                      aria-required="true"
                      disabled={!isMonthFilledAndValid}
                    />
                    <input
                      type="text"
                      id="dobYear"
                      name="dobYear"
                      value={formData.dobYear}
                      onChange={handleChange}
                      placeholder="YYYY"
                      maxLength="4"
                      inputmode="numeric" // Added for numpad
                      pattern="[0-9]*"     // Added for numpad
                      className={errors.dobYear ? 'error' : ''}
                      aria-label="Year"
                      aria-required="true"
                      disabled={!isDayFilledAndValid}
                    />
                  </div>
                  {(errors.dobMonth || errors.dobDay || errors.dobYear) &&
                    <span className="error-message">
                      {errors.dobMonth || errors.dobDay || errors.dobYear}
                    </span>
                  }
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'error' : ''}
                    aria-required="true"
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
              </fieldset>
            </div>
          )}

          {currentStep === 2 && (
            <div className="form-step active">
              <fieldset>
                <legend>Preferences</legend>
                <div className="form-group">
                  <label htmlFor="location">Location *</label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className={errors.location ? 'error' : ''}
                    aria-required="true"
                  >
                    <option value="">Select One</option>
                    <option value="Massachusetts">Massachusetts</option>
                    <option value="Connecticut">Connecticut</option>
                    <option value="Rhode Island">Rhode Island</option>
                  </select>
                  {errors.location && <span className="error-message">{errors.location}</span>}
                </div>

                <div className="form-group">
                  <label>Preferred Time *</label>
                  <div className="radio-group">
                    <label>
                      <input
                        type="radio"
                        name="preferredTime"
                        value="Morning"
                        checked={formData.preferredTime === 'Morning'}
                        onChange={handleChange}
                      /> Morning
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="preferredTime"
                        value="Afternoon"
                        checked={formData.preferredTime === 'Afternoon'}
                        onChange={handleChange}
                      /> Afternoon
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="preferredTime"
                        value="Evening"
                        checked={formData.preferredTime === 'Evening'}
                        onChange={handleChange}
                      /> Evening
                    </label>
                    {errors.preferredTime && <span className="error-message">{errors.preferredTime}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label>Have you received therapy before? *</label>
                  <div className="radio-group">
                    <label>
                      <input
                        type="radio"
                        name="therapyBefore"
                        value="Yes"
                        checked={formData.therapyBefore === 'Yes'}
                        onChange={handleChange}
                      /> Yes, I have.
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="therapyBefore"
                        value="No"
                        checked={formData.therapyBefore === 'No'}
                        onChange={handleChange}
                      /> No, this is my first experience.
                    </label>
                    {errors.therapyBefore && <span className="error-message">{errors.therapyBefore}</span>}
                  </div>
                </div>
              </fieldset>
            </div>
          )}

          {currentStep === 3 && (
            <div className="form-step active">
              <fieldset>
                <legend>Other Details</legend>
                <div className="form-group">
                  <label htmlFor="insurance">Insurance *</label>
                  <select
                    id="insurance"
                    name="insurance"
                    value={formData.insurance}
                    onChange={handleChange}
                    className={errors.insurance ? 'error' : ''}
                    aria-required="true"
                  >
                    <option value="">Select One</option>
                    <option value="Blue Cross/Blue Shield">Blue Cross/Blue Shield</option>
                    <option value="United">United</option>
                    <option value="Optum">Optum</option>
                    <option value="United Behavioral Health">United Behavioral Health</option>
                    <option value="Private Pay">Private Pay</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.insurance && <span className="error-message">{errors.insurance}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="therapist">Who are you interested in working with? *</label>
                  <select
                    id="therapist"
                    name="therapist"
                    value={formData.therapist}
                    onChange={handleChange}
                    className={errors.therapist ? 'error' : ''}
                    aria-required="true"
                  >
                    <option value="">Select One</option>
                    <option value="Amor Colombres">Amor Colombres</option>
                    <option value="Amanda Page">Amanda Page</option>
                    <option value="Alyia Pothemont">Alyia Pothemont</option>
                    <option value="Sam Croteau">Sam Croteau</option>
                  </select>
                  {errors.therapist && <span className="error-message">{errors.therapist}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="language">Language *</label>
                  <select
                    id="language"
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                    className={errors.language ? 'error' : ''}
                    aria-required="true"
                  >
                    <option value="">Select One</option>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                  </select>
                  {errors.language && <span className="error-message">{errors.language}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="comment">Comment</label>
                  <textarea
                    id="comment"
                    name="comment"
                    rows="5"
                    value={formData.comment}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </fieldset>
            </div>
          )}

          <div className="form-navigation">
            {currentStep > 1 && (
              <button type="button" className="prev-button" onClick={prevStep}>
                Previous
              </button>
            )}
            {currentStep < totalSteps && (
              <button
                type="button"
                className="next-button"
                onClick={nextStep}
                disabled={currentStep === 1 && !isDobComplete}
              >
                Next
              </button>
            )}
            {currentStep === totalSteps && (
              <button type="submit" className="submit-button">
                Submit Inquiry
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;