// import React from "react";
// import Heading from "../components/common/Heading";
// import UC from "../components/common/UC";

// export default function Booking() {
//   return (
//     <>
//       <Heading heading="Booking" title="Home" subtitle="Booking" />
//       <UC/>
//     </>
//   );
// }

import React, { useState } from "react";
import Heading from "../components/common/Heading";
import UC from "../components/common/UC";
import "./Form.css"; // Import the CSS file

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    eventDate: "",
    eventType: "",
    eventStartTime: "",
    numberOfPeople: "",
    equipmentRequired: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
  };

  return (
    <>
      <Heading heading="Booking" title="Home" subtitle="Booking" />
      <div className="booking-form">
        <div className="left-div">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Company Name</label>
              <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Event Date</label>
              <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} />
            </div>
          </form>
        </div>
        <div className="right-div">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Event Type</label>
              <select name="eventType" value={formData.eventType} onChange={handleChange}>
                <option value="">Select</option>
                <option value="wedding">Wedding</option>
                <option value="birthday">Birthday</option>
                <option value="ceremony">Ceremony</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Event Start Time</label>
              <input type="time" name="eventStartTime" value={formData.eventStartTime} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Number of People</label>
              <input type="number" name="numberOfPeople" value={formData.numberOfPeople} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Equipment Required/Remarks</label>
              <textarea name="equipmentRequired" value={formData.equipmentRequired} onChange={handleChange}></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <UC />
    </>
  );
}
