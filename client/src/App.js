import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Teacher
import TeacherLayout from "./layouts/TeacherLayout";
import Courses from "./pages/teacher/Courses";
import TeachingSchedule from "./pages/teacher/TeachingSchedule";
import TeachingClass from "./pages/teacher/TeachingClass";
import TeachingClassDetails from "./pages/teacher/TeachingClassDetails";
import TeachingGradeDetails from "./pages/teacher/TeachingGradeDetails";
import Attendance from "./pages/teacher/Attendance";

// Student
import StudentLayout from "./layouts/StudentLayout";
import StudentSchedule from "./pages/student/StudentSchedule";

import RegisterClass from "./pages/student/RegisterClass";
import MyClasses from "./pages/student/MyClasses";
import ClassDetails from "./pages/student/ClassDetails";
import ExamSchedule from "./pages/student/ExamSchedule";
import StudentGrades from "./pages/student/Grades";
import GradeDetails from "./pages/student/GradeDetails";
import AttendanceList from "./pages/student/AttendanceList";
import AttendanceDetail from "./pages/student/AttendanceDetail";
import StudentDashboard from "./pages/student/StudentDashboard";

// Admin
import Dashboard from "./pages/admin/DashBoard";
import CourseManagement from "./pages/admin/CourseManagement";
import ClassesManagement from "./pages/admin/ClassesManagement";
import UserManagement from "./pages/admin/UserManagement";

// Common

function App() {
  return (
    <Router>
      <Routes>
        {/* Teacher Layout */}
        <Route path="/teacher" element={<TeacherLayout />}>
          <Route path="courses" element={<Courses />} />
          <Route path="schedule" element={<TeachingSchedule />} />
          <Route path="classes" element={<TeachingClass />} />
          <Route path=":teacherId/classes/:classId" element={<TeachingClassDetails />} />
          <Route path="attendance/:scheduleId" element={<Attendance />} />
          <Route path="grades/class/:classId/student/:studentId" element={<TeachingGradeDetails />} />
        </Route>

        {/* Admin */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/courses" element={<CourseManagement />} />
        <Route path="/admin/classes" element={<ClassesManagement />} />
        <Route path="/admin/users" element={<UserManagement />} />

        {/* Student Layout */}
        <Route path="/student" element={<StudentLayout />}>
          <Route path="schedule" element={<StudentSchedule />} />
          <Route path="my-classes" element={<MyClasses />} />
          <Route path="register-class" element={<RegisterClass />} />
          <Route path="my-classes/:classId" element={<ClassDetails />} />
          <Route path="exam-schedule" element={<ExamSchedule />} />
          <Route path="grade" element={<StudentGrades />} />
          <Route path="grade/:classId" element={<GradeDetails />} />
          <Route path="attendance" element={<AttendanceList />} />
          <Route path="attendance/:classId" element={<AttendanceDetail />} />
          <Route path="dashboard" element={<StudentDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
