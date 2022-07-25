import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function ApproveModal({ openApprove, handleCloseApprove }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "#FFFFFF",
    boxShadow: 24,
    py: 3,
    px: 2,
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openApprove}
      onClose={handleCloseApprove}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      className="edit-modal"
    >
      <Fade in={openApprove}>
        <Box sx={style}>
          <div className="close-btn">
            <IconButton onClick={handleCloseApprove} aria-label="delete">
              <CloseIcon />
            </IconButton>
          </div>
          <Typography
            id="transition-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontSize: 20, color: "#54595E" }}
          >
            Sure you want to Approve?
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 1 }}>
            Please Make sure that this candidate is fit for this assignment, if
            not, please review the application and confirm your choice again.
          </Typography>
          <Stack
            className="justify-content-end"
            spacing={2}
            sx={{ mt: 2 }}
            direction="row"
          >
            <Button
              onClick={handleCloseApprove}
              variant="outlined"
              color="primary"
            >
              No, cancel
            </Button>
            <Button variant="contained">Yes, confirm</Button>
          </Stack>
        </Box>
      </Fade>
    </Modal>
  );
}
