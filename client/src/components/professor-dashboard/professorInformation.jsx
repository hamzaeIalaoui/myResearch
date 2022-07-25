import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useTheme } from "@material-ui/core";
import { BarChart } from "../professor-charts/barchart";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { userIcon } from "../../utils/images";
import { PieChart } from "../professor-charts/pieChart";

export default function ProfessorInformation() {
  const theme = useTheme();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid className="mb-3" item xs={6}>
            <Typography
              style={theme.palette.primary.headingMain}
              variant="h6"
              component="div"
              gutterBottom
            >
              Information
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
          <Grid item xs={9}>
            <BarChart />
            <div
              className="gap-1 mt-4"
              style={theme.palette.primary.averageCardMain}
            >
              <Grid style={theme.palette.primary.averageCard} item Xs={6}>
                <Stack
                  className="justify-content-between align-items-center pb-3 px-3 border-bottom"
                  direction="row"
                >
                  <Typography
                    style={theme.palette.primary.averageCardTitle}
                    variant="h6"
                    component="div"
                    gutterBottom
                  >
                    Students by average progress
                  </Typography>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Descending
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      style={theme.palette.primary.averageCardSelect}
                      value={age}
                      onChange={handleChange}
                      label="Descending"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ascending</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
                <div className="mt-2">
                  <Stack
                    className="justify-content-between align-items-center pb-3 px-4"
                    direction="row"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <Avatar
                        alt="Remy Sharp"
                        src={userIcon}
                        className="mr-2"
                      />
                      <Typography
                        style={theme.palette.primary.averageCardDataTitle}
                        variant="h6"
                        component="div"
                        gutterBottom
                      >
                        Annette Watson
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        style={theme.palette.primary.averageCardDataPercentage}
                        variant="h6"
                        component="div"
                        gutterBottom
                      >
                        93%
                      </Typography>
                    </div>
                  </Stack>
                </div>
                <div className="mt-2">
                  <Stack
                    className="justify-content-between align-items-center pb-3 px-4"
                    direction="row"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <Avatar
                        alt="Remy Sharp"
                        src={userIcon}
                        className="mr-2"
                      />
                      <Typography
                        style={theme.palette.primary.averageCardDataTitle}
                        variant="h6"
                        component="div"
                        gutterBottom
                      >
                        Annette Watson
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        style={theme.palette.primary.averageCardDataPercentage}
                        variant="h6"
                        component="div"
                        gutterBottom
                      >
                        93%
                      </Typography>
                    </div>
                  </Stack>
                </div>
                <div className="mt-2">
                  <Stack
                    className="justify-content-between align-items-center pb-3 px-4"
                    direction="row"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <Avatar
                        alt="Remy Sharp"
                        src={userIcon}
                        className="mr-2"
                      />
                      <Typography
                        style={theme.palette.primary.averageCardDataTitle}
                        variant="h6"
                        component="div"
                        gutterBottom
                      >
                        Annette Watson
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        style={theme.palette.primary.averageCardDataPercentage}
                        variant="h6"
                        component="div"
                        gutterBottom
                      >
                        93%
                      </Typography>
                    </div>
                  </Stack>
                </div>
                <div className="mt-2">
                  <Stack
                    className="justify-content-between align-items-center pb-3 px-4"
                    direction="row"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <Avatar
                        alt="Remy Sharp"
                        src={userIcon}
                        className="mr-2"
                      />
                      <Typography
                        style={theme.palette.primary.averageCardDataTitle}
                        variant="h6"
                        component="div"
                        gutterBottom
                      >
                        Annette Watson
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        style={theme.palette.primary.averageCardDataPercentage}
                        variant="h6"
                        component="div"
                        gutterBottom
                      >
                        93%
                      </Typography>
                    </div>
                  </Stack>
                </div>
                <div className="mt-2">
                  <Stack
                    className="justify-content-between align-items-center pb-3 px-4"
                    direction="row"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <Avatar
                        alt="Remy Sharp"
                        src={userIcon}
                        className="mr-2"
                      />
                      <Typography
                        style={theme.palette.primary.averageCardDataTitle}
                        variant="h6"
                        component="div"
                        gutterBottom
                      >
                        Annette Watson
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        style={theme.palette.primary.averageCardDataPercentage}
                        variant="h6"
                        component="div"
                        gutterBottom
                      >
                        93%
                      </Typography>
                    </div>
                  </Stack>
                </div>
                <div className="mt-2">
                  <Stack
                    className="justify-content-between align-items-center pb-3 px-4"
                    direction="row"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <Avatar
                        alt="Remy Sharp"
                        src={userIcon}
                        className="mr-2"
                      />
                      <Typography
                        style={theme.palette.primary.averageCardDataTitle}
                        variant="h6"
                        component="div"
                        gutterBottom
                      >
                        Annette Watson
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        style={theme.palette.primary.averageCardDataPercentage}
                        variant="h6"
                        component="div"
                        gutterBottom
                      >
                        93%
                      </Typography>
                    </div>
                  </Stack>
                </div>
              </Grid>
              <Grid style={theme.palette.primary.averageCard} item Xs={6}>
                <Stack
                  className="justify-content-between align-items-center pb-3 px-3 border-bottom "
                  direction="row"
                  sx={{ height: "78px" }}
                >
                  <Typography
                    style={theme.palette.primary.averageCardTitle}
                    variant="h6"
                    component="div"
                    gutterBottom
                  >
                    Students by type of studying
                  </Typography>
                </Stack>
                <div className="pie-chart">
                  <PieChart />
                </div>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={3}>
            <Card
              display="flex"
              variant="outlined"
              sx={{ minWidth: 275, minHeight: 150 }}
              className="mb-2"
            >
              <CardContent className="card-content">
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs="3">
                    <Avatar
                      sx={{
                        width: 60,
                        height: 60,
                        background: "rgba(113, 59, 219, 0.05)",
                        color: "#6F52ED",
                        fontSize: "30",
                      }}
                    >
                      <PersonOutlinedIcon />
                    </Avatar>
                  </Grid>
                  <Grid item xs="9">
                    <Typography
                      sx={{ fontSize: 20, fontWeight: 600, lineHeight: 1 }}
                      style={theme.palette.primary.informationCardTitle}
                      gutterBottom
                    >
                      62
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      style={theme.palette.primary.informationCardSubTitle}
                      gutterBottom
                    >
                      Students
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card
              display="flex"
              variant="outlined"
              sx={{ minWidth: 275, minHeight: 150 }}
              className="mb-2"
            >
              <CardContent className="card-content">
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs="3">
                    <Avatar
                      sx={{
                        width: 60,
                        height: 60,
                        background: "rgba(51, 214, 159, 0.07)",
                        color: "#21B8C7",
                        fontSize: "30",
                      }}
                    >
                      <ShowChartIcon />
                    </Avatar>
                  </Grid>
                  <Grid item xs="9">
                    <Typography
                      sx={{ fontSize: 20, fontWeight: 600, lineHeight: 1 }}
                      style={theme.palette.primary.informationCardTitle}
                      gutterBottom
                    >
                      6.8
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      style={theme.palette.primary.informationCardSubTitle}
                      gutterBottom
                    >
                      Average progress
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card
              className="mb-2"
              display="flex"
              variant="outlined"
              sx={{ minWidth: 275, minHeight: 150 }}
            >
              <CardContent className="card-content">
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs="3">
                    <Avatar
                      sx={{
                        width: 60,
                        height: 60,
                        background: "rgba(255, 76, 97, 0.05)",
                        color: "#FF4C61",
                        fontSize: "30",
                      }}
                    >
                      <ShowChartIcon />
                    </Avatar>
                  </Grid>
                  <Grid item xs="9">
                    <Typography
                      sx={{ fontSize: 20, fontWeight: 600, lineHeight: 1 }}
                      style={theme.palette.primary.informationCardTitle}
                      gutterBottom
                    >
                      9 (14%)
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      style={theme.palette.primary.informationCardSubTitle}
                      gutterBottom
                    >
                      Underperforming students
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card
              className="mb-2"
              display="flex"
              variant="outlined"
              sx={{ minWidth: 275, minHeight: 150 }}
            >
              <CardContent className="card-content">
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs="3">
                    <Avatar
                      sx={{
                        width: 60,
                        height: 60,
                        background: "rgba(76, 184, 255, 0.07)",
                        color: "#4CB8FF",
                        fontSize: "30",
                      }}
                    >
                      <PersonOutlinedIcon />
                    </Avatar>
                  </Grid>
                  <Grid item xs="9">
                    <Typography
                      sx={{ fontSize: 20, fontWeight: 600, lineHeight: 1 }}
                      style={theme.palette.primary.informationCardTitle}
                      gutterBottom
                    >
                      42
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      style={theme.palette.primary.informationCardSubTitle}
                      gutterBottom
                    >
                      Finished assignment
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
