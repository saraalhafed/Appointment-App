import React, { useState } from 'react'
import { Button ,Form,FormControl,FormGroup,FormLabel,Modal} from 'react-bootstrap'
export default function AddModal({show,handleClose,appointments,setAppointments,dname}) {

  const[patiantname,setPatioantname]=useState("")
  const[date,setDate]=useState("")

 const handelSubmit=()=>{
  setAppointments([...appointments,
    {
      id: appointments.length +1,
      patient: patiantname,
      day:date,
      consulted: false,
      doctor: dname,
    }
  ])
handleClose();
 }

  return (
    <div>
      {/* Live demo modal) from react-bootstrap page */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-danger'>Reservation for {dname}</Modal.Title>  {/* here shoud be the same name of the parameter dname  ,not (dr.name) */}
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handelSubmit}>
               <FormGroup className='mb-3'>
                <Form.Label> Patient Name</Form.Label>
                <FormControl
                type='text'
                required
                placeholder='Enter your name'
                onChange={(e)=>setPatioantname(e.target.value)}/>
               </FormGroup>

               <FormGroup className='mb-3'>
                <Form.Label>Day&Time </Form.Label>
                <FormControl
                type='datetime-local'  /* to see the time calender ,also install react-icons*/
                required
                placeholder='mm/dd/yyyy --:-- --'
                onChange={(e)=>setDate(e.target.value)}/>
               </FormGroup>

               <div className='text-center '>
          <Button variant="primary" type='submit' >
           Submit
          </Button>
          <Button variant="danger" onClick={handleClose}> {/* variant="danger" :like color */}
           Close
          </Button>
        </div>

            </Form>
        </Modal.Body>
       
      </Modal>
    </div>
  )
}
