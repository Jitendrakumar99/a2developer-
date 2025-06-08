import React, { useState } from "react";
import "./form.css"; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const FormComponent = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    requirements: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      console.log("Submitting form data:", form); 
      const response = await axios.post("https://a2developer-4qco.onrender.com/api/user", form);
      console.log("Backend response:", response); 
      console.log("Response data:", response.data); 
      if (response && response.data) {
        if (response.data.success === true) {
          toast.success(response.data.message || "Form submitted successfully!");
          setForm({
            name: "",
            email: "",
            phone: "",
            institution: "",
            requirements: "",
          });
          onClose(); 
        } else {
          const errorMsg = response.data.message || "Something went wrong. Please try again.";
          toast.error(errorMsg);
          setError(errorMsg);
        }
      } else {
        const errorMsg = "Invalid response from server";
        toast.error(errorMsg);
        setError(errorMsg);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      console.error("Error response:", error.response);
      
      let errorMessage = "Failed to submit form. Please try again.";
      if (error.response) {
        errorMessage = error.response.data?.message || error.response.statusText || errorMessage;
        console.error("Error status:", error.response.status);
        console.error("Error data:", error.response.data);
      } else if (error.request) {
        errorMessage = "No response from server. Please check your connection.";
        console.error("No response received:", error.request);
      }
      
      toast.error(errorMessage);
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-wrapper">
      <button 
        className="form-close-btn"
        onClick={onClose}
        aria-label="Close form"
      >
        ×
      </button>
      <div className="form-content">
        <h2>Get In Touch</h2>
        <p>Have questions about our Products? Fill out the form below to get a call with us.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Contact Number *</label>
            <div className="contact-input">
              <span className="country-code">+91</span>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="Enter your contact number"
                disabled={isSubmitting}
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="institution">Institution Name *</label>
            <input
              id="institution"
              type="text"
              name="institution"
              value={form.institution}
              onChange={handleChange}
              required
              placeholder="Enter your institution name"
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="requirements">Requirements</label>
            <textarea
              id="requirements"
              name="requirements"
              value={form.requirements}
              onChange={handleChange}
              placeholder="Enter your requirements"
              rows="4"
              disabled={isSubmitting}
            />
          </div>

          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;