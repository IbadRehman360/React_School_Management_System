import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import HeaderBar from "../Components/HeaderBar";
import '../Components/styles/style.css';

function Attendence() {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [status, setStatus] = useState("attend");

  const [attendanceRecords, setAttendanceRecords] = useState([]);

  useEffect(() => {
    const storedRecords = localStorage.getItem("attendanceRecords");
    if (storedRecords) {
      setAttendanceRecords(JSON.parse(storedRecords));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("attendanceRecords", JSON.stringify(attendanceRecords));
  }, [attendanceRecords]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedSubject) {
      alert("Please select a subject before submitting!");
      return;
    }

    const newRecord = {
      id: attendanceRecords.length + 1,
      subject: selectedSubject,
      date: new Date().toLocaleDateString("en-CA"), 
      status: status === "attend" ? "Attended" : "Not Attended",
    };

    setAttendanceRecords([...attendanceRecords, newRecord]);

    setSelectedSubject("");
    setStatus("attend");
  };

  return (
    <div className="myattendence px-xxl-5 pt-2 mt-1 pb-4 px-2">
      <HeaderBar />

      <div className="attendencedet p-xxl-4 py-lg-4 pt-4 pb-2 px-3">
        <div className="courseattendence p-4">
          <div className="attendenceHeader">
            <h2 className="pb-3 text-center fw-bold">Mark Your Attendance</h2>
          </div>
          <div className="attendencecont mt-3">
            <p>
              Lorem Ipsum is simply the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever 
              since the 1500s, when an unknown printer took a galley of type 
              and scrambled it to make a type specimen book.
            </p>
          </div>

          <section className="attendence">
            <div className="attendence-box">
              <h3 className="fw-bold">Attendance</h3>
              <div className="attendence-option">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="subjectSelect">
                    <Form.Label>Select Subject</Form.Label>
                    <Form.Control
                      as="select"
                      value={selectedSubject}
                      onChange={(e) => setSelectedSubject(e.target.value)}
                    >
                      <option value="">--Choose a Subject--</option>
                      <option value="Combined Maths">Combined Maths</option>
                      <option value="Physics">Physics</option>
                      <option value="Chemistry">Chemistry</option>
                      <option value="English">English</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Check
                    label="Attend"
                    name="attendanceGroup"
                    type="radio"
                    id="attendRadio"
                    checked={status === "attend"}
                    onChange={() => setStatus("attend")}
                    className="me-4"
                  />
                  <Form.Check
                    label="Not Attend"
                    name="attendanceGroup"
                    type="radio"
                    id="notAttendRadio"
                    checked={status === "notAttend"}
                    onChange={() => setStatus("notAttend")}
                  />

                  <Button type="submit" variant="success" style={{ marginLeft: "10px"}} className="">
                    Mark Attendance
                  </Button>
                </Form>
              </div>
            </div>
          </section>
        </div>

      </div>
        <div className="courseattendence mt-4">
          <div className="courseattendencetable p-3">
            <div className="attendenceHeader">
              <h2 className="pb-4 text-center fw-bold">Attendance Details</h2>
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
                {attendanceRecords.map((record) => (
                  <tr key={record.id}>
                    <td className="text-center p-2">{record.id}</td>
                    <td className="text-center p-2">{record.subject}</td>
                    <td className="text-center p-2">{record.date}</td>
                    <td className="text-center p-2">
                      <span
                        className={`status ${
                          record.status === "Attended"
                            ? "attend"
                            : "notattend"
                        } fw-bold`}
                      >
                        {record.status}
                      </span>
                    </td>
                  </tr>
                ))}
           
              </tbody>
            </table>
          </div>
        </div>
    </div>
  );
}

export default Attendence;
