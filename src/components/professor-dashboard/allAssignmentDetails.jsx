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
import { UserDetailsAvatar, userIcon } from "../../utils/images";
export default function AllAssignmentsDetails() {
  const { push } = useHistory();
  const { goBack } = useHistory();

  const theme = useTheme();

  const [manage, setManage] = React.useState(false);

  const onCreateNewClick = (state = null) => {
    push(EditAssignmentProfessor, state);
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
          details will be shown here from editor
        </Grid>
      </Grid>
    </Box>
  );
}
