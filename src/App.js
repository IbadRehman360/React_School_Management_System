import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Enrollment from "./Pages/Enrollment";
import Classes from "./Pages/Classes";
import Attendence from "./Pages/Attendence";
import Assignment from "./Pages/Assignment";
import Results from "./Pages/Results";
import Fee from "./Pages/Fee";
import Logout from "./Pages/Logout";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/Dashboard' element={<Dashboard/>}></Route>
          <Route path='/Enrollment' element={<Enrollment/>}></Route>
          <Route path='/Classes' element={<Classes/>}></Route>
          <Route path='/Attendence' element={<Attendence/>}></Route>
          <Route path='/Assignment' element={<Assignment/>}></Route>
          <Route path='/Results' element={<Results/>}></Route>
          <Route path='/Fee' element={<Fee/>}></Route>
          <Route path='/Logout' element={<Logout/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
