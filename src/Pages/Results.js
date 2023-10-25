import React from 'react';
import HeaderBar from "../Components/HeaderBar";
import '../Components/styles/style.css';

function Results() {
  return (
      <div className="myresults px-xxl-5 pt-2 mt-1 pb-4 px-2">
          <HeaderBar />
          <div className="resultsdet p-xxl-4 py-lg-4 pt-4 pb-2 px-3">
            <div className="courseresults p-4">
                <div className="resultsHeader">
                    <h2 className="pb-3 text-center fw-bold">2023 - First Term Test Results</h2>
                </div>

                <table className="mt-3">
                    <thead>
                        <tr>
                            <th className="text-center">Id</th>
                            <th className="text-center">Subject</th>
                            <th className="text-center">Issued Date</th>
                            <th className="text-center">Marks</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="text-center p-2">1</td>
                            <td className="text-center p-2">Combined Maths</td>
                            <td className="text-center p-2">2023/02/26</td>
                            <td className="text-center p-2">75%</td>
                        </tr>

                        <tr>
                            <td className="text-center p-2">2</td>
                            <td className="text-center p-2">Physics</td>
                            <td className="text-center p-2">2023/02/29</td>
                            <td className="text-center p-2">67%</td>
                        </tr>

                        <tr>
                            <td className="text-center p-2">3</td>
                            <td className="text-center p-2">Chemistry</td>
                            <td className="text-center p-2">2023/03/05</td>
                            <td className="text-center p-2">82%</td>
                        </tr>

                        <tr className="border-bottom-0">
                            <td className="text-center p-2">4</td>
                            <td className="text-center p-2">English</td>
                            <td className="text-center p-2">2023/03/08</td>
                            <td className="text-center p-2">78%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="courseresults p-4 mt-4">
                <div className="resultsHeader">
                    <h2 className="pb-3 text-center fw-bold">2023 - Second Term Test Results</h2>
                </div>

                <table className="mt-3">
                    <thead>
                        <tr>
                            <th className="text-center">Id</th>
                            <th className="text-center">Subject</th>
                            <th className="text-center">Issued Date</th>
                            <th className="text-center">Marks</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="text-center p-2">1</td>
                            <td className="text-center p-2">Combined Maths</td>
                            <td className="text-center p-2">2023/08/01</td>
                            <td className="text-center p-2">75%</td>
                        </tr>

                        <tr>
                            <td className="text-center p-2">2</td>
                            <td className="text-center p-2">Physics</td>
                            <td className="text-center p-2">2023/08/08</td>
                            <td className="text-center p-2">67%</td>
                        </tr>

                        <tr>
                            <td className="text-center p-2">3</td>
                            <td className="text-center p-2">Chemistry</td>
                            <td className="text-center p-2">2023/08/15</td>
                            <td className="text-center p-2">82%</td>
                        </tr>

                        <tr className="border-bottom-0">
                            <td className="text-center p-2">4</td>
                            <td className="text-center p-2">English</td>
                            <td className="text-center p-2">2023/08/15</td>
                            <td className="text-center p-2">78%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
      </div>
  );
}

export default Results;