import React from "react";
import { Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import UserProtectedWrapper from "./components/UserProtectedWrapper";
import UserLayout from "./components/UserLayout";

const App = () => {
  return (
    <Routes>
      {/* Define your routes here */}

      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/user"
        element={
          <UserProtectedWrapper>
            <UserLayout />
          </UserProtectedWrapper>
        }
      >
        <Route path="home" element={<div>Home</div>} />
      </Route>
    </Routes>
  );
};

export default App;
