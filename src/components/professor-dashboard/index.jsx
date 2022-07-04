import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import EditModal from "../../shared/editModal";
import { Link } from "@mui/material";

export default function ProfessorDashBoardHome(props) {
  function createData(assignmentName, student, dueDate, progress) {
    return { assignmentName, student, dueDate, progress };
  }

  const rows = [
    createData(
      "A PROBABILISTIC APPROACH TOWARDS HANDLING DATA QUALITY PROBLEMS AND IMPERFECT DATA ...",
      "Tom Cruise",
      "May 26, 2019",
      "LATE"
    ),
    createData(
      "A PROBABILISTIC APPROACH TOWARDS HANDLING DATA QUALITY PROBLEMS AND IMPERFECT DATA ...",
      "Tom Cruise",
      "May 26, 2019",
      "pending"
    ),
    createData(
      "A PROBABILISTIC APPROACH TOWARDS HANDLING DATA QUALITY PROBLEMS AND IMPERFECT DATA ...",
      "Tom Cruise",
      "May 26, 2019",
      "FINISHED"
    ),
    createData(
      "A PROBABILISTIC APPROACH TOWARDS HANDLING DATA QUALITY PROBLEMS AND IMPERFECT DATA ...",
      "Tom Cruise",
      "May 26, 2019",
      "LATE"
    ),
    createData(
      "A PROBABILISTIC APPROACH TOWARDS HANDLING DATA QUALITY PROBLEMS AND IMPERFECT DATA ...",
      "Tom Cruise",
      "May 26, 2019",
      "pending"
    ),
  ];
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [manage, setManage] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Typography variant="h6" component="div" gutterBottom>
              My Assignments
            </Typography>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={4}>
            <Stack className="justify-content-end" direction="row" spacing={2}>
              {!manage && (
                <Button
                  size="small"
                  variant="outlined"
                  startIcon={<EditOutlinedIcon />}
                  onClick={() => setManage(true)}
                >
                  Manage Assignments
                </Button>
              )}
              <Link
                to="/"
                size="small"
                variant="contained"
                endIcon={<AddOutlinedIcon />}
              >
                Create new Assignment
              </Link>
            </Stack>
          </Grid>
          <Grid item mt={5} xs="4">
            <Card
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
                    <Avatar justifyContent="center">
                      <PersonOutlinedIcon />
                    </Avatar>
                  </Grid>
                  <Grid item xs="9">
                    <Typography
                      sx={{ fontSize: 20, fontWeight: 600, lineHeight: 1 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      62
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Students
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item mt={5} xs="4">
            <Card
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
                    <Avatar justifyContent="center">
                      <PersonOutlinedIcon />
                    </Avatar>
                  </Grid>
                  <Grid item xs="9">
                    <Typography
                      sx={{ fontSize: 20, fontWeight: 600, lineHeight: 1 }}
                      color="text.black"
                      gutterBottom
                    >
                      83%
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Students Overall Progress
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <TableContainer className="portal-table" component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Assignments</TableCell>
                <TableCell align="left">Student</TableCell>
                <TableCell align="left">Due Date</TableCell>
                <TableCell align="left">Progress</TableCell>
                <TableCell
                  align="left"
                  className={!manage ? "d-none" : "d-table-cell"}
                ></TableCell>
                <TableCell
                  align="left"
                  className={!manage ? "d-none" : "d-table-cell"}
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.assignmentName}
                  hover={true}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.assignmentName}
                    <div className="data-time">Updated 1 day ago</div>
                  </TableCell>
                  <TableCell align="left">
                    {row.student}
                    <div className="data-time">on 24.05.2019</div>
                  </TableCell>
                  <TableCell align="left">
                    {row.dueDate}
                    <div className="data-time">6:30 PM</div>
                  </TableCell>
                  <TableCell align="left">
                    <div
                      className={`progress-chip ${
                        row.progress == "LATE"
                          ? "error"
                          : row.progress == "pending"
                          ? "info"
                          : row.progress == "FINISHED"
                          ? "success"
                          : ""
                      }`}
                    >
                      {row.progress}
                    </div>
                  </TableCell>
                  <TableCell
                    align="left"
                    className={!manage ? "d-none" : "d-table-cell"}
                  >
                    <div className="table-action">
                      <EditIcon />
                    </div>
                  </TableCell>
                  <TableCell
                    align="left"
                    className={!manage ? "d-none" : "d-table-cell"}
                  >
                    <div onClick={handleOpen} className="table-action">
                      <CloseIcon />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
      <EditModal open={open} handleClose={handleClose} />
    </>
  );
}
