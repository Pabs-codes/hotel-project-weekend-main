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
import "./Form.css"; // Import the CSS file

import { motion } from "framer-motion";


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
 
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // You can handle form submission logic here
  //   console.log(formData);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch('http://localhost:5000/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
      // Optionally, you can reset the form data here
      setFormData({
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
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <>
      <Heading heading="Booking" title="Home" subtitle="Booking" />
      <motion.div
        className="booking-form"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
         <motion.div
          className="left-div"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
         <motion.form
            onSubmit={handleSubmit}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
              <motion.div
              className="form-group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label>Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </motion.div>
            <motion.div
              className="form-group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label>Company Name</label>
              <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
            </motion.div>
            <motion.div
              className="form-group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label>Phone</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
            </motion.div>
            <motion.div
              className="form-group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </motion.div>
            <motion.div
              className="form-group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label>Event Date</label>
              <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} />
            </motion.div>
          </motion.form>
        </motion.div>
        <motion.div
          className="right-div"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
       <motion.form
            onSubmit={handleSubmit}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
              <motion.div
              className="form-group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label>Event Type</label>
              <select name="eventType" value={formData.eventType} onChange={handleChange}>
                <option value="">Select</option>
                <option value="wedding">Wedding</option>
                <option value="birthday">Birthday</option>
                <option value="ceremony">Ceremony</option>
                <option value="other">Other</option>
              </select>
            </motion.div>
            <motion.div
              className="form-group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label>Event Start Time</label>
              <input type="time" name="eventStartTime" value={formData.eventStartTime} onChange={handleChange} />
            </motion.div>
            <motion.div
              className="form-group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label>Number of People</label>
              <input type="number" name="numberOfPeople" value={formData.numberOfPeople} onChange={handleChange} />
            </motion.div>
            <motion.div
              className="form-group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label>Equipment Required/Remarks</label>
              <textarea name="equipmentRequired" value={formData.equipmentRequired} onChange={handleChange}></textarea>
            </motion.div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              Submit
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>

   
    </>
  );
}
