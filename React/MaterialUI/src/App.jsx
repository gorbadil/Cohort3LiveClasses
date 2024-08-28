import "./App.css";
import ButtonUsage from "./ButtonUsage";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./themes/theme";

// css root variables

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <br />
      <ButtonUsage textForButton="Merhaba Canım" />
      <ButtonUsage textForButton="Merhaba Şekerim" />
      <ButtonUsage textForButton="Ne var?" />
      <br />
      <Button variant="contained" fullWidth={true}>
        Hello Canım
      </Button>
      <Typography variant="h1">Cohort 3</Typography>
      <Typography variant="h2">Cohort 3</Typography>
      <Typography variant="h3">Cohort 3</Typography>
      <Typography variant="p">Cohort 3</Typography>
      {/* <Box sx={{ width: 300 }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box> */}
      <br />
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
    </ThemeProvider>
  );
}

export default App;
