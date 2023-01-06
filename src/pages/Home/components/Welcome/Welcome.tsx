import { Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import homeDev from "../../../../assets/homeDev.jpg";
import React from "react";
export interface WelcomeInterface {}

const Welcome: React.FC<WelcomeInterface> = () => {
  const theme = useTheme();
  const isMatchMediaQuery = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} sm={7} md={4} lg={6} xl={6}>
          <div
            className="content-image"
            style={{
              width: !isMatchMediaQuery ? 350 : 300,
              height: 160,
              padding: 10,
              margin: !isMatchMediaQuery ? 0 : "0 auto"
            }}
          >
            <img src={homeDev} alt="welcome-image" style={{ width: "100%" }} />
          </div>
        </Grid>

        <Grid item xs={12} sm={5} md={8} lg={6} xl={6}>
          <div
            style={{ display: "flex", flexDirection: "column", marginTop: 50 }}
          >
            <span
              style={{
                fontWeight: "bold",
                color: "#144272",
                fontFamily: "Montserrat",
                fontSize: !isMatchMediaQuery ? 28 : 24,
                letterSpacing: 1.5,
                marginTop: !isMatchMediaQuery ? 0 : 10,
                marginLeft: !isMatchMediaQuery ? 0 : 12
              }}
            >
              HOLA SOY
            </span>
            <span
              style={{
                fontWeight: "bold",
                color: "#144272",
                fontFamily: "Montserrat",
                marginTop: 5,
                fontSize: !isMatchMediaQuery ? 28 : 24,
                letterSpacing: 1.5,
                marginLeft: !isMatchMediaQuery ? 0 : 12
              }}
            >
              FERNANDO MARTINEZ
            </span>
            <span
              style={{
                color: "#144272",
                fontFamily: "Montserrat",
                marginTop: 10,
                fontSize: !isMatchMediaQuery ? 24 : 21,
                marginLeft: !isMatchMediaQuery ? 0 : 12

              }}
            >
              Desarrollador Frontend, Backend y Mobile
            </span>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Welcome;
