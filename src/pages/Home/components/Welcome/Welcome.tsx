import { Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import homeDev from "../../../../assets/homeDev.jpg";
import dev from "../../../../assets/dev.svg";
import React from "react";
export interface WelcomeInterface {}

const Welcome: React.FC<WelcomeInterface> = () => {
  const theme = useTheme();
  const isMatchMediaQuery = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container>
      <Grid
        container
        justifyContent={isMatchMediaQuery ? "center" : "space-evenly"}
      >
        <Grid item xs={12} sm={8} md={4} lg={4} xl={6}>
          <div
            className={"blob-profile"}
            style={{
              width: isMatchMediaQuery ? "300" : "350px",
              height: isMatchMediaQuery ? "250" : "300px",
              margin: "15px auto"
            }}
          >
            <div
              className="content-image"
              style={{
                width: !isMatchMediaQuery ? 280 : 260,
                height: 160,
                padding: 10,
                margin: !isMatchMediaQuery ? "40px 0" : "0 auto",
              }}
            >
              <img src={dev} alt="welcome-image" style={{ width: "100%", marginTop: isMatchMediaQuery ? "22px" : 0 }} />
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={4} md={4} lg={7} xl={6}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: !isMatchMediaQuery ? 80 : 20,
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                color: "#144272",
                fontFamily: "Montserrat",
                fontSize: !isMatchMediaQuery ? 28 : 24,
                letterSpacing: 1.5,
                marginTop: !isMatchMediaQuery ? 0 : 10,
                marginLeft: !isMatchMediaQuery ? 0 : 12,
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
                marginLeft: !isMatchMediaQuery ? 0 : 12,
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
                marginLeft: !isMatchMediaQuery ? 0 : 12,
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
