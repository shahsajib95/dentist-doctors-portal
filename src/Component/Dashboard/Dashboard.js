import React from 'react';
import './Dashboard.css'
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh,faCalendarAlt, faUsers, faFileMedical, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="row">
                <div className="col-md-3">
                    <div className="dash-icon p-5 text-white">
                        <div className="dash-txt align-self-start">
                        <h6 className="mb-5"><FontAwesomeIcon icon={faTh} className="mr-3"/>Dashboard</h6>
                         <h6 className="mb-5"><FontAwesomeIcon icon={faCalendarAlt} className="mr-3"/>Appoinment</h6>
                         <h6 className="mb-5"><FontAwesomeIcon icon={faUsers} className="mr-3"/>Patients</h6>
                         <h6 className="mb-5"><FontAwesomeIcon icon={faFileMedical} className="mr-3"/>Presciptions</h6>
                         <h6 className="mb-5"><FontAwesomeIcon icon={ faCog } className="mr-3"/>Sttings</h6>
                        </div>
                        <div className="log-out">
                            <h6><FontAwesomeIcon icon={faSignOutAlt} className="mr-3"/>Log Out</h6>
                        </div>
                    </div>
                
                </div>
                <div className="col-md-9">
                    <div className="dash-body p-5">
                        <h4>Dashboard</h4>
                        <div className="row mt-5 text-white">
                            <div className="col-md-3">
                            <div className="top-box1 p-3">
                             <h1>09</h1>
                             <p>Pending Appoinment</p>
                            </div>
                            </div>
                            <div className="col-md-3">
                            <div className="top-box2 p-3">
                             <h1>09</h1>
                             <p>Today's Appoinment</p>
                            </div>
                            </div>
                            <div className="col-md-3">
                            <div className="top-box3 p-3">
                             <h1>09</h1>
                             <p>Total Appoinment</p>
                            </div>
                            </div>
                            <div className="col-md-3">
                            <div className="top-box4 p-3">
                             <h1>09</h1>
                             <p>Today's Patients</p>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="dash-table p-5 mr-4" >
                    <h5>Recent Week's Appoinments</h5>
                    <table class="table table-borderless">
                    <thead>
                        <tr>
                        <th scope="col">Sr. No</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Name</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Prescription</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td >Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        </tr>
                       
                    
                        
                    </tbody>
                    </table>
                    </div>


                </div>
            </div>
            </div>
      
    );
};

export default Dashboard;