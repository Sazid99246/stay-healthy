/* eslint-disable no-unused-vars */

// Following code has been commented with appropriate comments for your reference.
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css'

// Function component Notification to display user notifications
const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  /* eslint-disable-next-line no-unused-vars */
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
    const storedUsername = sessionStorage.getItem('name');
    const storedDoctorData = JSON.parse(sessionStorage.getItem('doctorDetails'));
    const storedAppointmentData = JSON.parse(sessionStorage.getItem('appointments'));

if (storedUsername) {
    setIsLoggedIn(true); 
    setUsername(storedUsername);
}

if (storedDoctorData) {
    setDoctorData(storedDoctorData); 
}

 setAppointmentData(storedAppointmentData);

 }; 

 // Initial fetch when component mounts
 fetchData();

 // Event listener to update appointment data on event trigger
 const handleAppointmentUpdate = () => {
     fetchData(); // Re-fetch appointment data
 };

 // Add event listener
 window.addEventListener('appointmentUpdated', handleAppointmentUpdate);

 // Cleanup event listener on component unmount
 return () => {
     window.removeEventListener('appointmentUpdated', handleAppointmentUpdate);
 };
}, [appointmentData]);

  const handleCancelAppointment = (appointmentId) => {
        const updatedAppointments = appointmentData.filter((appointment) => appointment.id !== appointmentId);
        setAppointmentData(updatedAppointments);
        sessionStorage.setItem('appointments', JSON.stringify(updatedAppointments));    
  };

  // Return JSX elements to display Navbar, children components, and appointment details if user is logged in
  return (
    <div>
      {/* Render Navbar component */}
      {/* <Navbar ></Navbar> */}
      {/* Render children components */}
      {children}
      {/* Display appointment details if user is logged in and appointmentData is available */}
      {isLoggedIn && 
      appointmentData && appointmentData.length > 0 &&
       (
        <>
          <div className="appointment-card">
            <div className="appointment-card__content">
              {/* Display title for appointment details */}
              <h3 className="appointment-card__title">Appointment Details</h3>
              <p className="appointment-card__message"> 
              <strong>Doctor: </strong>{doctorData?.name} </p>
              <p className="appointment-card__message"> <strong>Speciality:</strong> {doctorData?.speciality} </p>
              {appointmentData.map(appointment => (
                <div key={appointment.id}>
                  <p className="appointment-card__message">
                    <strong>Name:</strong> {appointment.name}
                  </p>
                  <p className="appointment-card__message">
                    <strong>Phone:</strong> {appointment.phoneNumber}
                  </p>
                  <p className="appointment-card__message">
                    <strong>Date:</strong> {appointment.selectedDate}
                  </p>
                  <p className="appointment-card__message">
                    <strong>Time:</strong> {appointment.selectedSlot}
                  </p>
                  <button onClick={() => handleCancelAppointment(appointment.id)} className="cancel-appointment-button">
            Cancel Appointment
          </button>
                </div>
              ))}      
            </div>
           
          </div>
        </>
      )}
    </div>
  );
};

// Export Notification component for use in other parts of the application
export default Notification;