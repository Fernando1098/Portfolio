import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { Devices, ExpandMore } from "@mui/icons-material";
import { dataSkillsFrontend } from "@/data/dataSkillsFrontend";
import { InfoSkillItem } from "@/pages";
export interface FrontendSkillsInterface {}

const FrontendSkills: React.FC<FrontendSkillsInterface> = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <Devices />{" "}
            <Typography sx={{ ml: 1, fontSize: 18 }}>
              Desarrollador Frontend
            </Typography>
          </div>
          <Typography sx={{ ml: 3.8, fontSize: 14, color: "rgba(0,0,0,0.6)" }}>
            Más de 2 años
          </Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        {dataSkillsFrontend.map(({ id, percent, technology }) => (
          <InfoSkillItem key={id} percent={percent} technology={technology} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default FrontendSkills;
