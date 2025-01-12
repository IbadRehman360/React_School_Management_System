import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import HeaderBar from "../Components/HeaderBar";
import "../Components/styles/style.css";

function Fee() {
 
  const defaultFees = [
    {
      id: 1,
      subject: "Combined Maths",
      price: 500,
      partialPaid: 500,
      paymentDate: "2023/02/26",
      status: "Fully Paid",
    },
    {
      id: 2,
      subject: "Physics",
      price: 500,
      partialPaid: 250,
      paymentDate: "2023/02/24",
      status: "Partially Paid",
    },
    {
      id: 3,
      subject: "Chemistry",
      price: 500,
      partialPaid: 250,
      paymentDate: "2023/01/29",
      status: "Partially Paid",
    },
    {
      id: 4,
      subject: "English",
      price: 400,
      partialPaid: 0,
      paymentDate: "2023/02/24",
      status: "Not Paid",
    },
  ];

 
  const [fees, setFees] = useState([]);

  const [statusFilter, setStatusFilter] = useState("All");

  const [searchTerm, setSearchTerm] = useState("");

  const [sortField, setSortField] = useState("");  
  const [sortDirection, setSortDirection] = useState("asc");  

  const [subject, setSubject] = useState("Combined Maths");
  const [price, setPrice] = useState("");
  const [partialPaid, setPartialPaid] = useState(0);
  const [paymentDate, setPaymentDate] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const storedFees = localStorage.getItem("myFees");
    if (storedFees) {
      setFees(JSON.parse(storedFees));
    } else {
      setFees(defaultFees);
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem("myFees", JSON.stringify(fees));
  }, [fees]);

 
  const computeStatus = (priceValue, partialValue) => {
    const priceNum = Number(priceValue);
    const partialNum = Number(partialValue);

    if (partialNum <= 0) return "Not Paid";
    if (partialNum >= priceNum) return "Fully Paid";
    return "Partially Paid";
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

    const priceNum = Number(price);
    const partialNum = Number(partialPaid);

    if (!paymentDate.trim()) {
      alert("Please enter a valid payment date.");
      return;
    }
    if (isNaN(priceNum) || priceNum <= 0) {
      alert("Price must be a positive number.");
      return;
    }
    if (isNaN(partialNum) || partialNum < 0) {
      alert("Partial paid amount must be zero or positive number.");
      return;
    }

    const newStatus = computeStatus(priceNum, partialNum);

    if (editingId) {
      setFees((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? {
                ...item,
                subject,
                price: priceNum,
                partialPaid: partialNum,
                paymentDate,
                status: newStatus,
              }
            : item
        )
      );
      setEditingId(null);
    } else {
      const newId = fees.reduce((maxId, f) => Math.max(maxId, f.id), 0) + 1;
      const newFee = {
        id: newId,
        subject,
        price: priceNum,
        partialPaid: partialNum,
        paymentDate,
        status: newStatus,
      };
      setFees((prev) => [...prev, newFee]);
    }

    setSubject("Combined Maths");
    setPrice("");
    setPartialPaid(0);
    setPaymentDate("");
  };

 
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;
    setFees((prev) => prev.filter((item) => item.id !== id));
  };
 
  const handleEdit = (id) => {
    const feeToEdit = fees.find((item) => item.id === id);
    if (!feeToEdit) return;

    setEditingId(id);
    setSubject(feeToEdit.subject);
    setPrice(feeToEdit.price);
    setPartialPaid(feeToEdit.partialPaid);
    setPaymentDate(feeToEdit.paymentDate);
  };

 
  const filteredByStatus = fees.filter((item) => {
    if (statusFilter === "All") return true;
    return item.status === statusFilter;
  });

  const searchedFees = filteredByStatus.filter((item) => {
    const subj = item.subject.toLowerCase();
    const search = searchTerm.toLowerCase();
    return subj.includes(search);
  });

  const sortedFees = [...searchedFees].sort((a, b) => {
    if (!sortField) return 0; 
    let aValue = a[sortField];
    let bValue = b[sortField];

    if (sortField === "subject") {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }
    if (sortField === "paymentDate") {
      const parseDate = (dateStr) => {
        const parts = dateStr.split("/");
        return new Date(parts[0], parts[1] - 1, parts[2]);
      };
      aValue = parseDate(aValue).getTime();
      bValue = parseDate(bValue).getTime();
    }

    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });
 
  const handleSort = (field) => {
 
    if (sortField === field) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };
 
  return (
    <div className="myfee px-xxl-5 pt-2 mt-1 pb-4 px-2">
      <HeaderBar />

      <div className="feedet p-xxl-4 py-lg-4 pt-4 pb-2 px-3">
        <div className="coursefee p-4">
          <div className="cardHeader">
            <h2 className="pb-3 text-center fw-bold">Class Payment Details</h2>
          </div>

          <div className="mb-4 d-flex flex-wrap align-items-center justify-content-center gap-3">
            <div>
              <Form.Label className="fw-bold me-2">Filter by Status:</Form.Label>
              <Form.Select
                style={{ width: "180px" }}
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Fully Paid">Fully Paid</option>
                <option value="Partially Paid">Partially Paid</option>
                <option value="Not Paid">Not Paid</option>
              </Form.Select>
            </div>

            <div>
              <Form.Label className="fw-bold me-2">Search by Subject:</Form.Label>
              <Form.Control
                type="text"
                style={{ width: "180px" }}
                placeholder="e.g. Maths"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div>
              <Form.Label className="fw-bold me-2">Sort By:</Form.Label>
              <Form.Select
                style={{ width: "180px" }}
                value={sortField}
                onChange={(e) => {
                  setSortField(e.target.value);
                  setSortDirection("asc");
                }}
              >
                <option value="">No Sorting</option>
                <option value="subject">Subject</option>
                <option value="price">Price</option>
                <option value="paymentDate">Payment Date</option>
              </Form.Select>
            </div>

            {sortField && (
              <div>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
                  }}
                >
                  {sortDirection === "asc" ? "Asc" : "Desc"}
                </Button>
              </div>
            )}
          </div>

          <div className="border p-3 rounded mb-4">
            <h4 className="text-center mb-3">
              {editingId ? "Edit Payment" : "Add New Payment"}
            </h4>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col xs={12} md={3} className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  >
                    <option value="Combined Maths">Combined Maths</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="English">English</option>
                  </Form.Select>
                </Col>

                <Col xs={12} md={3} className="mb-3">
                  <Form.Label>Price (Rs.)</Form.Label>
                  <Form.Control
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="e.g. 500"
                  />
                </Col>

                <Col xs={12} md={3} className="mb-3">
                  <Form.Label>Amount Paid (Rs.)</Form.Label>
                  <Form.Control
                    type="number"
                    value={partialPaid}
                    onChange={(e) => setPartialPaid(e.target.value)}
                    placeholder="e.g. 250"
                  />
                </Col>

                <Col xs={12} md={3} className="mb-3">
                  <Form.Label>Payment Date</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="YYYY/MM/DD"
                    value={paymentDate}
                    onChange={(e) => setPaymentDate(e.target.value)}
                  />
                </Col>
              </Row>
              <div className="text-center">
                <Button variant="primary" type="submit">
                  {editingId ? "Update Fee" : "Add Fee"}
                </Button>
              </div>
            </Form>
          </div>

          <table className="mt-3 w-100 table table-bordered">
            <thead>
              <tr>
                <th
                  className="text-center"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleSort("subject")}
                >
                  Subject
                  {sortField === "subject"
                    ? sortDirection === "asc"
                      ? " ▲"
                      : " ▼"
                    : ""}
                </th>
                <th
                  className="text-center"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleSort("price")}
                >
                  Price
                  {sortField === "price"
                    ? sortDirection === "asc"
                      ? " ▲"
                      : " ▼"
                    : ""}
                </th>
                <th
                  className="text-center"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleSort("paymentDate")}
                >
                  Payment Date
                  {sortField === "paymentDate"
                    ? sortDirection === "asc"
                      ? " ▲"
                      : " ▼"
                    : ""}
                </th>
                <th className="text-center">Status</th>
                <th className="text-center" style={{ width: "120px" }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedFees.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-3">
                    No fees to display.
                  </td>
                </tr>
              )}
              {sortedFees.map((fee) => (
                <tr key={fee.id}>
                  <td className="text-center p-2">{fee.subject}</td>
                  <td className="text-center p-2">Rs. {fee.price}.00</td>
                  <td className="text-center p-2">{fee.paymentDate}</td>
                  <td className="text-center p-2">
                    {fee.status === "Fully Paid" && (
                      <span className="status fully fw-bold">Fully Paid</span>
                    )}
                    {fee.status === "Partially Paid" && (
                      <span className="status partially fw-bold">
                        Partially Paid
                      </span>
                    )}
                    {fee.status === "Not Paid" && (
                      <span className="status not fw-bold">Not Paid</span>
                    )}
                  </td>
                  <td className="text-center p-2">
                    <Button
                      variant="warning"
                      size="sm"
                      className="me-1"
                      onClick={() => handleEdit(fee.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(fee.id)}
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

export default Fee;
