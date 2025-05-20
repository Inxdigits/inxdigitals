import React, { useState } from 'react'
import '../Form/Form.css'

const Form = () => {    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        selectedServices: [], // Holds the value of the selected checkbox button
        message: '',
    });

    const services = [
        'Website & App Design',
        'Website & App Development',
        'Digital Marketing',
        'Brand Strategy & Creative Services',
        'IT Consulting & Digital Transformation',
        'Product Prototyping & MVP Development',
    ];

    const [ showPopup, setShowPopup ] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle checkbox Button change
    const handleCheckboxChange = (service) => {
      setFormData((prevState) => {
        const alreadySelected = prevState.selectedServices.includes(service);

        return {
          ...prevState,
          selectedServices: alreadySelected
            ? prevState.selectedServices.filter((s) => s !== service)
            : [...prevState.selectedServices, service],
        };
      });
    };
    
    // Handle Form Submission
    const handleSubmit = (e) => {
      e.preventDefault();
      // console.log('Form Data Submitted:', formData);
      // Simulate successful email sending for now
      try {
        // TODO: Replace with actual fetch() call to backend when implemented

        // Show popup
        setShowPopup(true);

        // Hide popup after 5 seconds
        setTimeout(() => {
          setShowPopup(false);
        }, 5000);
      } catch (error) {
        console.error("Error sending message:", error);
      }
    };

    return (
      <div className="form-parent">
        {showPopup && (
          <div className="popup-message">
            Message received, we will get back to you soon.
          </div>
        )}

        <form
          action=""
          method="post"
          onSubmit={handleSubmit}
          className="form-container"
          style={{ maxWidth: "750px", margin: "0 auto" }}
        >
          <div className="name-input">
            <div className="input-container firstname-input">
              <label>First Name</label>
              <input
                className="firstname input"
                type="text"
                name="firstName"
                placeholder="Jonathan"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-container lastname-input">
              <label>Last Name</label>
              <input
                className="lastname input"
                type="text"
                name="lastName"
                placeholder="David"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="input-container email-input">
            <label>
              Work Email
              <input
                className="email input"
                type="text"
                name="email"
                placeholder="jdavid@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ width: "100%" }}
              />
            </label>
          </div>
          <div className="input-container number-input">
            <label>
              Phone Number
              <input
                className="phone "
                type="tel"
                name="phone"
                placeholder="9202-930-250"
                value={formData.phone}
                onChange={handleChange}
                required
                style={{ width: "100%" }}
              />
            </label>
          </div>

          <div className="checkbox-field">
            <p>What service are you interested in?</p>
            <div className="checkbox-container">
              <div className="checkbox-column">
                {services.slice(0, 3).map((service, index) => (
                  <label className="custom-checkbox" key={index}>
                    <input
                      type="checkbox"
                      name="services"
                      value={service}
                      checked={formData.selectedServices.includes(service)}
                      onChange={() => handleCheckboxChange(service)}
                    />
                    <span className="checkmark"></span>
                    {service}
                  </label>
                ))}
              </div>
              <div className="checkbox-column">
                {services.slice(3).map((service, index) => (
                  <label className="custom-checkbox" key={index + 3}>
                    <input
                      type="checkbox"
                      name="service"
                      value={service}
                      checked={formData.selectedServices.includes(service)}
                      onChange={() => handleCheckboxChange(service)}
                    />
                    <span className="checkmark"></span>
                    {service}
                  </label>
                ))}
              </div>
            </div>
            <div className="message-input">
              <label>
                Message
                <textarea
                  className="message input"
                  name="message"
                  placeholder="Is there anything particular you need help with?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="send-button">
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    );
}

export default Form
