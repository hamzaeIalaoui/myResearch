import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom";
import { EditAssignmentProfessor } from "../../router/routes";
import { Input, useTheme } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import { UserDetailsAvatar } from "../../utils/images";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { PdfIcon } from "../../utils/images";
import DoneIcon from "@mui/icons-material/Done";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";

export default function AssignmentDetailsComponent() {
  const { push } = useHistory();
  const { goBack } = useHistory();
  const Input = styled("input")({
    display: "none",
  });
  const theme = useTheme();

  const [manage, setManage] = React.useState(false);

  const onCreateNewClick = (state = null) => {
    push(EditAssignmentProfessor, state);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Typography
              style={theme.palette.primary.headingMain}
              variant="h6"
              component="div"
              gutterBottom
            >
              My Assignments
            </Typography>
            <Button
              size="medium"
              // color="secondary"
              variant="contained"
              style={theme.palette.primary.buttonBack}
              startIcon={<ArrowBackIcon />}
              onClick={() => goBack()}
            >
              Back
            </Button>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={5}>
            <Stack className="justify-content-end" direction="row" spacing={2}>
              {!manage && (
                <Button
                  size="large"
                  // color="secondary"
                  variant="outlined"
                  style={theme.palette.primary.customStyle}
                  startIcon={<EditOutlinedIcon />}
                  onClick={() => setManage(true)}
                >
                  Manage Assignments
                </Button>
              )}
              <Button
                size="large"
                // color="secondary"
                style={theme.palette.primary.buttonContained}
                variant="contained"
                endIcon={<AddOutlinedIcon />}
                onClick={() => onCreateNewClick()}
              >
                Create new Assignment
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ marginTop: "20px" }}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={theme.palette.primary.StudentDetailBG}
        >
          <Grid item xs={6}>
            <Stack
              className="justify-content-start"
              direction="row"
              spacing={3}
            >
              <Avatar
                alt="Remy Sharp"
                src={UserDetailsAvatar}
                sx={{ width: 135, height: 140 }}
              />
              <div>
                <Typography
                  style={theme.palette.primary.studentHeading}
                  variant="h6"
                  component="div"
                  gutterBottom
                >
                  Tom Cruise
                </Typography>
                <Stack direction="row" spacing={3}>
                  <Typography
                    style={theme.palette.primary.studentDetails}
                    variant="h6"
                    component="div"
                    gutterBottom
                  >
                    Major :
                  </Typography>
                  <Typography
                    style={theme.palette.primary.studentDetails}
                    variant="h6"
                    component="div"
                    gutterBottom
                  >
                    Computer Science
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={3}>
                  <Typography
                    style={theme.palette.primary.studentDetails}
                    variant="h6"
                    component="div"
                    gutterBottom
                  >
                    Major :
                  </Typography>
                  <Typography
                    style={theme.palette.primary.studentDetails}
                    variant="h6"
                    component="div"
                    gutterBottom
                  >
                    Business Administration
                  </Typography>
                </Stack>
              </div>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack
              className="align-items-end h-100"
              direction="row"
              spacing={2}
            >
              <Typography
                style={theme.palette.primary.studentStatus}
                variant="h6"
                component="div"
                gutterBottom
              >
                Status:
              </Typography>
              <Typography
                style={theme.palette.primary.studentStatusColor}
                variant="h6"
                component="div"
                gutterBottom
              >
                LATE
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ marginTop: "20px" }}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={theme.palette.primary.AssignmentDetails}
        >
          <Grid item xs={12}>
            <Typography
              style={theme.palette.primary.studentAssignmentTitle}
              variant="h6"
              component="div"
              gutterBottom
            >
              Assignment:
            </Typography>
            <Typography
              style={theme.palette.primary.studentAssignmentTitleDetail}
              variant="h6"
              component="div"
              gutterBottom
            >
              A PROBABILISTIC APPROACH TOWARDS HANDLING DATA QUALITY PROBLEMS
              AND IMPERFECT DATA INTEGRATION TASKS
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ marginTop: "20px" }}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={theme.palette.primary.AssignmentDetails}
        >
          <Grid item xs={12}>
            <Typography
              style={theme.palette.primary.studentAssignmentProgressTitle}
              variant="h6"
              component="div"
              gutterBottom
            >
              Assignment Progress
            </Typography>
            <Timeline
              style={theme.palette.primary.timeline}
              position="alternate"
            >
              <TimelineItem>
                <TimelineOppositeContent
                  style={theme.palette.primary.timelineContent}
                  color="text.secondary"
                >
                  09:30 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot style={theme.palette.primary.timelineIcon} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent style={theme.palette.primary.timelineContent}>
                  Eat
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  style={theme.palette.primary.timelineContent}
                  color="text.secondary"
                >
                  09:30 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot style={theme.palette.primary.timelineIcon} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent style={theme.palette.primary.timelineContent}>
                  Eat
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  style={theme.palette.primary.timelineContent}
                  color="text.secondary"
                >
                  09:30 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot style={theme.palette.primary.timelineIcon} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent style={theme.palette.primary.timelineContent}>
                  Eat
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  style={theme.palette.primary.timelineContent}
                  color="text.secondary"
                >
                  09:30 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot style={theme.palette.primary.timelineIcon} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent style={theme.palette.primary.timelineContent}>
                  Eat
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ marginTop: "20px" }}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={theme.palette.primary.AssignmentDetails}
        >
          <Grid item xs={12}>
            <Typography
              style={theme.palette.primary.AssesmentTitle}
              variant="h6"
              component="div"
              gutterBottom
            >
              Professor Assesment:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <div
              className="d-flex "
              style={theme.palette.primary.AssignmentRemarks}
            >
              <Typography
                style={theme.palette.primary.AssesmentSubTitle}
                variant="h6"
                component="div"
                gutterBottom
              >
                Milestone1:
              </Typography>
              <Avatar
                alt="Remy Sharp"
                src={PdfIcon}
                style={theme.palette.primary.PdfIcon}
              />
              <Typography
                style={theme.palette.primary.PdfFileTitle}
                variant="h6"
                component="div"
                gutterBottom
              >
                Milestone1.pdf
              </Typography>
              <div style={theme.palette.primary.PdfFileStatus}>
                <div style={theme.palette.primary.TickIcon}>
                  {" "}
                  <DoneIcon />{" "}
                </div>
                <span style={theme.palette.primary.PdfFileStatusTitle}>
                  APPROVED
                </span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div
              className="d-flex "
              style={theme.palette.primary.AssignmentRemarks2}
            >
              <Typography
                style={theme.palette.primary.AssesmentSubTitle}
                variant="h6"
                component="div"
                gutterBottom
              >
                Milestone2:
              </Typography>
              <Avatar
                alt="Remy Sharp"
                src={PdfIcon}
                style={theme.palette.primary.PdfIcon}
              />
              <Typography
                style={theme.palette.primary.PdfFileTitle}
                variant="h6"
                component="div"
                gutterBottom
              >
                Milestone2.pdf
              </Typography>
              <div style={theme.palette.primary.PdfFileStatusPending}>
                <div style={theme.palette.primary.HourGlassIcon}>
                  {" "}
                  <HourglassEmptyIcon />{" "}
                </div>
                <span style={theme.palette.primary.PdfFileStatusPendingTitle}>
                  Pending
                </span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div
              className="d-flex "
              style={theme.palette.primary.AssignmentRemarks2}
            >
              <Typography
                style={theme.palette.primary.AssesmentSubTitle}
                variant="h6"
                component="div"
                gutterBottom
              >
                Milestone2:
              </Typography>

              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                style={theme.palette.primary.UploadButton}
              >
                <label htmlFor="contained-button-file">
                  <Input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <Button
                    variant="contained"
                    component="span"
                    style={theme.palette.primary.FileUploadButton}
                  >
                    Upload
                  </Button>
                </label>
                <label htmlFor="icon-button-file">
                  <Input accept="image/*" id="icon-button-file" type="file" />
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  ></IconButton>
                </label>
              </Stack>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
