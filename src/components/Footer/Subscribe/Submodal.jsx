import { CancelOutlined } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
} from "@mui/material";

const SubModal = ({ modalState, handleModalState }) => {
  return (
    <Box>
      <Dialog open={modalState} onClose={handleModalState}>
        <DialogContent>Thanks for subscribing to our newsletter</DialogContent>
        <DialogActions>
          <IconButton onClick={handleModalState}>
            <CancelOutlined />
          </IconButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default SubModal;
