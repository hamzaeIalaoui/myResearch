import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Stack from "@mui/material/Stack";
import { useHistory } from "react-router-dom";
import { EditAssignmentProfessor } from "../../router/routes";
import { useTheme } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import { UserDetailsAvatar } from "../../utils/images";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
export default function AssignmentDetailsComponent() {
  const { push } = useHistory();
  const { goBack } = useHistory();

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
          style={theme.palette.primary.StudentDetailBG}
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
          style={theme.palette.primary.StudentDetailBG}
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
      </Box>
    </>
  );
}
