import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Stack from "@mui/material/Stack";
import { useHistory } from "react-router-dom";
import { EditAssignmentProfessor, ApplyAssignment } from "../../router/routes";
import { useTheme } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import { useLocation } from "react-router-dom";
import { userIcon } from "../../utils/images";
import { useCookies } from "react-cookie";


export default function AllAssignmentsDetails() {
  const { push } = useHistory();
  const { goBack } = useHistory();
  const location = useLocation();
  const theme = useTheme();
  const [cookies, setCookie] = useCookies();
  const token=cookies.accessToken;
  const user=JSON.parse(atob(token.split(".")[1]));
  console.log(user);

   

  const onCreateNewClick = (state = null) => {
    push(EditAssignmentProfessor, state);
  };

  const onApplyClick = () => {
    push(ApplyAssignment);
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
            onClick={() => goBack()}
          >
            Back
          </Button>
        </Grid>
        <Grid item xs={1}></Grid>
        {user?.department !== "Student" ? (
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
        )}
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
      <Grid
        container
        sx={{ marginTop: "20px" }}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item sx={12}>
          Introduction: Telecommunications networks form a critical
          infrastructure. Outages due to incidents can have a severe impact on
          society: emergency services cannot be reached, traffic light
          installations may stop functioning and internet services can go down.
          As part of a larger project researchers of Universiteit Twente have
          collected recommendations from different parties within a
          telecommunications operator. These recommendations need to be further
          assessed by relevant parties, but due to the volume of recommendations
          (303) and the wide-ranging subjects of the recommendations, this set
          cannot be offered for review as a whole. They need to be clustered so
          that each individual reviewer gets a manageable amount. On top of this
          practicality, the researchers think that there may be an underlying
          structure in the recommendations that can teach us something new about
          how businesses conduct their work and which blind spots exists in the
          processes that they employ for their day to day business. To find the
          structure in these recommendations, we need a clustering algorithm.
          Given the secondary goal of the researchers, this calls for an
          unsupervised approach (as we do not yet know the underlying
          structure). The recommendations are formulated in plain English, which
          necessitates the application of NLP. Assignment Your assignment is to
          develop an algorithm that can cluster the recommendations and to
          deliver the clusters themselves. This assignment has several parts:
          Cleanse the data (several recommendations are repeated. The number of
          repetitions may say something about the importance of the
          recommendation) Choose a set of applicable clustering algorithm Find
          an optimum number of clusters Compare the outcomes of the different
          algorithms Draw conculsions about the effectiveness of the algorithms
          Deliver the clusters of recommendations, optionally (for bonus points)
          with a generated description of each cluster.
        </Grid>
      </Grid>
    </Box>
  );
}
