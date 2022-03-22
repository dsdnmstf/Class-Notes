import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

export default function Buttons() {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button color="success" variant="contained">
        Contained
      </Button>
      <Button color="error" variant="outlined">
        Outlined
      </Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </div>
  );
}
