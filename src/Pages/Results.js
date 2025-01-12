import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import HeaderBar from "../Components/HeaderBar";
import '../Components/styles/style.css';

function Results() {

  const defaultResults = [
     {
      id: 1,
      term: "First Term",
      subject: "Combined Maths",
      issuedDate: "2023/02/26",
      marks: "75%",
    },
    {
      id: 2,
      term: "First Term",
      subject: "Physics",
      issuedDate: "2023/02/29",
      marks: "67%",
    },
    {
      id: 3,
      term: "First Term",
      subject: "Chemistry",
      issuedDate: "2023/03/05",
      marks: "82%",
    },
    {
      id: 4,
      term: "First Term",
      subject: "English",
      issuedDate: "2023/03/08",
      marks: "78%",
    },

     {
      id: 5,
      term: "Second Term",
      subject: "Combined Maths",
      issuedDate: "2023/08/01",
      marks: "75%",
    },
    {
      id: 6,
      term: "Second Term",
      subject: "Physics",
      issuedDate: "2023/08/08",
      marks: "67%",
    },
    {
      id: 7,
      term: "Second Term",
      subject: "Chemistry",
      issuedDate: "2023/08/15",
      marks: "82%",
    },
    {
      id: 8,
      term: "Second Term",
      subject: "English",
      issuedDate: "2023/08/15",
      marks: "78%",
    },
  ];

 
  const [results, setResults] = useState([]);

   const [termFilter, setTermFilter] = useState("All");

   const [term, setTerm] = useState("First Term");
  const [subject, setSubject] = useState("Combined Maths");
  const [issuedDate, setIssuedDate] = useState("");
  const [marks, setMarks] = useState("");
  const [editingId, setEditingId] = useState(null); 
 
  useEffect(() => {
    const storedData = localStorage.getItem("myResults");
    if (storedData) {
      setResults(JSON.parse(storedData));
    } else {
      setResults(defaultResults);
    }
  }, []);
 
  useEffect(() => {
    localStorage.setItem("myResults", JSON.stringify(results));
  }, [results]);

 
  const filteredResults = results.filter((item) => {
    if (termFilter === "All") return true;
    return item.term === termFilter;
  });

 
  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!issuedDate.trim()) {
      alert("Please enter an issued date.");
      return;
    }
    if (!marks.trim()) {
      alert("Please enter marks (e.g., 75%).");
      return;
    }

    if (editingId) {
       setResults((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? {
                ...item,
                term,
                subject,
                issuedDate,
                marks,
              }
            : item
        )
      );
       setEditingId(null);
    } else {
       const newId = Math.max(0, ...results.map((item) => item.id)) + 1;

      const newResult = {
        id: newId,
        term,
        subject,
        issuedDate,
        marks,
      };

      setResults((prev) => [...prev, newResult]);
    }
 
    setTerm("First Term");
    setSubject("Combined Maths");
    setIssuedDate("");
    setMarks("");
  };
 
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;
    setResults((prev) => prev.filter((item) => item.id !== id));
  };
 
  const handleEdit = (id) => {
    const resultToEdit = results.find((item) => item.id === id);
    if (!resultToEdit) return;

    setEditingId(id);
    setTerm(resultToEdit.term);
    setSubject(resultToEdit.subject);
    setIssuedDate(resultToEdit.issuedDate);
    setMarks(resultToEdit.marks);
  };

  return (
    <div className="myresults px-xxl-5 pt-2 mt-1 pb-4 px-2">
      <HeaderBar />

      <div className="resultsdet p-xxl-4 py-lg-4 pt-4 pb-2 px-3">
         <div className="resultsHeader text-center">
          <h2 className="pb-3 fw-bold">
            Student Test Results Management
          </h2>
        </div>

         <div className="mb-4 d-flex justify-content-center">
          <Form.Label className="fw-bold me-3">Filter by Term:</Form.Label>
          <Form.Select
            style={{ width: "200px" }}
            value={termFilter}
            onChange={(e) => setTermFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="First Term">First Term</option>
            <option value="Second Term">Second Term</option>
           </Form.Select>
        </div>

         <div className="p-4 border rounded mb-5">
          <h4 className="mb-3 text-center">
            {editingId ? "Edit Result" : "Add New Result"}
          </h4>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col xs={12} md={3} className="mb-3">
                <Form.Label>Term</Form.Label>
                <Form.Select
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                  required
                >
                  <option value="First Term">First Term</option>
                  <option value="Second Term">Second Term</option>
                </Form.Select>
              </Col>

              <Col xs={12} md={3} className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                >
                  <option value="Combined Maths">Combined Maths</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="English">English</option>
                </Form.Select>
              </Col>

              <Col xs={12} md={3} className="mb-3">
                <Form.Label>Issued Date</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g. 2023/08/15"
                  value={issuedDate}
                  onChange={(e) => setIssuedDate(e.target.value)}
                  required
                />
              </Col>

              <Col xs={12} md={3} className="mb-3">
                <Form.Label>Marks</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g. 75%"
                  value={marks}
                  onChange={(e) => setMarks(e.target.value)}
                  required
                />
              </Col>
            </Row>

            <div className="text-center">
              <Button variant="primary" type="submit">
                {editingId ? "Update Result" : "Add Result"}
              </Button>
            </div>
          </Form>
        </div>

        <div className="p-4 courseresults">
          <table className="w-100 table table-bordered">
            <thead>
              <tr>
                <th className="text-center">Id</th>
                <th className="text-center">Term</th>
                <th className="text-center">Subject</th>
                <th className="text-center">Issued Date</th>
                <th className="text-center">Marks</th>
                <th className="text-center" style={{ width: "120px" }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredResults.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center p-3">
                    No results found.
                  </td>
                </tr>
              )}
              {filteredResults.map((item) => (
                <tr key={item.id}>
                  <td className="text-center p-2">{item.id}</td>
                  <td className="text-center p-2">{item.term}</td>
                  <td className="text-center p-2">{item.subject}</td>
                  <td className="text-center p-2">{item.issuedDate}</td>
                  <td className="text-center p-2">{item.marks}</td>
                  <td className="text-center p-2">
                    <Button
                      variant="warning"
                      size="sm"
                      className="me-1"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(item.id)}
                    >
                      Del
                    </Button>
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

export default Results;
