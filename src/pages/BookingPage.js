import React, { useState } from "react";
import Heading from "../components/common/Heading";
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
    equipmentRequired: "",
  });

  const [message, setMessage] = useState(null);

  const [dateAvailable, setDateAvailable] = useState(true); // State variable for date availability

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Reset date availability when the date changes
    setDateAvailable(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if date is available (replace this with your own logic)
    const isDateAvailable = checkDateAvailability(formData.eventDate);

    if (!isDateAvailable) {
      setDateAvailable(false);
      return; // Don't submit the form if date is not available
    }

    fetch("http://192.168.43.155:8000/reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        setMessage(JSON.parse(data).message)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // Function to check date availability (replace this with your own logic)
  const checkDateAvailability = (date) => {
    // Example: Check if date is within a range or available in a database
    return true; // Return true if date is available, false otherwise
  };

  return (
    <>
      <Heading heading="Booking" title="Home" subtitle="Booking" />
      <div className="booking-form">
        <div className="left-div">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Company Name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Event Date</label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
              />
              {!dateAvailable && (
                <small className="text-danger">Date not available</small>
              )}
            </div>
          </form>
        </div>
        <div className="right-div">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Event Type</label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
              >
                <option value="wedding">Wedding</option>
                <option value="gettogether">Get-Together</option>
                <option value="birthday">Birthday</option>
                <option value="ceremony">Ceremony</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Meal Type</label>
              <select
                name="mealType"
                value={formData.mealType}
                onChange={handleChange}
              >
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
              </select>
            </div>
            <div className="form-group">
              <label>Event Start Time</label>
              <input
                type="time"
                name="eventStartTime"
                value={formData.eventStartTime}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Number of People</label>
              <input
                type="number"
                name="numberOfPeople"
                value={formData.numberOfPeople}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Equipment Required/Remarks</label>
              <textarea
                name="equipmentRequired"
                value={formData.equipmentRequired}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit">Submit</button>
         
            <span style={{ marginLeft:'20px' , fontSize: 'smaller', color: 'Yellow', fontStyle: 'italic' }}> Submission Successful ! {message}</span>


          </form>
        </div>
      </div>
    </>
  );
}
