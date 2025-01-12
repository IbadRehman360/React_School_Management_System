import React, { useState, useEffect } from 'react';
import maths from "../Components/assets/b1.png";
import chemistry from "../Components/assets/b2.png";
import english from "../Components/assets/b7.png";
import physics from "../Components/assets/b5.png";
import HeaderBar from "../Components/HeaderBar";
import '../Components/styles/style.css';

function Classes() {
  const [filter, setFilter] = useState("All");

 
  const [allClasses, setAllClasses] = useState([]);
  const [recentClasses, setRecentClasses] = useState([]);

 
  useEffect(() => {
    const dummyClasses = [
      {
        id: 1,
        name: "Combined Maths",
        teacher: "Mr. J.K. Bandara",
        date: "2023-07-02",
        description:
          "Lorem sit amet, consectetur adipisicing elit, sed do magna aliqua.",
        status: "Past",
        image: maths,
      },
      {
        id: 2,
        name: "English",
        teacher: "Mrs. K.I. Lohara",
        date: "2023-07-15",
        description:
          "Lorem sit amet, consectetur adipisicing elit, sed do magna aliqua.",
        status: "In Progress",
        image: english,
      },
      {
        id: 3,
        name: "Chemistry",
        teacher: "Ms. S.K.D. Rupasinghe",
        date: "2023-06-28",
        description:
          "Lorem sit amet, consectetur adipisicing elit, sed do magna aliqua.",
        status: "Past",
        image: chemistry,
      },
      {
        id: 4,
        name: "Physics",
        teacher: "Mrs. K.I. Lohara",
        date: "2023-07-15",
        description:
          "Lorem sit amet, consectetur adipisicing elit, sed do magna aliqua.",
        status: "In Progress",
        image: physics,
      },
      {
        id: 5,
        name: "English",
        teacher: "Mr. D.R. Prageeth",
        date: "2023-07-10",
        description:
          "Lorem sit amet, consectetur adipisicing elit, sed do magna aliqua.",
        status: "Past",
        image: english,
      },
    ];

 
    const dummyRecent = [
      dummyClasses.find((c) => c.id === 1),
      dummyClasses.find((c) => c.id === 2),
      dummyClasses.find((c) => c.id === 3),
    ].filter(Boolean) 

    setAllClasses(dummyClasses);
    setRecentClasses(dummyRecent);
  }, []);
 
  const filteredClasses = allClasses.filter((c) => {
    if (filter === "All") return true;
    return c.status === filter;
  });

  return (
    <div className="myclasses px-xxl-5 pt-2 mt-1 pb-4 px-2">
      <HeaderBar />
      <div className=" p-xxl-4 py-lg-4 pt-4 pb-2 px-3">
        <div className="classHeader">
          <h2 className="pb-3 text-center fw-bold">My Classes Details</h2>
        </div>

        <div className="all">
          <div className="allclassHeader">
            <h3 className="fw-bold pt-md-2 pt-1">
              <i className="fa-solid fa-bookmark"></i> Course Overview
            </h3>
          </div>

          <div className="input-box subject py-3">
            <div className="column">
              <div className="select-box mt-3">
                <select
                  className="clz border border py-2 rounded px-2"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Future">Future</option>
                  <option value="Past">Past</option>
                </select>
              </div>
            </div>
          </div>

          <div className="cards_wrap  d-flex flex-wrap p-xxl-3 py-lg-3 pt-3 justify-content-between">
            {filteredClasses.map((item) => (
              <div className="card_item py-3 px-xxl-4" key={item.id}>
                <div className="card_inner p-md-4 py-3 px-2">
                  <img
                    src={item.image}
                    className="mb-2 rounded-circle"
                    alt={item.name}
                  />
                  <div className="subject fw-bold text-uppercase">
                    {item.name}
                  </div>
                  <div className="date fw-semibold my-2">
                    Class held on: {item.date}
                  </div>
                  <div className="det mb-3">{item.description}</div>
                  <div className="teacher_name fw-bolder mb-2">
                    {item.teacher}
                  </div>
                </div>
              </div>
            ))}

            {filteredClasses.length === 0 && (
              <div className="w-100 text-center mt-3">
                <p>No classes available under this filter.</p>
              </div>
            )}
          </div>
        </div>
        <div className="recent">
          <div className="recentclassHeader">
            <h3 className="fw-bold pt-md-2 pt-1">
              <i className="fa-solid fa-bookmark"></i> Recently accessed courses
            </h3>
          </div>
          <div className="cards_wrap d-flex flex-wrap p-xxl-3 py-lg-3 pt-3 justify-content-xxl-center justify-content-between">
            {recentClasses.map((item) => (
              <div className="card_item py-3 px-xxl-4" key={item.id}>
                <div className="card_inner p-md-4 py-3 px-2">
                  <img
                    src={item.image}
                    className="mb-2 rounded-circle"
                    alt={item.name}
                  />
                  <div className="subject fw-bold text-uppercase">
                    {item.name}
                  </div>
                  <div className="date fw-semibold my-2">
                    Class held on: {item.date}
                  </div>
                  <div className="det mb-3">{item.description}</div>
                  <div className="teacher_name fw-bolder mb-2">
                    {item.teacher}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </div>
  );
}

export default Classes;
