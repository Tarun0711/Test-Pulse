import { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
// import Home from "./Pages/Home";

import HomeComponent from "./Components/Core/Home/HomeComponent";
import Login from "./Components/Core/Auth/Login";
import Signup from "./Components/Core/Auth/Signup";
import Dashboard from "./Pages/Dashboard";
import DashboardHome from "./Components/Core/Dashboard/DashboardHome";
import Testseries from "./Components/Core/Dashboard/Testseries";
import Analytics from "./Components/Core/Dashboard/Analytics";
import Inbox from "./Components/Core/Dashboard/Inbox";
import QuestionBank from "./Components/Core/Dashboard/QuestionBank/QuestionBank";
import AuthTemplate from "./Pages/AuthTemplate";
import VerifyEmail from "./Components/Core/Auth/Otp";
import ForgotPassword from "./Components/Core/Auth/Forgotpassward";
import PrivateRoute from "./Components/Core/Auth/PrivateRoute";
import OpenRoute from "./Components/Core/Auth/OpenRoute";
import DownloadQbank from "./Components/Core/Dashboard/QuestionBank/DownloadQbank";
import DashBoardsHome from "./Pages/DashBoardsHome";
// import Home from "./Testing/Home";
import Quiz from "./ConductQuiz";
import Footer from "./Testing/TestingPhaseComponents/Footer";
import Quizzes from "./Pages/Quizzes";
import Setting from "./Pages/Setting";
import MockHome from "./Testing/Home";
import Home from "./Pages/Home/Home";
import HomeOutlet from "./Pages/Home/HomeOutlet";
import Problem from "./Components2/Problems/Problem";
import Contests from "./Components2/Contests/Contests";
import MockTest from "./Components2/MockTest/MockTest";
import Redeem from "./Components2/Store/Redeem";
import TestSeries from "./Pages2/TestSeries";
import Premium from "./Pages2/Premium";
import CategoryDetails from "./Pages2/CategoryDetails";
import TestSeriesDatailsPage from "./Pages2/TestSeriesDatailsPage";
import Studyplan from "./Components2/StudyPlans/Studyplan";
import StydyPlanDetails from "./Components2/StudyPlans/StydyPlanDetails";

const routeConfig = [
  { path: "/", element: <Home />, index: true },
  { path: "problems", element: <Problem /> },
  { path: "contests", element: <Contests /> },
  { path: "mock-test", element: <MockTest /> },
  { path: "store/redeem", element: <Redeem /> },
  { path: "test-series", element: <TestSeries /> },
  { path: "test-series-details/:category-name", element: <CategoryDetails /> },
  {
    path: "test-series-details/:category-name/:test-series-name",
    element: <TestSeriesDatailsPage />,
  },
  { path: "plans", element: <Premium /> },
  { path: "study-plan", element: <Studyplan /> },
  {path:'study-plans/:name', element: <StydyPlanDetails/> },
];

function App() {
  return (
    <div className="w-full h-screen flex flex-col font-inter">
      <Routes>
        <Route
          path="/"
          element={
            <OpenRoute>
              <HomeOutlet />
            </OpenRoute>
          }
        >
          {routeConfig.map(({ path, element, index }) => (
            <Route key={path} path={path} element={element} index={index} />
          ))}
          {/* <Route index element={<HomeComponent />} /> */}
        </Route>

        {/* <Route path="/mock-test" element={<MockHome/>}/>
        <Route path="/quiz/:examSelected/:quizSelected" element={<Quiz />}>
          <Route index element={<HomeComponent />} />
        </Route>
        <Route path="/auth" element={<AuthTemplate />}>
          <Route index element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="otp-verification" element={<VerifyEmail />} />
          <Route path="forgot-password" element={<ForgotPassword />} />{" "}
        </Route>
        <Route path="/dashboardHome" element={<DashBoardsHome />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="test-series">
            <Route index element={<Testseries />} />
            <Route path="details" element={<TestSeriesDetails />} />
          </Route>
          <Route path="analytics" element={<Analytics />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="quizzes" element={<Quizzes />} />
          <Route path="settings" element={<Setting />} />
          <Route path="test-series/questionBank" element={<QuestionBank />} />
          <Route
            path="test-series/questionBank/downloadQbank"
            element={<DownloadQbank />} // Fixed the route
          />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
