import * as React from "react";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
// import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
// import Stack from "@mui/material/Stack";
// import Card from "@mui/material/Card";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import CardContent from "@mui/material/CardContent";
// import Avatar from "@mui/material/Avatar";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import TablePagination from "@mui/material/TablePagination";
// import EditIcon from "@mui/icons-material/Edit";
// import CloseIcon from "@mui/icons-material/Close";
// import EditModal from "../../shared/editModal";
// import { Link } from "@mui/material";
// import { useHistory } from "react-router-dom";
// import {
//   AssignmentDetails,
//   EditAssignmentProfessor,
// } from "../../router/routes";
// import { useStyles } from "../../shared/theme";
// import { useTheme } from "@material-ui/core";
import ProfessorDashBoardHome from "./professorDashboard";
import StudentDashboard from "../student-dashboard/studentDashboard";
export default function DashBoard(props) {
  const type = localStorage.getItem("type");

  return (
    <>
      {type == "professor" ? <ProfessorDashBoardHome /> : <StudentDashboard />}
    </>
  );
}
