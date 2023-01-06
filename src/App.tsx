import { Container, Grid } from "@mui/material";
import "./App.css";
import { Navbar } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <Grid container spacing={10}>
      <Grid item xs={12} md={12} lg={12} xl={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12} md={12} lg={12} xl={12}>
        <Home />
      </Grid>
    </Grid>
  );
}

export default App;
