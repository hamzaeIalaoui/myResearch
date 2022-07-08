import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MUIRichTextEditor from "mui-rte";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useHistory, useLocation } from "react-router-dom";

export default function EditAssignment() {
  const { state } = useLocation();

  const [values] = useState(
    state
      ? {
          assignmentTitle: state.assignmentName,
        }
      : {}
  );
  const myTheme = createTheme({
    // Set up your custom MUI theme here
  });
  const { goBack } = useHistory();

  return (
    <Box sx={{ width: "100%", py: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="h6" component="div" gutterBottom>
            My Assignments
          </Typography>

          <Box component="form" sx={{ m: 1 }} noValidate autoComplete="off">
            <InputLabel className="mb-2" htmlFor="outlined-basic">
              Type:
            </InputLabel>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Eg. your text here"
              variant="outlined"
              className="mb-3"
            />
            <InputLabel className="mb-2" htmlFor="filled-basic">
              Period
            </InputLabel>
            <TextField
              fullWidth
              id="filled-basic"
              label="Eg. your text here"
              variant="outlined"
              className="mb-3"
            />
            <InputLabel className="mb-2" htmlFor="standard-basic">
              Student:
            </InputLabel>
            <TextField
              fullWidth
              id="standard-basic"
              label="Eg. your text here"
              variant="outlined"
              className="mb-3"
            />
          </Box>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Stack
            className="justify-content-end align-items-end h-100"
            spacing={2}
            direction="row"
          >
            <FormGroup>
              <FormControlLabel
                color="success"
                control={<Switch defaultChecked />}
                label="Open Assignment"
              />
            </FormGroup>
            <div className="d-flex flex-column gap-2">
              <Button
                variant="outlined"
                startIcon={<ArrowBackIcon />}
                onClick={() => goBack()}
              >
                DISCARD
              </Button>
              <Button variant="contained">Publish</Button>
            </div>
          </Stack>
        </Grid>
      </Grid>
      <Box component="form" sx={{ mt: 3 }} noValidate autoComplete="off">
        <InputLabel className="mb-2" htmlFor="outlined-basic">
          Assignment title:
        </InputLabel>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Eg. your text here"
          variant="outlined"
          className="mb-3"
          value={values?.assignmentTitle ?? ""}
        />
      </Box>
      <div className="editor-box">
        <ThemeProvider theme={myTheme}>
          <MUIRichTextEditor label="Start typing..." />
        </ThemeProvider>
      </div>
    </Box>
  );
}
