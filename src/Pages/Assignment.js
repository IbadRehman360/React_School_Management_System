import React from 'react';
import maths from "../Components/assets/b1.png";
import chemistry from "../Components/assets/b2.png";
import english from "../Components/assets/b3.png";
import physics from "../Components/assets/b4.png";
import HeaderBar from "../Components/HeaderBar";
import '../Components/styles/style.css';

function Assignmnet() {
  return (
      <div className="myassignment px-xxl-5 pt-2 mt-1 pb-4 px-2">
          <HeaderBar />
          <div className="assignmentdet p-xxl-4 py-lg-4 pt-4 pb-2 px-3">
              <div className="assignmentHeader">
                  <h2 className="pb-3 text-center fw-bold">My Assignments</h2>
              </div>

              <div className="cards_wrap d-flex flex-wrap p-xxl-3 py-lg-3 pt-3 justify-content-between">
                    <div className="card_item py-3 px-xxl-4">
                        <div class="card_inner p-md-4 py-3 px-2">
                            <img src={maths} className="mb-2 rounded-circle" alt="Combined Mathematics" />
                            <div className="subject fw-bold text-uppercase">Combined Maths</div>
                            <div className="Date fw-semibold my-2">2023/07/15</div>
                            <div className="noofassignmnets pb-4">
                                <a href="#" className="text-decoration-none">Number of Assignment: 02</a>
                            </div>
                            <div className="status notcomplete p-1 rounded fw-bold text-center">Not Completed</div>
                        </div>
                    </div>
                    <div className="card_item py-3 px-xxl-4">
                        <div className="card_inner p-md-4 py-3 px-2">
                            <img src={chemistry} className="mb-2 rounded-circle" alt="Chemistry" />
                            <div className="subject fw-bold text-uppercase">Chemistry</div>
                            <div className="Date fw-semibold my-2">2023/06/28</div>
                            <div className="noofassignmnets pb-4">
                                <a href="#" className="text-decoration-none">Number of Assignment: 05</a>
                            </div>
                            <div className="status complete p-1 rounded fw-bold text-center">Completed</div>
                        </div>
                    </div>
                    <div className="card_item py-3 px-xxl-4">
                        <div className="card_inner p-md-4 py-3 px-2">
                            <img src={physics} className="mb-2 rounded-circle" alt="Physics" />
                            <div className="subject fw-bold text-uppercase">Physics</div>
                            <div className="Date fw-semibold my-2">2023/07/28</div>
                            <div className="noofassignmnets pb-4">
                                <a href="#" className="text-decoration-none">Number of Assignment: 02</a>
                            </div>
                            <div className="status complete p-1 rounded fw-bold text-center">Completed</div>
                        </div>
                    </div>
                    <div className="card_item py-3 px-xxl-4">
                        <div className="card_inner p-md-4 py-3 px-2">
                            <img src={english} className="mb-2 rounded-circle" alt="English" />
                            <div className="subject fw-bold text-uppercase">English</div>
                            <div className="Date fw-semibold my-2">2023/06/28</div>
                            <div className="noofassignmnets pb-4">
                                <a href="#" className="text-decoration-none">Number of Assignment: 01</a>
                            </div>
                            <div className="status notcomplete p-1 rounded fw-bold text-center">Not Completed</div>
                        </div>
                    </div>
                </div>              
          </div>
      </div>
  );
}

export default Assignmnet;