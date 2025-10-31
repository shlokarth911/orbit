import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../contexts/UserContext";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("user_token");
  const navigate = useNavigate();

  const { setUser } = useContext(UserDataContext);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error in fetching user profile", err);
        navigate("/login");
      });
  }, [token, setUser, navigate, setLoading]);
  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
      </div>
    );
  } else {
    return <>{children}</>;
  }
};

export default UserProtectedWrapper;
