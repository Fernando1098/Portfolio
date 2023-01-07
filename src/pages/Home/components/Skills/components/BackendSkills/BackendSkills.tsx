import { DataObject, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import {dataSkillsBackend} from "@/data/dataSkillsBackend";
import {InfoSkillItem} from "@/pages";
export interface BackendSkillsInterface {}

const BackendSkills: React.FC<BackendSkillsInterface> = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <DataObject />{" "}
            <Typography sx={{ ml: 1, fontSize: 18 }}>
              Desarrollador Backend
            </Typography>
          </div>
          <Typography sx={{ ml: 3.8, fontSize: 14, color: "rgba(0,0,0,0.6)" }}>
            Más de 2 años
          </Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        {dataSkillsBackend.map(({ id, percent, technology }) => (
          <InfoSkillItem key={id} percent={percent} technology={technology} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default BackendSkills;
