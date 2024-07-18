import React, { useState } from 'react'
import Doctors from "../component/Doctors.jsx"
import {appointmentData} from "../helpers/data.js"
import AppointmentList from "../component/ApponitmentList.jsx"
export default function Home() {
  /* we need this state here because it will be needed in both component  */
  const [appointments,setAppointments]=useState(appointmentData)
  return (
    <div>
       <h1>CLRUSWAY HOSPITAL</h1>
      <Doctors appointments={appointments} setAppointments={setAppointments}/>
      <AppointmentList appointments={appointments} setAppointments={setAppointments}/>
    </div>
  )
}
