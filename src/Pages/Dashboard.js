import React from 'react';
import { Table } from 'react-bootstrap';
import CircularProgressBar from '../Components/CircularProgressBar';
import HeaderBar from "../Components/HeaderBar";
import '../Components/styles/style.css';

function Dashboard() {
  return (
      <div className="dashboard px-xxl-5 pt-2 mt-1 pb-4 px-2">
        <HeaderBar />
        <div className="cardBox">
            <div className="box py-5  px-3 justify-content-center">
                <div className='d-flex justify-content-between'>
                    <div>
                        <div className="numbers">2,139</div>
                        <div className="cardName mt-2">Students</div>
                    </div>

                    <div className="iconBx">
                        <i className="fas fa-user-graduate"></i>
                    </div>
                </div>
            </div>

            <div className="box py-5 px-xxl-4 px-3 justify-content-center">
                <div className='d-flex justify-content-between'>
                    <div>
                        <div className="numbers">60</div>
                        <div className="cardName mt-2">Teachers</div>
                    </div>

                    <div className="iconBx">
                        <i className="fas fa-chalkboard-teacher"></i>
                    </div>
                </div>
            </div>

            <div className="box py-5 px-xxl-4 px-3 justify-content-center">
                <div className='d-flex justify-content-between'>
                    <div>
                        <div className="numbers">6</div>
                        <div class="cardName mt-2">Schools</div>
                    </div>

                    <div className="iconBx">
                        <i className="fas fa-university"></i>
                    </div>
                </div>
            </div>

            <div class="box py-5 px-xxl-4 px-3 justify-content-center">
                <div className='d-flex justify-content-between'>
                    <div>
                        <div className="numbers income text-break">Rs.46,842</div>
                        <div className="cardName mt-2">Income</div>
                    </div>

                    <div className="iconBx">
                        <i className="fas fa-hand-holding-usd"></i>
                    </div>
                </div>
            </div>
        </div>

        <div className="details mt-5">
            <div className="timetable p-3">
                <div className="timetableheader">
                    <h2 className="pb-3 text-center fw-bold">Average Results</h2>
                </div>
                <div className="tablecont">
                    <Table cellspacing="0">
                        <thead>
                            <tr>
                                <th className="period"></th>
                                <th className="text-center align-middle">7.30-8.15</th>
                                <th className="text-center align-middle">8.15-9.00</th>
                                <th className="text-center align-middle">9.00-9.45</th>
                                <th className="text-center align-middle">9.45-10.30</th>
                                <th className="text-center align-middle">10.30-11.15</th>
                                <th className="text-center align-middle">11.15-12.00</th>
                                <th className="text-center align-middle">12.00-12.45</th>
                                <th className="text-center align-middle">12.45-1.30</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="week text-center align-middle"><b>Mon</b></td>
                                <td colSpan={2} className="maths text-center align-middle">Combined Maths</td>
                                <td colSpan={2} className="phy text-center align-middle">Physics</td>
                                <td className="chem text-center align-middle">Chemistry</td>
                                <td rowSpan={5} className="lunch text-center align-middle">Lunch Break</td>
                                <td className="chem text-center align-middle">Chemistry</td>
                                <td className="eng text-center align-middle">English</td>
                            </tr>
                            <tr>
                                <td className="week text-center align-middle"><b>Tue</b></td>
                                <td className="eng text-center align-middle">English</td>
                                <td colSpan={2} className="maths text-center align-middle">Combined Maths</td>
                                <td colSpan={2} className="phy text-center align-middle">Physics</td>
                                <td colSpan={2} className="chem text-center align-middle">Chemistry</td>
                            </tr>
                            <tr>
                                <td className="week text-center align-middle"><b>Wed</b></td>
                                <td colSpan={2} className="phy text-center align-middle">Physics</td>
                                <td className="maths text-center align-middle">Combined Maths</td>
                                <td className="chem text-center align-middle">Chemistry</td>
                                <td></td>
                                <td colSpan={2} className="eng text-center align-middle">English</td>
                            </tr>
                            <tr>
                                <td className="week text-center align-middle"><b>Thu</b></td>
                                <td colSpan={2} className="maths text-center align-middle">Combined Maths</td>
                                <td></td>
                                <td colSpan={2} className="chem text-center align-middle">Chemistry</td>
                                <td className="phy text-center align-middle">Physics</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="week text-center align-middle"><b>Fri</b></td>
                                <td></td>
                                <td className="phy text-center align-middle">Physics</td>
                                <td colSpan={2} className="maths text-center align-middle">Combined Maths</td>
                                <td className="chem text-center align-middle">Chemistry</td>
                                <td colSpan={2} className="eng text-center align-middle">English</td>
                            </tr>
                        </tbody>  
                    </Table>
                </div>
            </div>

            <div className="progressbar p-3">
                <div className="progressheader">
                    <h2 className="pb-3 text-center fw-bold">Average Results</h2>
                </div>
                <CircularProgressBar percentage={75} />
                <div className="progresscont text-center fs-6 fw-medium mt-2">
                    <p className="mb-0">Combine Maths = <span class="maths">75%</span></p>
                    <p className="mb-0">Physic = <span class="phy">80%</span></p>
                    <p className="mb-0">Chemistry = <span class="chem">77%</span></p>
                    <p className="mb-0">English = <span class="eng">85%</span></p>
                </div>
            </div>
        </div>
      </div>
  );
}

export default Dashboard;