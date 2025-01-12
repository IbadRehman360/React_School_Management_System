import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import HeaderBar from "../Components/HeaderBar";
import '../Components/styles/style.css';

function Enrollment() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [enrollDate, setEnrollDate] = useState("");
  const [subject, setSubject] = useState("Combined Maths");
  const [grade, setGrade] = useState("Grade 12-A");

  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    const storedEnrollments = localStorage.getItem("studentEnrollments");
    if (storedEnrollments) {
      setEnrollments(JSON.parse(storedEnrollments));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("studentEnrollments", JSON.stringify(enrollments));
  }, [enrollments]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim() || !enrollDate) {
      alert("Please fill out all required fields.");
      return;
    }

    const newEnrollment = {
      id: enrollments.length + 1,
      fullName,
      email,
      phone,
      date: enrollDate,
      subject,
      grade,
    };

    setEnrollments((prev) => [...prev, newEnrollment]);

    setFullName("");
    setEmail("");
    setPhone("");
    setEnrollDate("");
    setSubject("Combined Maths");
    setGrade("Grade 12-A");
  };

  return (
    <div className="courseenroll px-xxl-5 pt-2 mt-1 pb-4 px-2">
      <HeaderBar />
      <div className="border rounded p-xxl-4 py-lg-4 pt-4 pb-2 px-3">
        <div className="enrollHeader">
          <h2 className="pb-3 text-center fw-bold">Enroll Your Course</h2>
        </div>

        <section className="enroll">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter full name"
                className="py-xs-2 py-1"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="py-xs-2 py-1"
                required
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group
                className="mb-md-0 mb-3"
                as={Col}
                sm={12}
                md={6}
                controlId="formGridPhone"
              >
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter phone number"
                  className="py-xs-2 py-1"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} sm={12} md={6} controlId="formGridDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  value={enrollDate}
                  onChange={(e) => setEnrollDate(e.target.value)}
                  className="py-xs-2 py-1"
                  required
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} sm={12} md={6} controlId="formGridSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="py-xs-2 py-1"
                  required
                >
                  <option value="Combined Maths">Combined Maths</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Physics">Physics</option>
                  <option value="English">English</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} sm={12} md={6} controlId="formGridGrade">
                <Form.Label>Grade</Form.Label>
                <Form.Select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="py-xs-2 py-1"
                  required
                >
                  <option value="Grade 12-A">Grade 12-A</option>
                  <option value="Grade 12-B">Grade 12-B</option>
                  <option value="Grade 13-A">Grade 13-A</option>
                  <option value="Grade 13-B">Grade 13-B</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Button
              type="submit"
              className="btn btn-danger col-12 py-lg-3 py-md-2 py-xs-1 mt-3"
            >
              Enroll
            </Button>
          </Form>
        </section>
      </div>

      <div className="enrollmentList m-4">
        <div className="p-3">
          <div className="enrollmentHeader">
            <h2 className="pb-3 text-center fw-bold">Enrollment List</h2>
          </div>
          {enrollments.length === 0 ? (
            <p className="text-center">No enrollments found.</p>
          ) : (
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="text-center">ID</th>
                  <th className="text-center">Full Name</th>
                  <th className="text-center">Email</th>
                  <th className="text-center">Phone</th>
                  <th className="text-center">Date</th>
                  <th className="text-center">Subject</th>
                  <th className="text-center">Grade</th>
                </tr>
              </thead>
              <tbody>
                {enrollments.map((enrollment) => (
                  <tr key={enrollment.id}>
                    <td className="text-center p-2">{enrollment.id}</td>
                    <td className="text-center p-2">{enrollment.fullName}</td>
                    <td className="text-center p-2">{enrollment.email}</td>
                    <td className="text-center p-2">{enrollment.phone}</td>
                    <td className="text-center p-2">{enrollment.date}</td>
                    <td className="text-center p-2">{enrollment.subject}</td>
                    <td className="text-center p-2">{enrollment.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Enrollment;
