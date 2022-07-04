import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { Link } from "@mui/material";

export default function AllAssignments(props) {
  function createData(
    assignmentName,
    student,
    publishDate,
    supervisor,
    status
  ) {
    return { assignmentName, student, publishDate, supervisor, status };
  }

  const rows = [
    createData(
      "A PROBABILISTIC APPROACH TOWARDS HANDLING DATA QUALITY PROBLEMS AND IMPERFECT DATA ...",
      "Tom Cruise",
      "May 26, 2019",
      "Annette Watson",
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
        </Grid>
        <TableContainer className="portal-table" component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Assignments</TableCell>
                <TableCell align="left">Student</TableCell>
                <TableCell align="left">Publish Date</TableCell>
                <TableCell align="left">Supervisor</TableCell>
                <TableCell align="left">Status</TableCell>
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
                    {row.publishDate}
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
    </>
  );
}
