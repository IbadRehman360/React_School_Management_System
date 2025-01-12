import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import HeaderBar from "../Components/HeaderBar";
 import maths from "../Components/assets/b1.png";
import chemistry from "../Components/assets/b2.png";
import english from "../Components/assets/b3.png";
import physics from "../Components/assets/b4.png";
import '../Components/styles/style.css';

function Assignment() {
 
  const getImageBySubject = (subj) => {
    switch (subj) {
      case "Combined Maths":
        return maths;
      case "Chemistry":
        return chemistry;
      case "Physics":
        return physics;
      case "English":
        return english;
      default:
        return maths;
    }
  };

 
  const defaultAssignments = [
    {
      id: 1,
      subject: "Combined Maths",
      date: "2023-07-15",
      count: 2,
      status: "Not Completed",
      image: getImageBySubject("Combined Maths"),
    },
    {
      id: 2,
      subject: "Chemistry",
      date: "2023-06-28",
      count: 5,
      status: "Completed",
      image: getImageBySubject("Chemistry"),
    },
    {
      id: 3,
      subject: "Physics",
      date: "2023-07-28",
      count: 2,
      status: "Completed",
      image: getImageBySubject("Physics"),
    },
    {
      id: 4,
      subject: "English",
      date: "2023-06-28",
      count: 1,
      status: "Not Completed",
      image: getImageBySubject("English"),
    },
  ];

  const [assignments, setAssignments] = useState([]);

  const [filter, setFilter] = useState("All");

  const [newSubject, setNewSubject] = useState("Combined Maths");
  const [newDate, setNewDate] = useState("");
  const [newCount, setNewCount] = useState(1);
  const [newStatus, setNewStatus] = useState("Not Completed");
  const [editingId, setEditingId] = useState(null); 

 
  useEffect(() => {
    const storedData = localStorage.getItem("myAssignments");
    if (storedData) {
      setAssignments(JSON.parse(storedData));
    } else {
      setAssignments(defaultAssignments);
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem("myAssignments", JSON.stringify(assignments));
  }, [assignments]);

 
  const handleAddOrUpdateAssignment = (e) => {
    e.preventDefault();

    if (!newDate) {
      alert("Please select a valid date.");
      return;
    }
    if (newCount < 1) {
      alert("Number of assignments must be at least 1.");
      return;
    }

    if (editingId) {
      setAssignments((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? {
                ...item,
                subject: newSubject,
                date: newDate,
                count: newCount,
                status: newStatus,
                image: getImageBySubject(newSubject),
              }
            : item
        )
      );
      setEditingId(null);
    } else {
      const newId =
        assignments.reduce((maxId, item) => Math.max(maxId, item.id), 0) + 1;

      const newAssignment = {
        id: newId,
        subject: newSubject,
        date: newDate,
        count: newCount,
        status: newStatus,
        image: getImageBySubject(newSubject),
      };
      setAssignments((prev) => [...prev, newAssignment]);
    }

    setNewSubject("Combined Maths");
    setNewDate("");
    setNewCount(1);
    setNewStatus("Not Completed");
  };

 
  const toggleStatus = (assignmentId) => {
    setAssignments((prev) =>
      prev.map((item) => {
        if (item.id === assignmentId) {
          return {
            ...item,
            status:
              item.status === "Completed" ? "Not Completed" : "Completed",
          };
        }
        return item;
      })
    );
  };

 
  const deleteAssignment = (assignmentId) => {
    const confirmed = window.confirm("Are you sure you want to delete?");
    if (confirmed) {
      setAssignments((prev) => prev.filter((item) => item.id !== assignmentId));
    }
  };
 
  const editAssignment = (assignmentId) => {
    const assignmentToEdit = assignments.find((a) => a.id === assignmentId);
    if (!assignmentToEdit) return;

    setEditingId(assignmentId);
    setNewSubject(assignmentToEdit.subject);
    setNewDate(assignmentToEdit.date);
    setNewCount(assignmentToEdit.count);
    setNewStatus(assignmentToEdit.status);
  };

 
  const filteredAssignments = assignments.filter((item) => {
    if (filter === "All") return true;
    if (filter === "Completed") return item.status === "Completed";
    if (filter === "Not Completed") return item.status === "Not Completed";
    return true;
  });

  return (
    <div className="myassignment px-xxl-5 pt-2 mt-1 pb-4 px-2">
      <HeaderBar />

      <div className="assignmentdet p-xxl-4 py-lg-4 pt-4 pb-2 px-3">
        <div className="assignmentHeader">
          <h2 className="pb-3 text-center fw-bold">My Assignments</h2>
        </div>

        <div className="d-flex align-items-center justify-content-center mb-4">
          <label className="me-3 fw-bold">Filter by status:</label>
          <Form.Select
            style={{ width: "200px" }}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Not Completed">Not Completed</option>
          </Form.Select>
        </div>

        <div className="assignmentForm mb-5">
          <h4 className="fw-bold text-center mb-3">
            {editingId ? "Edit Assignment" : "Add New Assignment"}
          </h4>
          <Form onSubmit={handleAddOrUpdateAssignment}>
            <Row>
              <Col xs={12} sm={6} md={3} className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Select
                  value={newSubject}
                  onChange={(e) => setNewSubject(e.target.value)}
                  required
                >
                  <option value="Combined Maths">Combined Maths</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Physics">Physics</option>
                  <option value="English">English</option>
                </Form.Select>
              </Col>

              <Col xs={12} sm={6} md={3} className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                  required
                />
              </Col>

              <Col xs={12} sm={6} md={3} className="mb-3">
                <Form.Label>Number of Assignments</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  value={newCount}
                  onChange={(e) => setNewCount(e.target.value)}
                  required
                />
              </Col>

              <Col xs={12} sm={6} md={3} className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                  required
                >
                  <option value="Not Completed">Not Completed</option>
                  <option value="Completed">Completed</option>
                </Form.Select>
              </Col>
            </Row>

            <div className="text-center">
              <Button variant="primary" type="submit">
                {editingId ? "Update" : "Add"} Assignment
              </Button>
            </div>
          </Form>
        </div>

        <div className="cards_wrap d-flex flex-wrap p-xxl-3 py-lg-3 pt-3 justify-content-around">
          {filteredAssignments.length === 0 && (
            <p className="text-center mt-4">No assignments to display.</p>
          )}

          {filteredAssignments.map((assignment) => (
            <div className="card_item py-3 px-xxl-4" key={assignment.id}>
              <div className="card_inner p-md-4 py-3 px-2">
                <img
                  src={assignment.image}
                  className="mb-2 rounded-circle"
                  alt={assignment.subject}
                  style={{ width: "80px", height: "80px" }}
                />
                <div className="subject fw-bold text-uppercase">
                  {assignment.subject}
                </div>
                <div className="Date fw-semibold my-2">{assignment.date}</div>
                <div className="noofassignmnets pb-2">
                  Number of Assignment(s): {assignment.count}
                </div>
                <div
                  className={`status ${
                    assignment.status === "Completed"
                      ? "complete"
                      : "notcomplete"
                  } p-1 rounded fw-bold text-center mb-2`}
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleStatus(assignment.id)}
                  title="Click to toggle status"
                >
                  {assignment.status}
                </div>

                <div className="d-flex justify-content-between">
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => editAssignment(assignment.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteAssignment(assignment.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Assignment;
