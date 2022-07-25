import React, { useState,useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ArchiveIcon from "@mui/icons-material/Archive";
import Stack from "@mui/material/Stack";
import { useTheme } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {
  EditAssignmentProfessor,
  AssignmentDetails,
  AllAssignmentsDetails,
} from "../../router/routes";
import { MaleAvatar } from "../../utils/images";
import { FemaleAvatar } from "../../utils/images";
import { Avatar } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AllStudentAssignments from "./allStudentAssignments";
import axios from "axios";
import { useCookies } from 'react-cookie';


const StudentDashboard = () => {
  const [archive, setArchive] = useState(false);
  const [addClick, setAddClick] = useState(false);
  const [assignmentData, setAssignmentData] = useState([]);
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    const token=cookies.accessToken;
    const id=JSON.parse(atob(token.split(".")[1])).id;


     axios.post("http://localhost:4000/login", {
        email: process.env.REACT_APP_EMAIL,
        password: process.env.REACT_APP_PASSWORD,
      }).then((res) => {

        axios.post("http://localhost:3001/api/students/get-assignments", {
          id: id

        },
          {
            headers: {
              'Authorization': "Bearer " + res.data.accessToken,
              'Content-Type': 'application/json'


            }
          }

        ).then((res) => {
          setAssignmentData(res.data);


        }
        ).catch((err) => {
          console.log(err);
        }
        )



      }
      ).catch((err) => {
        console.log(err);
      }
      )


  }, []);

  const { push } = useHistory();
  const theme = useTheme();
  const [manage, setManage] = React.useState(false);
  const onCreateNewClick = (state = null) => {
    push(EditAssignmentProfessor, state);
  };
  const onAddClick = (state = "student") => {
    setAddClick(true);
  };
  const onDetailClick = (e, state) => {
    e.stopPropagation();
    push(AllAssignmentsDetails, state);
  };
  const onCardClick = (e, state) => {
    e.stopPropagation();
    push(AssignmentDetails, state);
  };

  
  const pendingAssignment = assignmentData?.filter(
    (item) => item.status != "FINISHED"
  );
  const finishedAssignment = assignmentData?.filter(
    (item) => item.status === "FINISHED"
  );
  return (
    <>
      {addClick ? (
        <AllStudentAssignments />
      ) : (
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Typography
                style={theme.palette.primary.headingMain}
                variant="h6"
                component="div"
                gutterBottom
              >
                My Assignments
              </Typography>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
              <Stack
                className="justify-content-end"
                direction="row"
                spacing={2}
              >
                {!manage && (
                  <Button
                    size="large"
                    // color="secondary"
                    variant="outlined"
                    style={theme.palette.primary.customStyle}
                    startIcon={<ArchiveIcon />}
                    onClick={() => {
                      // setManage(true);
                      setArchive(true);
                    }}
                  >
                    Archive
                  </Button>
                )}
                <Button
                  size="large"
                  // color="secondary"
                  style={theme.palette.primary.buttonContained}
                  variant="contained"
                  startIcon={<AddOutlinedIcon />}
                  onClick={() => onCreateNewClick()}
                >
                  New Assignment
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {archive
              ? finishedAssignment?.map((item, index) => (
                  <Grid
                    item
                    xs={12}
                    key={index}
                    onClick={(e) => onCardClick(e, item)}
                  >
                    <div style={theme.palette.primary.studentCard}>
                      <div className="d-flex justify-content-between">
                        <div>
                          <Stack direction="row" spacing={2}>
                            <Avatar
                              alt="Remy Sharp"
                              src={item?.avatar==="MaleAvatar"?MaleAvatar:FemaleAvatar} 
                              style={theme.palette.primary.studentCardAvatar}
                            />

                            <div>
                              <Typography
                                style={theme.palette.primary.studentCardHeading}
                                variant="p"
                                component="div"
                              >
                                {item?.title}
                              </Typography>
                              <Typography
                                variant="p"
                                component="div"
                                style={
                                  theme.palette.primary.studentCardSubHeading
                                }
                              >
                                {item?.designation}
                              </Typography>
                              <Typography
                                variant="p"
                                component="div"
                                style={
                                  theme.palette.primary.studentCardSubHeading
                                }
                              >
                                {item?.department}
                              </Typography>
                            </div>
                          </Stack>
                          <Typography
                            variant="p"
                            style={theme.palette.primary.CardAssignmentTitle}
                            component="div"
                          >
                            {item?.assignmentTitle}
                          </Typography>
                          <Typography
                            variant="p"
                            component="div"
                            style={theme.palette.primary.studentCardDescription}
                          >
                            {item?.assignmentDetail}
                          </Typography>

                          <Button
                            // className="btn btn-light "
                            size="small"
                            // color="secondary"
                            style={theme.palette.primary.CardButton}
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            onClick={(e) => onDetailClick(e, null)}
                          >
                            Details
                          </Button>
                        </div>
                        <div>
                          <h2 style={theme.palette.primary.StatusTitle}>
                            Status:{" "}
                            <span
                              style={
                                item?.status === "LATE"
                                  ? theme.palette.primary.StatusDescriptionLate
                                  : item?.status === "PENDING"
                                  ? theme.palette.primary
                                      .StatusDescriptionPending
                                  : theme.palette.primary
                                      .StatusDescriptionFinished
                              }
                            >
                              {item?.status}
                            </span>
                          </h2>
                          <p style={theme.palette.primary.CardDate}>
                            Due: Aug 2, 2019
                          </p>
                        </div>
                      </div>
                    </div>
                  </Grid>
                ))
              : pendingAssignment?.map((item, index) => (
                  <Grid
                    item
                    xs={12}
                    key={index}
                    onClick={(e) => onCardClick(e, item)}
                  >
                    <div style={theme.palette.primary.studentCard}>
                      <div className="d-flex justify-content-between">
                        <div>
                          <Stack direction="row" spacing={2}>
                            <Avatar
                              alt="Remy Sharp"
                              src={item?.avatar==="MaleAvatar"?MaleAvatar:FemaleAvatar}
                  
                              style={theme.palette.primary.studentCardAvatar}
                            />

                            <div>
                              <Typography
                                style={theme.palette.primary.studentCardHeading}
                                variant="p"
                                component="div"
                              >
                                {item?.title}
                              </Typography>
                              <Typography
                                variant="p"
                                component="div"
                                style={
                                  theme.palette.primary.studentCardSubHeading
                                }
                              >
                                {item?.designation}
                              </Typography>
                              <Typography
                                variant="p"
                                component="div"
                                style={
                                  theme.palette.primary.studentCardSubHeading
                                }
                              >
                                {item?.department}
                              </Typography>
                            </div>
                          </Stack>
                          <Typography
                            variant="p"
                            style={theme.palette.primary.CardAssignmentTitle}
                            component="div"
                          >
                            {item?.assignmentTitle}
                          </Typography>
                          <Typography
                            variant="p"
                            component="div"
                            style={theme.palette.primary.studentCardDescription}
                          >
                            {item?.assignmentDetail}
                          </Typography>

                          <Button
                            // className="btn btn-light "
                            size="small"
                            onClick={(e) => onDetailClick(e, null)}
                            style={theme.palette.primary.CardButton}
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                          >
                            Details
                          </Button>
                        </div>
                        <div>
                          <h2 style={theme.palette.primary.StatusTitle}>
                            Status:{" "}
                            <span
                              style={
                                item?.status === "LATE"
                                  ? theme.palette.primary.StatusDescriptionLate
                                  : item?.status === "PENDING"
                                  ? theme.palette.primary
                                      .StatusDescriptionPending
                                  : theme.palette.primary
                                      .StatusDescriptionFinished
                              }
                            >
                              {item?.status}
                            </span>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </Grid>
                ))}
            {!archive ? (
              <Grid item xs={12}>
                <div className="d-flex justify-content-center">
                  <AddCircleOutlineIcon
                    style={theme.palette.primary.AddIcon}
                    onClick={() => onAddClick()}
                  />
                </div>
              </Grid>
            ) : (
              <></>
            )}
          </Grid>
        </Box>
      )}
    </>
  );
};

export default StudentDashboard;
