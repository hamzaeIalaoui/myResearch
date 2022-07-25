import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useTheme } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CandidateAvatar, userIcon } from "../../utils/images";
import { PieChart } from "../professor-charts/pieChart";
import DenyModal from "../../shared/denyModal";
import ApproveModal from "../../shared/approveModal";
import { AllCandidatesDetail } from "../../router/routes";
import { useHistory } from "react-router-dom";

export default function AllCandidates() {
  const { push } = useHistory();
  const [open, setOpen] = React.useState(false);
  const [openApprove, setOpenApprove] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleOpenApprove = () => setOpenApprove(true);

  const handleClose = () => setOpen(false);
  const handleCloseApprove = () => setOpenApprove(false);

  const onCreateNewClick = (state = null) => {
    push(AllCandidatesDetail, state);
  };

  const theme = useTheme();
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid className="mb-3" item xs={6}>
          <Typography
            style={theme.palette.primary.headingMain}
            variant="h6"
            component="div"
            gutterBottom
          >
            Candidates
          </Typography>
        </Grid>
        <Grid className="mb-3" item xs={2}></Grid>
        <Grid className="mb-3" item xs={4}>
          <Stack className="justify-content-end" direction="row" spacing={2}>
            <Button
              size="small"
              variant="contained"
              style={theme.palette.primary.buttonContained}
              endIcon={<AddOutlinedIcon />}
            >
              Create new Assignment
            </Button>
          </Stack>
        </Grid>
        <Grid className="mb-3" item xs={12}>
          <Card
            variant="outlined"
            sx={{ minWidth: "100%", minHeight: "auto" }}
            className="mb-2"
          >
            <CardContent>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs="9">
                  <Typography
                    style={theme.palette.primary.allCandidateCardTitle}
                    gutterBottom
                    className="mb-3"
                  >
                    Fionn Norris
                    <Typography
                      style={theme.palette.primary.allCandidateCardSubTitle}
                      gutterBottom
                      variant="span"
                      component="span"
                      className="ml-3"
                    >
                      Applied To
                    </Typography>
                  </Typography>
                  <Typography
                    style={theme.palette.primary.allCandidateCardDesc}
                    gutterBottom
                    className="mb-3"
                  >
                    A PROBABILISTIC APPROACH TOWARDS HANDLING DATA QUALITY
                    PROBLEMS AND IMPERFECT DATA INTEGRATION TASKS
                  </Typography>
                  <Stack
                    className="justify-content-start"
                    direction="row"
                    spacing={2}
                  >
                    <Button
                      size="small"
                      variant="contained"
                      style={theme.palette.primary.allCandidateDetailBtn}
                      endIcon={<ArrowForwardIcon />}
                      onClick={() => onCreateNewClick()}
                    >
                      More Details
                    </Button>
                  </Stack>
                </Grid>
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
                        style={theme.palette.primary.allCandidateDenyBtn}
                        onClick={handleOpen}
                      >
                        Deny
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        style={theme.palette.primary.allCandidateApproveBtn}
                        onClick={handleOpenApprove}
                      >
                        Approve
                      </Button>
                    </Stack>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid className="mb-3" item xs={12}>
          <Card
            variant="outlined"
            sx={{ minWidth: "100%", minHeight: "auto" }}
            className="mb-2"
          >
            <CardContent>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs="9">
                  <Typography
                    style={theme.palette.primary.allCandidateCardTitle}
                    gutterBottom
                    className="mb-3"
                  >
                    Fionn Norris
                    <Typography
                      style={theme.palette.primary.allCandidateCardSubTitle}
                      gutterBottom
                      variant="span"
                      component="span"
                      className="ml-3"
                    >
                      Applied To
                    </Typography>
                  </Typography>
                  <Typography
                    style={theme.palette.primary.allCandidateCardDesc}
                    gutterBottom
                    className="mb-3"
                  >
                    A PROBABILISTIC APPROACH TOWARDS HANDLING DATA QUALITY
                    PROBLEMS AND IMPERFECT DATA INTEGRATION TASKS
                  </Typography>
                  <Stack
                    className="justify-content-start"
                    direction="row"
                    spacing={2}
                  >
                    <Button
                      size="small"
                      variant="contained"
                      style={theme.palette.primary.allCandidateDetailBtn}
                      endIcon={<ArrowForwardIcon />}
                      onClick={() => onCreateNewClick()}
                    >
                      More Details
                    </Button>
                  </Stack>
                </Grid>
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
                        style={theme.palette.primary.allCandidateDenyBtn}
                        onClick={handleOpen}
                      >
                        Deny
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        style={theme.palette.primary.allCandidateApproveBtn}
                        onClick={handleOpenApprove}
                      >
                        Approve
                      </Button>
                    </Stack>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid className="mb-3" item xs={12}>
          <Card
            variant="outlined"
            sx={{ minWidth: "100%", minHeight: "auto" }}
            className="mb-2"
          >
            <CardContent>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs="9">
                  <Typography
                    style={theme.palette.primary.allCandidateCardTitle}
                    gutterBottom
                    className="mb-3"
                  >
                    Fionn Norris
                    <Typography
                      style={theme.palette.primary.allCandidateCardSubTitle}
                      gutterBottom
                      variant="span"
                      component="span"
                      className="ml-3"
                    >
                      Applied To
                    </Typography>
                  </Typography>
                  <Typography
                    style={theme.palette.primary.allCandidateCardDesc}
                    gutterBottom
                    className="mb-3"
                  >
                    A PROBABILISTIC APPROACH TOWARDS HANDLING DATA QUALITY
                    PROBLEMS AND IMPERFECT DATA INTEGRATION TASKS
                  </Typography>
                  <Stack
                    className="justify-content-start"
                    direction="row"
                    spacing={2}
                  >
                    <Button
                      size="small"
                      variant="contained"
                      style={theme.palette.primary.allCandidateDetailBtn}
                      endIcon={<ArrowForwardIcon />}
                      onClick={() => onCreateNewClick()}
                    >
                      More Details
                    </Button>
                  </Stack>
                </Grid>
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
                        style={theme.palette.primary.allCandidateDenyBtn}
                        onClick={handleOpen}
                      >
                        Deny
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        style={theme.palette.primary.allCandidateApproveBtn}
                        onClick={handleOpenApprove}
                      >
                        Approve
                      </Button>
                    </Stack>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid className="mb-3" item xs={12}>
          <Card
            variant="outlined"
            sx={{ minWidth: "100%", minHeight: "auto" }}
            className="mb-2"
          >
            <CardContent>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs="9">
                  <Typography
                    style={theme.palette.primary.allCandidateCardTitle}
                    gutterBottom
                    className="mb-3"
                  >
                    Fionn Norris
                    <Typography
                      style={theme.palette.primary.allCandidateCardSubTitle}
                      gutterBottom
                      variant="span"
                      component="span"
                      className="ml-3"
                    >
                      Applied To
                    </Typography>
                  </Typography>
                  <Typography
                    style={theme.palette.primary.allCandidateCardDesc}
                    gutterBottom
                    className="mb-3"
                  >
                    A PROBABILISTIC APPROACH TOWARDS HANDLING DATA QUALITY
                    PROBLEMS AND IMPERFECT DATA INTEGRATION TASKS
                  </Typography>
                  <Stack
                    className="justify-content-start"
                    direction="row"
                    spacing={2}
                  >
                    <Button
                      size="small"
                      variant="contained"
                      style={theme.palette.primary.allCandidateDetailBtn}
                      endIcon={<ArrowForwardIcon />}
                      onClick={() => onCreateNewClick()}
                    >
                      More Details
                    </Button>
                  </Stack>
                </Grid>
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
                        style={theme.palette.primary.allCandidateDenyBtn}
                        onClick={handleOpen}
                      >
                        Deny
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        style={theme.palette.primary.allCandidateApproveBtn}
                        onClick={handleOpenApprove}
                      >
                        Approve
                      </Button>
                    </Stack>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid className="mb-3" item xs={12}>
          <Card
            variant="outlined"
            sx={{ minWidth: "100%", minHeight: "auto" }}
            className="mb-2"
          >
            <CardContent>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs="9">
                  <Typography
                    style={theme.palette.primary.allCandidateCardTitle}
                    gutterBottom
                    className="mb-3"
                  >
                    Fionn Norris
                    <Typography
                      style={theme.palette.primary.allCandidateCardSubTitle}
                      gutterBottom
                      variant="span"
                      component="span"
                      className="ml-3"
                    >
                      Applied To
                    </Typography>
                  </Typography>
                  <Typography
                    style={theme.palette.primary.allCandidateCardDesc}
                    gutterBottom
                    className="mb-3"
                  >
                    A PROBABILISTIC APPROACH TOWARDS HANDLING DATA QUALITY
                    PROBLEMS AND IMPERFECT DATA INTEGRATION TASKS
                  </Typography>
                  <Stack
                    className="justify-content-start"
                    direction="row"
                    spacing={2}
                  >
                    <Button
                      size="small"
                      variant="contained"
                      style={theme.palette.primary.allCandidateDetailBtn}
                      endIcon={<ArrowForwardIcon />}
                      onClick={() => onCreateNewClick()}
                    >
                      More Details
                    </Button>
                  </Stack>
                </Grid>
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
                        style={theme.palette.primary.allCandidateDenyBtn}
                        onClick={handleOpen}
                      >
                        Deny
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        style={theme.palette.primary.allCandidateApproveBtn}
                        onClick={handleOpenApprove}
                      >
                        Approve
                      </Button>
                    </Stack>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <DenyModal open={open} handleClose={handleClose} />
      <ApproveModal
        openApprove={openApprove}
        handleCloseApprove={handleCloseApprove}
      />
    </Box>
  );
}
