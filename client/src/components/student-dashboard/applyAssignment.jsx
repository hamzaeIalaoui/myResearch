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
import {
  EditAssignmentProfessor,
  AllStudentAssignment,
} from "../../router/routes";
import { Input, useTheme } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import { useLocation } from "react-router-dom";
import { UserDetailsAvatar, userIcon } from "../../utils/images";
import { useEffect } from "react";
import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function ApplyAssignmentPage() {
  const { push } = useHistory();
  const { goBack } = useHistory();
  const location = useLocation();
  const theme = useTheme();
  const Input = styled("input")({
    display: "none",
  });
  const [manage, setManage] = React.useState(false);

  const onDiscardClick = (state = null) => {
    push(AllStudentAssignment, state);
  };
  const onSendClick = (state = null) => {
    push(AllStudentAssignment, state);
  };

  // useEffect(() => {
  //   console.log(location.pathname);
  //   console.log(location.type);
  // }, [location]);
  const onApplyClick = () => {
    push(EditAssignmentProfessor);
  };

  return (
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
            onClick={() => onDiscardClick()}
          >
            Discard
          </Button>
        </Grid>
        <Grid item xs={1}></Grid>
        {/* {location?.type != "student" ? (
          <Grid item xs={5}>
            <Stack className="justify-content-end" direction="row" spacing={2}>
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
        ) : (
          <Grid item xs={5}>
            <Stack className="justify-content-end" direction="row" spacing={2}>
              <Button
                size="large"
                // color="secondary"
                style={theme.palette.primary.buttonContained}
                variant="contained"
                startIcon={<AddOutlinedIcon />}
                onClick={() => onApplyClick()}
              >
                Apply
              </Button>
            </Stack>
          </Grid>
        )} */}
      </Grid>
      <Grid
        container
        sx={{ marginTop: "20px" }}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12}>
          <Typography
            style={theme.palette.primary.allAssignmentDetailTagLine}
            variant="h6"
            component="div"
            gutterBottom
          >
            A PROBABILISTIC APPROACH TOWARDS HANDLING DATA QUALITY PROBLEMS AND
            IMPERFECT DATA INTEGRATION TASKS
          </Typography>
        </Grid>
      </Grid>
      <Stack
        style={theme.palette.primary.allAssignmentStudentDetails}
        direction="row"
        className="align-items-center"
        spacing={4}
      >
        <Typography
          style={theme.palette.primary.allAssignmentDetailInfo}
          variant="p"
          component="div"
          gutterBottom
        >
          Supervisor:
        </Typography>
        <Stack className="align-items-center" direction="row" spacing={2}>
          <Avatar
            alt="Remy Sharp"
            src={userIcon}
            sx={{ width: 40, height: 40 }}
          />
          <Typography
            style={theme.palette.primary.allAssignmentDetailInfoContent}
            variant="p"
            component="div"
            gutterBottom
          >
            Annette Watson
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        spacing={8}
        style={theme.palette.primary.allAssignmentStudentDetails}
      >
        <Typography
          style={theme.palette.primary.allAssignmentDetailInfo}
          variant="p"
          component="div"
          gutterBottom
        >
          Period:
        </Typography>
        <Stack direction="row" className="ml-2" spacing={2}>
          <Typography
            style={theme.palette.primary.allAssignmentDetailInfo}
            variant="p"
            component="div"
            gutterBottom
          >
            3 month
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        spacing={9}
        style={theme.palette.primary.allAssignmentStudentDetails}
      >
        <Typography
          style={theme.palette.primary.allAssignmentDetailInfo}
          variant="p"
          component="div"
          gutterBottom
        >
          Type:
        </Typography>
        <Stack direction="row" className="ml-2" spacing={2}>
          <Typography
            style={theme.palette.primary.allAssignmentDetailInfo}
            variant="p"
            component="div"
            gutterBottom
          >
            Bachelor CS
          </Typography>
        </Stack>
      </Stack>
      <Stack
        style={theme.palette.primary.allAssignmentStudentDetails}
        direction="row"
        className="align-items-center"
        spacing={4}
      >
        <Typography
          style={theme.palette.primary.allAssignmentDetailInfo}
          variant="p"
          component="div"
          gutterBottom
        >
          Student:
        </Typography>
        <Stack className="align-items-center" direction="row" spacing={2}>
          <Avatar
            alt="Remy Sharp"
            src={userIcon}
            sx={{ width: 40, height: 40 }}
          />
          <Typography
            style={theme.palette.primary.allAssignmentDetailInfoContent}
            variant="p"
            component="div"
            gutterBottom
          >
            Pat Mckinney
          </Typography>
        </Stack>
      </Stack>
      <Grid className="pt-3 border-top mt-3" item sx={12}>
        <div style={theme.palette.primary.BorderLine}></div>
        <Typography
          style={theme.palette.primary.ApplyAssignmentText}
          variant="p"
          component="div"
          gutterBottom
        >
          TO APPLY TO THIS ASSIGNMENT YOU MUST PROVIDE THIS DOCUMENTS:
        </Typography>
      </Grid>
      <Grid item xs={12} style={theme.palette.primary.ResumeSection}>
        <div className="d-flex " style={theme.palette.primary.Resume}>
          <Typography
            style={theme.palette.primary.ResumeTitle}
            variant="h6"
            component="div"
            gutterBottom
          >
            Resume:
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            style={theme.palette.primary.ResumeUploadButton}
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
      <Grid item xs={12} style={theme.palette.primary.ResumeSection}>
        <div className="d-flex " style={theme.palette.primary.Resume}>
          <Typography
            style={theme.palette.primary.ResumeTitle}
            variant="h6"
            component="div"
            gutterBottom
          >
            Project Proposal:
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            style={theme.palette.primary.ResumeUploadButton}
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
                style={theme.palette.primary.ProposalUploadButton}
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
      <Grid item sx={12}>
        <Typography
          style={theme.palette.primary.ApplyAssignmentText}
          variant="p"
          component="div"
          gutterBottom
        >
          (PS: To enhance your chances to be approved in this assignment make
          sure that your skills are muching the requirement stated in the
          description, to do so, include all arguments in the Project Proposal
          and Resume).
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Stack
          className="d-flex justify-content-end"
          direction="row"
          spacing={2}
        >
          <Button
            size="large"
            // color="secondary"
            style={theme.palette.primary.buttonContained}
            variant="contained"
            onClick={() => onSendClick()}
          >
            Send Application
          </Button>
        </Stack>
      </Grid>
    </Box>
  );
}
