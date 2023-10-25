import React from 'react';
import { Form, Button } from 'react-bootstrap';
import HeaderBar from "../Components/HeaderBar";
import '../Components/styles/style.css';

function Attendence() {
  return (
        <div className="myattendence px-xxl-5 pt-2 mt-1 pb-4 px-2">
            <HeaderBar />
            <div className="attendencedet p-xxl-4 py-lg-4 pt-4 pb-2 px-3">
                <div class="courseattendence p-4">
                    <div class="attendenceHeader">
                        <h2 className="pb-3 text-center fw-bold">Mark Your Attendence</h2>
                    </div>
                    <div class="attendencecont mt-3">
                        <p>Lorem Ipsum is simply the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a it to make a type specimen book.</p>
                    </div>
                    <section class="attendence">
                        <div class="attendence-box">
                            <h3 className="fw-bold">Attendence</h3>
                            <div class="attendence-option">
                                <Form>
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-2">
                                        <Form.Check
                                            label="Attend"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                            className="me-5 mb-1"
                                        />
                                        <Form.Check
                                            
                                            label="Not Attend"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                            className="mb-1"
                                        />
                                        </div>
                                    ))}
                                </Form>
                            </div>
                        </div>
                    </section>  
                    <Button type="submit" variant="danger" className="mt-3">Danger</Button> 
                </div>

                <div class="courseattendence m-4">
                    <div class="courseattendencetable p-3">
                        <div class="attendenceHeader">
                            <h2 className="pb-4 text-center fw-bold">Attendence Details</h2>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th className="text-center">Id</th>
                                    <th className="text-center">Subject</th>
                                    <th className="text-center">Date</th>
                                    <th className="text-center">Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="text-center p-2">1</td>
                                    <td className="text-center p-2">Combined Maths</td>
                                    <td className="text-center p-2">2023/02/26</td>
                                    <td className="text-center p-2"><span className="status attend fw-bold"> Attended</span></td>
                                </tr>

                                <tr>
                                    <td className="text-center p-2">2</td>
                                    <td className="text-center p-2">Physics</td>
                                    <td className="text-center p-2">2023/02/29</td>
                                    <td className="text-center p-2"><span className="status attend fw-bold"> Attended</span></td>
                                </tr>

                                <tr>
                                    <td className="text-center p-2">3</td>
                                    <td className="text-center p-2">Chemistry</td>
                                    <td className="text-center p-2">2023/03/05</td>
                                    <td className="text-center p-2"><span className="status notattend fw-bold"> Not Attended</span></td>
                                </tr>

                                <tr>
                                    <td className="text-center p-2">4</td>
                                    <td className="text-center p-2">Physics</td>
                                    <td className="text-center p-2">2023/03/08</td>
                                    <td className="text-center p-2"><span className="status attend fw-bold"> Attended</span></td>
                                </tr>

                                <tr>
                                    <td className="text-center p-2">5</td>
                                    <td className="text-center p-2">English</td>
                                    <td className="text-center p-2">2023/03/11</td>
                                    <td className="text-center p-2"><span className="status attend fw-bold"> Attended</span></td>
                                </tr>

                                <tr>
                                    <td className="text-center p-2">6</td>
                                    <td className="text-center p-2">Combined Maths</td>
                                    <td className="text-center p-2">2023/03/14</td>
                                    <td className="text-center p-2"><span className="status notattend fw-bold"> Not Attended</span></td>
                                </tr>

                                <tr>
                                    <td className="text-center p-2">7</td>
                                    <td className="text-center p-2">Physics</td>
                                    <td className="text-center p-2">2023/03/18</td>
                                    <td className="text-center p-2"><span className="status attend fw-bold"> Attended</span></td>
                                </tr>

                                <tr className="border-bottom-0">
                                    <td className="text-center p-2">8</td>
                                    <td className="text-center p-2">Chemistry</td>
                                    <td className="text-center p-2">2023/03/24</td>
                                    <td className="text-center p-2"><span className="status attend fw-bold"> Attended</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Attendence;