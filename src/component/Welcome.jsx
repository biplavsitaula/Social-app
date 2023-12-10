import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const Welcome = ({ onGetPostClick }) => {
  return (
    <center className="welcome">
      <h1>No Post available.</h1>

      <Button
        onClick={onGetPostClick}
        variant="contained"
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </center>
  );
};
export default Welcome;
