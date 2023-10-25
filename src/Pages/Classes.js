import React from 'react';
import maths from "../Components/assets/b1.png";
import chemistry from "../Components/assets/b2.png";
import english from "../Components/assets/b7.png";
import physics from "../Components/assets/b5.png";
import HeaderBar from "../Components/HeaderBar";
import '../Components/styles/style.css';

function Classes() {
  return (
      <div className="myclasses px-xxl-5 pt-2 mt-1 pb-4 px-2">
          <HeaderBar />
          <div className="clessesdet p-xxl-4 py-lg-4 pt-4 pb-2 px-3">
              <div className="classHeader">
                  <h2 className="pb-3 text-center fw-bold">My Classes Details</h2>
              </div>

              <div className="recent">
                  <div className="recentclassHeader">
                      <h3 className="fw-bold pt-md-2 pt-1"><i className="fa-solid fa-bookmark"></i> Recently accessed courses</h3>
                  </div>
                  <div className="cards_wrap d-flex flex-wrap p-xxl-3 py-lg-3 pt-3 justify-content-xxl-center justify-content-between">
                      <div className="card_item py-3 px-xxl-4">
                          <div className="card_inner p-md-4 py-3 px-2">
                              <img src={maths} className="mb-2 rounded-circle" alt="Combined Mathematics" />
                              <div className="subject fw-bold text-uppercase">Combined Maths</div>
                              <div className="date fw-semibold my-2">Class held on: 2023/07/02</div>
                              <div className="det mb-3">Lorem sit amet, consectetur adipisicing elit, sed do magna aliqua.</div>
                              <div className="teacher_name fw-bolder mb-2">Mr. J.K. Bandara</div>
                          </div>
                      </div>
                      <div className="card_item py-3 px-xxl-4">
                          <div className="card_inner p-md-4 py-3 px-2">
                              <img src={english} className="mb-2 rounded-circle" alt="English" />
                              <div className="subject fw-bold text-uppercase">English</div>
                              <div className="date fw-semibold my-2">Class held on: 2023/07/15</div>
                              <div className="det mb-3">Lorem sit amet, consectetur adipisicing elit, sed do magna aliqua.</div>
                              <div className="teacher_name fw-bolder mb-2">Mrs. K.I. Lohara</div>
                          </div>
                      </div>
                      <div className="card_item py-3 px-xxl-4">
                          <div className="card_inner p-md-4 py-3 px-2">
                              <img src={chemistry} className="mb-2 rounded-circle" alt="Chemistry" />
                              <div className="subject fw-bold text-uppercase">Chemistry</div>
                              <div className="date fw-semibold my-2">Class held on: 2023/06/28</div>
                              <div className="det mb-3">Lorem sit amet, consectetur adipisicing elit, sed do magna aliqua.</div>
                              <div className="teacher_name fw-bolder mb-2">Ms. S.K.D. Rupasinghe</div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="all">
                  <div className="allclassHeader">
                      <h3 className="fw-bold pt-md-2 pt-1"><i className="fa-solid fa-bookmark"></i> Course Overview</h3>
                  </div>
                  <div className="input-box subject py-3">
                      <div className="column">
                          <div className="select-box mt-3">
                              <select className="clz border border-0">
                                  <option>All</option>
                                  <option>In Progress</option>
                                  <option>Future</option>
                                  <option>Past</option>
                              </select>
                          </div>
                      </div>
                  </div>
                  <div className="cards_wrap d-flex flex-wrap p-xxl-3 py-lg-3 pt-3 justify-content-between">
                      <div className="card_item py-3 px-xxl-4">
                          <div className="card_inner p-md-4 py-3 px-2">
                              <img src={maths} className="mb-2 rounded-circle" alt="Combined Mathematics" />
                              <div className="subject fw-bold text-uppercase">Combined Maths</div>
                              <div className="date fw-semibold my-2">Class held on: 2023/07/02</div>
                              <div className="det mb-3">Lorem sit amet, consectetur adipisicing elit, sed do magna aliqua.</div>
                              <div className="teacher_name fw-bolder mb-2">Mr. J.K. Bandara</div>
                          </div>
                      </div>
                      <div className="card_item py-3 px-xxl-4">
                          <div className="card_inner p-md-4 py-3 px-2">
                              <img src={chemistry} className="mb-2 rounded-circle" alt="Chemistry" />
                              <div className="subject fw-bold text-uppercase">Chemistry</div>
                              <div className="date fw-semibold my-2">Class held on: 2023/06/28</div>
                              <div className="det mb-3">Lorem sit amet, consectetur adipisicing elit, sed do magna aliqua.</div>
                              <div className="teacher_name fw-bolder mb-2">Ms. S.K.D. Rupasinghe</div>
                          </div>
                      </div>
                      <div className="card_item py-3 px-xxl-4">
                          <div className="card_inner p-md-4 py-3 px-2">
                              <img src={physics} className="mb-2 rounded-circle" alt="Physics" />
                              <div className="subject fw-bold text-uppercase">Physics</div>
                              <div className="date fw-semibold my-2">Class held on: 2023/07/15</div>
                              <div className="det mb-3">Lorem sit amet, consectetur adipisicing elit, sed do magna aliqua.</div>
                              <div className="teacher_name fw-bolder mb-2">Mrs. K.I. Lohara</div>
                          </div>
                      </div>
                      <div className="card_item py-3 px-xxl-4">
                          <div className="card_inner p-md-4 py-3 px-2">
                              <img src={english} className="mb-2 rounded-circle" alt="English" />
                              <div className="subject fw-bold text-uppercase">English</div>
                              <div className="date fw-semibold my-2">Class held on: 2023/07/10</div>
                              <div className="det mb-3">Lorem sit amet, consectetur adipisicing elit, sed do magna aliqua.</div>
                              <div className="teacher_name fw-bolder mb-2">Mr. D.R. Prageeth</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Classes;