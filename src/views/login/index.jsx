import React from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const handleProfessor = () => {
    localStorage.setItem("type", "professor");
    history.push(`/home`);
  };
  const handleStudent = () => {
    localStorage.setItem("type", "student");
    history.push(`/home`);
  };

  return (
    <>
      <div className="login-view">
        <div>
          <h2>Login</h2>
          <br />
          <button className="btn btn-primary" onClick={handleProfessor}>
            Professor
          </button>
          <button className="btn btn-info" onClick={handleStudent}>
            Student
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
