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
import DenyModal from "../../shared/denyModal";
import ApproveModal from "../../shared/approveModal";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  CandidateAvatar,
  UserDetailsAvatar,
  userIcon,
} from "../../utils/images";
export default function AllCandidatesDetail() {
  const [open, setOpen] = React.useState(false);
  const [openApprove, setOpenApprove] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleOpenApprove = () => setOpenApprove(true);

  const handleClose = () => setOpen(false);
  const handleCloseApprove = () => setOpenApprove(false);
  const { push } = useHistory();
  const { goBack } = useHistory();

  const theme = useTheme();
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
            <Stack
              className="justify-content-end mt-2"
              direction="row"
              spacing={2}
            >
              <Button
                size="large"
                style={theme.palette.primary.CandidateDetailDenyBtn}
                variant="contained"
                onClick={handleOpen}
              >
                DENIED
              </Button>
              <Button
                size="large"
                style={theme.palette.primary.CandidateDetailApproveBtn}
                variant="contained"
                onClick={handleOpenApprove}
              >
                APPROVEd
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ marginTop: "20px" }}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={4}>
            <Typography
              style={theme.palette.primary.CandidateDetailTitle}
              variant="h6"
              component="div"
              gutterBottom
            >
              Fionn Norris
            </Typography>
            <Stack
              style={theme.palette.primary.allAssignmentStudentDetails}
              direction="row"
              className="align-items-center"
              spacing={4}
            >
              <Typography
                style={theme.palette.primary.CandidateDetailMajor}
                variant="p"
                component="div"
                gutterBottom
              >
                Major :
              </Typography>
              <Stack className="align-items-center" direction="row" spacing={2}>
                <Typography
                  style={theme.palette.primary.CandidateDetailMajor}
                  variant="p"
                  component="div"
                  gutterBottom
                >
                  Computer Science
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
                style={theme.palette.primary.CandidateDetailMajor}
                variant="p"
                component="div"
                gutterBottom
              >
                Minor :
              </Typography>
              <Stack className="align-items-center" direction="row" spacing={2}>
                <Typography
                  style={theme.palette.primary.CandidateDetailMajor}
                  variant="p"
                  component="div"
                  gutterBottom
                >
                  Business Administration
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs="3" className="d-flex justify-content-center">
            <div>
              <Avatar
                sx={{ width: 117, height: 117 }}
                alt="Remy Sharp"
                src={CandidateAvatar}
                className="mx-auto"
              />
              <Stack
                className="justify-content-start mt-4"
                direction="row"
                spacing={2}
              >
                <Button
                  size="small"
                  variant="outlined"
                  style={theme.palette.primary.CandidateDetailSocialBtnlinkedin}
                >
                  <LinkedInIcon />
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  style={theme.palette.primary.CandidateDetailSocialBtnGit}
                >
                  <GitHubIcon />
                </Button>
              </Stack>
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ marginTop: "20px" }}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={6}>
            <Typography
              style={theme.palette.primary.CandidateDetailSubHeading}
              variant="h6"
              component="div"
              gutterBottom
            >
              Documents Provided:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box style={theme.palette.primary.CandidateDetailMainBox}>
              <Typography
                style={theme.palette.primary.CandidateDetailSubHeading}
                variant="h6"
                component="div"
                gutterBottom
              >
                Bio:
              </Typography>
              <Typography
                style={theme.palette.primary.CandidateDetailBoxDesc}
                variant="p"
                component="p"
                gutterBottom
              >
                I am a Computer Science student from Al Akhawayn University,
                Morocco. Currently I am interested in applying on a research
                project. I am trying to find the best fit for my research
                interest and background, so I will be able to share my knowledge
                and experience with the world in order to help advance science
                and technology. The research projects I would like to take part
                in the following fields of study: Computer Science, Machine
                Learning, Software Engineering, Bioinformatics, Operating
                Systems, Data Processing, Distributed Systems, Networking,
                Computer Architecture, Artificial Inteligence and Data Mining. I
                have taken a number of programming courses in the same
                university, including: OOP, Object Oriented Programming, Data
                Structures and Algorithms, Advanced Programming in Java and C++
                and Networking Basics. In the past I have helped to create a
                website for students at Al Akhawayn University with Flash and
                Java, as well as a school's application with PHP. I have
                experience in learning and programming languages such as C++,
                PHP, Java, Flash and ASP. I am active in many groups dedicated
                to software development and hardware debugging at my university
                including: Java Script Group (JSG) – Computer Science Club -
                Computer Science Club. I am currently in the process of learning
                a Machine Learning and Data Engineering.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <DenyModal open={open} handleClose={handleClose} />
        <ApproveModal
          openApprove={openApprove}
          handleCloseApprove={handleCloseApprove}
        />
      </Box>
    </>
  );
}
