import React ,{useState} from "react"
import {Container ,Col,Row} from "react-bootstrap"
import {doctorData} from "../helpers/data.js"
import AddModal from "./AddModal.jsx"; /* we need to use AddModal inside Doctors because we need to access the dr.name directly props from the parent Doctors */
export default function Doctors({appointments,setAppointments} ) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedoctor,setSelectedoctor]=useState("");
const handelClick =(dname) => {
  setSelectedoctor(dname);
     handleShow();
}

  return (
   
      <Container>
           <h3>Our Doctor</h3>
           <Row>
              {doctorData.map((dr)=>( 
                <Col key={dr.id} type="button">
                <img
                 src={dr.img}      /* img folder should be in public folder to access images through src attribute. If you put img folder under src folder, you need to import images one by one */
                 alt={dr.id}
                onClick={()=>handelClick(dr.name)}/>
                <div>
                <h5>{dr.name}</h5>
                <h6>{dr.dep}</h6>
                </div>
                </Col>

              ))}

           </Row>
           <AddModal 
           show={show}
           dname={selectedoctor}
           handleClose ={handleClose}
           appointments={appointments} 
           setAppointments={setAppointments} />
      </Container>
  ) 
}
