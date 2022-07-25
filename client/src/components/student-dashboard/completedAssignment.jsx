import React from "react";

const CompletedAssignment = () => {
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
                  startIcon={<ArchiveIcon />}
                  onClick={() => setManage(true)}
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
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <div style={theme.palette.primary.studentCard}>
              <div className="d-flex justify-content-between">
                <div>
                  <Stack direction="row" spacing={2}>
                    <Avatar
                      alt="Remy Sharp"
                      src={MaleAvatar}
                      style={theme.palette.primary.studentCardAvatar}
                    />

                    <div>
                      <Typography
                        style={theme.palette.primary.studentCardHeading}
                        variant="p"
                        component="div"
                      >
                        Najib Fawzi
                      </Typography>
                      <Typography
                        variant="p"
                        component="div"
                        style={theme.palette.primary.studentCardSubHeading}
                      >
                        Associate Professor of Computer Science
                      </Typography>
                      <Typography
                        variant="p"
                        component="div"
                        style={theme.palette.primary.studentCardSubHeading}
                      >
                        School of Science and Engineering
                      </Typography>
                    </div>
                  </Stack>
                  <Typography
                    variant="p"
                    style={theme.palette.primary.CardAssignmentTitle}
                    component="div"
                  >
                    Assignment:
                  </Typography>
                  <Typography
                    variant="p"
                    component="div"
                    style={theme.palette.primary.studentCardDescription}
                  >
                    UNSUPERVISED LEARNING USING NLP FOR RECOMMENDATION
                    CLUSTERING
                  </Typography>

                  <Button
                    // className="btn btn-light "
                    size="small"
                    // color="secondary"
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
                      style={theme.palette.primary.StatusDescriptionFinished}
                    >
                      FINISHED
                    </span>
                  </h2>
                  <Typography
                    variant="p"
                    component="div"
                    // style={theme.palette.primary.studentCardDescription}
                  >
                    Due: Aug 2, 2019
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div style={theme.palette.primary.studentCard}>
              <div className="d-flex justify-content-between">
                <div>
                  <Stack direction="row" spacing={2}>
                    <Avatar
                      alt="Remy Sharp"
                      src={FemaleAvatar}
                      style={theme.palette.primary.studentCardAvatar}
                    />

                    <div>
                      <Typography
                        style={theme.palette.primary.studentCardHeading}
                        variant="p"
                        component="div"
                      >
                        Bahija Basima
                      </Typography>
                      <Typography
                        variant="p"
                        component="div"
                        style={theme.palette.primary.studentCardSubHeading}
                      >
                        Associate Professor of Computer Science
                      </Typography>
                      <Typography
                        variant="p"
                        component="div"
                        style={theme.palette.primary.studentCardSubHeading}
                      >
                        School of Science and Engineering
                      </Typography>
                    </div>
                  </Stack>
                  <Typography
                    variant="p"
                    style={theme.palette.primary.CardAssignmentTitle}
                    component="div"
                  >
                    Assignment:
                  </Typography>
                  <Typography
                    variant="p"
                    component="div"
                    style={theme.palette.primary.studentCardDescription}
                  >
                    UNSUPERVISED LEARNING USING NLP FOR RECOMMENDATION
                    CLUSTERING
                  </Typography>

                  <Button
                    // className="btn btn-light "
                    size="small"
                    // color="secondary"
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
                      style={theme.palette.primary.StatusDescriptionPending}
                    >
                      PENDING
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="d-flex justify-content-center">
              <AddCircleOutlineIcon style={theme.palette.primary.AddIcon} />
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CompletedAssignment;
