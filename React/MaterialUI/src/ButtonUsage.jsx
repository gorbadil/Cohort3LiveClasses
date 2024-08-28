import Button from "@mui/material/Button";

export default function ButtonUsage({ textForButton }) {
  return (
    <Button variant="contained" color="error">
      {" "}
      {textForButton}{" "}
    </Button>
  );
}
