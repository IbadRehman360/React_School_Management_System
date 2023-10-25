import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import HeaderBar from "../Components/HeaderBar";
import '../Components/styles/style.css';

function Enrollment() {
  return (
      <div className="courseenroll px-xxl-5 pt-2 mt-1 pb-4 px-2">
           <HeaderBar />
          <div className="enrolldet p-xxl-4 py-lg-4 pt-4 pb-2 px-3">
              <div className="enrollHeader">
                  <h2 className="pb-3 text-center fw-bold">Enroll Your Course</h2>
              </div>
              <section className="enroll">
                <Form>
                  <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control placeholder="Enter full name" className="py-xs-2 py-1" required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email address" className="py-xs-2 py-1" required />
                  </Form.Group>

                  <Row className="mb-3">
                    <Form.Group className="mb-md-0 mb-3" as={Col} sm={12} md={6} controlId="formGridEmail">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="tel" placeholder="Enter phone number" className="py-xs-2 py-1" required />
                    </Form.Group>

                    <Form.Group as={Col} sm={12} md={6} controlId="formGridPassword">
                      <Form.Label>Date</Form.Label>
                      <Form.Control type="date" placeholder="Password" className="py-xs-2 py-1" required />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} sm={12} md={6} controlId="formGridState">
                      <Form.Label>Subject</Form.Label>
                      <Form.Select defaultValue="Combined Maths" className="py-xs-2 py-1" required>
                        <option>Combined Maths</option>
                        <option>Chemistry</option>
                        <option>Physics</option>
                        <option>English</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} sm={12} md={6} controlId="formGridState">
                      <Form.Label>Grade</Form.Label>
                      <Form.Select defaultValue="Grade 13-A" className="py-xs-2 py-1" required>
                        <option>Grade 12-A</option>
                        <option>Grade 12-B</option>
                        <option>Grade 13-A</option>
                        <option>Grade 13-B</option>
                      </Form.Select>
                    </Form.Group>
                  </Row>

                  <Button type="submit" className="btn btn-danger col-12 py-lg-3 py-md-2 py-xs-1 mt-3">Enroll</Button>
                </Form>
              </section>
          </div>
      </div>
  );
}

export default Enrollment;