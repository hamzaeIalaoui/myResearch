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

export default function EditModal({ open, handleClose }) {
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
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      className="edit-modal"
    >
      <Fade in={open}>
        <Box sx={style}>
          <div className="close-btn">
            <IconButton onClick={handleClose} aria-label="delete">
              <CloseIcon />
            </IconButton>
          </div>
          <Typography
            id="transition-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontSize: 20, color: "#54595E" }}
          >
            Sure you want to delete?
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 1 }}>
            Deleting this assignment will not be visible for other parties,
            before going through this action please make sure all members
            related to this assignment are informed.
          </Typography>
          <Stack
            className="justify-content-end"
            spacing={2}
            sx={{ mt: 2 }}
            direction="row"
          >
            <Button onClick={handleClose} variant="outlined" color="primary">
              No, cancel
            </Button>
            <Button variant="contained">Yes, confirm</Button>
          </Stack>
        </Box>
      </Fade>
    </Modal>
  );
}
