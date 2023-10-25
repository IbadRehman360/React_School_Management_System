import React from 'react';
import HeaderBar from "../Components/HeaderBar";
import '../Components/styles/style.css';

function Fee() {
  return (
    <div className="myfee px-xxl-5 pt-2 mt-1 pb-4 px-2">
         <HeaderBar />
        <div className="feedet p-xxl-4 py-lg-4 pt-4 pb-2 px-3">
            <div className="coursefee p-4">
                <div className="cardHeader">
                    <h2 className="pb-3 text-center fw-bold">Class Payment Details</h2>
                </div>

                <table className="mt-3">
                    <thead>
                        <tr>
                            <th className="text-center">Subject</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Payment Date</th>
                            <th className="text-center">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="text-center p-2">Combined Maths</td>
                            <td className="text-center p-2">Rs. 500.00</td>
                            <td className="text-center p-2">2023/02/26</td>
                            <td className="text-center p-2"><span className="status fully fw-bold"> Fully Paid</span></td>
                        </tr>

                        <tr>
                            <td className="text-center p-2">Physics</td>
                            <td className="text-center p-2">Rs.500.00</td>
                            <td className="text-center p-2">2023/02/24</td>
                            <td className="text-center p-2"><span className="status partially fw-bold"> Partially Paid</span></td>
                        </tr>

                        <tr>
                            <td className="text-center p-2">Chemistry</td>
                            <td className="text-center p-2">Rs.500.00</td>
                            <td className="text-center p-2">2023/01/29</td>
                            <td className="text-center p-2"><span className="status partially fw-bold"> Partially Paid</span></td>
                        </tr>

                        <tr className="border-bottom-0">
                            <td className="text-center p-2">English</td>
                            <td className="text-center p-2">Rs.400.00</td>
                            <td className="text-center p-2">2023/02/24</td>
                            <td className="text-center p-2"><span className="status not fw-bold"> Not Paid</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}

export default Fee;