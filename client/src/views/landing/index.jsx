import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/landing/header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HeroBanner from "../../components/landing/heroBanner";
import FeatureSection from "../../components/landing/featureSection";
import AdditionalInfo from "../../components/landing/additionalInfoSection";
const Landing = () => {
  const history = useHistory();

  // const handleProfessor = () => {
  //   localStorage.setItem("type", "professor");
  //   history.push(`/home`);
  // };
  // const handleStudent = () => {
  //   localStorage.setItem("type", "student");
  //   history.push(`/home`);
  // };

  return (
    <>
      {/* <div className="login-view">
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
      </div> */}
      <Box sx={{ display: "flex" }}>
        <Header />
        <Box component="main" className="w-100">
          <HeroBanner />
          <FeatureSection />
          <AdditionalInfo />
        </Box>
      </Box>
    </>
  );
};

export default Landing;
