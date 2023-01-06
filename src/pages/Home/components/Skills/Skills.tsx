import React from "react";
import {Accordion, AccordionDetails, AccordionSummary, Container, Grid, Typography} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";

export interface SkillInterface {}

const Skills: React.FC<SkillInterface> = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
             <div style={{display:"flex", flexDirection:"column"}}>
               <Typography>Desarrollador Frontend</Typography>
               <Typography>Más de 2 años</Typography>
             </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>

        </Grid>
      </Grid>
    </Container>
  );
};

export default Skills;
