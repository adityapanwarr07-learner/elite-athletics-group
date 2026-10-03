import React, { useState } from "react";
import "./Callback.css"

function Callback() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiry: "100m Sprint",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Your request has been submitted!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      enquiry: "100m Sprint",
      message: "",
    });
  };

  return (
    <section className="callback-section" id="contact">

      <div className="callback-container">

        {/* LEFT SIDE */}

        <div className="callback-content">

          <span className="callback-tag">
            Request a Callback
          </span>

          <h2>
  <span className="orange-text">Start Your</span>
  <span className="white-text">Athletic</span>
  <span className="green-text">Journey</span>
</h2>

          <p>
            Have questions about our training programs?
            Fill out the form and our team will get back
            to you shortly.
          </p>

        </div>


        {/* RIGHT SIDE */}

        <form
          className="callback-form"
          onSubmit={handleSubmit}
        >

          {/* NAME */}

          <div className="form-group">
            <label>Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>


          {/* EMAIL */}

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>


          {/* PHONE */}

          <div className="form-group">
            <label>Phone</label>

            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>


          {/* ENQUIRY */}

          <div className="form-group">
            <label>Enquiry For</label>

            <select
              name="enquiry"
              value={formData.enquiry}
              onChange={handleChange}
            >

              <option value="100m Sprint">
                100m Sprint
              </option>

              <option value="500m Running">
                500m Running
              </option>

              <option value="1600m Running">
                1600m Running
              </option>

              <option value="Long Jump">
                Long Jump
              </option>

              <option value="High Jump">
                High Jump
              </option>

              <option value="Javelin Throw">
                Javelin Throw
              </option>

              <option value="Fitness & Physical Training">
                Fitness & Physical Training
              </option>

              <option value="Trial Session">
                Trial Session
              </option>

              <option value="General Enquiry">
                General Enquiry
              </option>

            </select>
          </div>


          {/* MESSAGE */}

          <div className="form-group">
            <label>Message</label>

            <textarea
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>


          {/* BUTTON */}

          <button
            type="submit"
            className="callback-submit"
          >
            Request a Callback
            <span>→</span>
          </button>

        </form>

      </div>

    </section>
  );
}

export default Callback;