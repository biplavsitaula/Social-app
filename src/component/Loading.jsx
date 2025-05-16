import CircularProgress from "@mui/material-next/CircularProgress";

const Loading = () => {
  return (
    <center style={{ margin: 100 }}>
      <CircularProgress color="primary" fourColor variant="indeterminate" />
    </center>
  );
};
export default Loading;
