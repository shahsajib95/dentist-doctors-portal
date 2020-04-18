import React, { useState } from 'react';
import Calendar from 'react-calendar';
import image from '../../img/MaskGroup.png'
import './Appoinment.css'
import 'react-calendar/dist/Calendar.css';
import treatment from '../../Component/fakeData/treatment'
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';

const Appoinment = (props) => {

const [selectDate, setSelectedDate] = useState(null);
const [time, setTime] = useState([]);
const [appoName, setAppoName] = useState([])
const [appo, setAppo] = useState([]);

const addAppoinment = (appoinment) =>{
    console.log(appoinment);
    const newTime = [appoinment.time];
    setTime(newTime);
    const newAppoName = [appoinment.name];
    setAppoName(newAppoName);
}

 // // const appoinment = 
    // fetch('http://localhost:4200/bookAppoinment',{
    //     method:'POST',
    //     headers: {
    //         "Content-type": "application/json; charset=UTF-8"
    //   },
    //     body:JSON.stringify(appoinment)
    //    })

const {appoTime, personname, phone, email, date} = setAppo;

const addAppoData = (e)=>{
    e.preventDefault()
    setAppo({ ...appo, [e.target.name]: e.target.value } )
};
const bookAppoinment = e =>{
   console.log(appo)
}
    return (
     
        <section className="appoinment-top">
            
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-5 pl-5">
                    <li className="nav-item active">
                         <a className="nav-link ml-5 pl-5" href="/"><Link to="/home">Home</Link><span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ml-5" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ml-5" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ml-5" href="#">Reviews</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ml-5" href="#">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ml-5 " href="#">Contact Us</a>
                    </li>
                
                    </ul>
                </div>
                </nav>
            </div>

            <div className="header-content p-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Appoinment</h1>
                        <br/>
                        <div className="calendar">
                        <Calendar 
                        onChange={date => setSelectedDate(date)}
                        minDate={new Date()}
                        value={selectDate}>
                        </Calendar>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="w-75 rounded" src={image} alt=""></img>
                    </div>
                </div>
            </div>

        
            <div className="container">
             <div className="appoinment text-center">
             <h1 className="mt-3">Availabe Appoinments on March 30, 2020</h1>
            
                {/* PopUp Body */}
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header ">
                        <h5 className="modal-title text-center" id="exampleModalLabel">{appoName}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <from>
                    <div className="form-group">
                        <input name="time" placeholder={time} className="form-control mb-2" value={appoTime} onChange={addAppoData}></input>
                        <input name="name" placeholder="Your Name" className="form-control mb-2"  value={personname} onChange={addAppoData}></input>
                        <input name="phone" placeholder="Phone Number" className="form-control mb-2" value={phone} onChange={addAppoData}></input>
                        <input name="email" placeholder="Email" className="form-control mb-2" value={email} onChange={addAppoData}></input>
                        <input name="date" placeholder={selectDate ? selectDate : "Please Select Date from Calendar"} className="form-control mb-2" value={date} onChange={addAppoData}></input>
                    </div>
                    </from>
                    </div>
                    <div class="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary"  onClick={bookAppoinment} >Book Now</button>
                    </div>
                    </div>
                </div>
                </div>
            {/* End PopUp */}
          
            <div className="row my-5">
                {treatment.map( treatment =>
                 <div className="col-lg-4 app-box mb-4">
                    <h5>{treatment.name}</h5>
                    <h6>{treatment.time}</h6>
                    <p className="text-black-50">10 SPACES AVAILABLE</p>
                    <button className="btn btn-use" data-toggle="modal" data-target="#exampleModal" onClick={()=>addAppoinment(treatment)}>Book Appoinment</button>
                </div>
                
                 )}
             </div>
                
               
            </div>
            </div>
        </section>
    );
};

export default Appoinment;