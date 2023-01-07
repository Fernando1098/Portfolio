import React from "react";
import {
  Container,
  Grid,
} from "@mui/material";
import {BackendSkills, FrontendSkills, MobileSkills} from "@/pages";

export interface SkillInterface {}

const Skills: React.FC<SkillInterface> = () => {
  return (
    <Container sx={{ mb: 5 }}>
      <h2
        style={{
          textAlign: "center",
          marginTop: 40,
          letterSpacing: 1.5,
          marginBottom: 25,
          color: "#144272",
        }}
      >
        Habilidades
      </h2>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <FrontendSkills />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <BackendSkills />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <MobileSkills />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Skills;
