import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeachingSchedule from "./pages/TeachingSchedule";
import Feedback from "./pages/Feedback";
import Notifications from "./pages/Notifications";
import Courses from "./pages/Courses";
import StudentAttendanceList from "./pages/StudentAttendanceList";
import StudentList from "./pages/StudentList";

// Student pages
import AcademicResults from "./pages/AcademicResults";
import StudentLayout from "./layouts/StudentLayout";
import StudentSchedule from "./pages/StudentSchedule";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TeachingSchedule />} />
        <Route path="/teaching-schedule" element={<TeachingSchedule />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/courses" element={<Courses />} />
        <Route
          path="/student-attendance-list"
          element={<StudentAttendanceList />}
        />
        <Route path="/student-list" element={<StudentList />} />

        {/* Các route dùng chung layout Student */}
        <Route path="/student" element={<StudentLayout />}>
          <Route path="schedule" element={<StudentSchedule />} />
          <Route path="results" element={<AcademicResults />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
