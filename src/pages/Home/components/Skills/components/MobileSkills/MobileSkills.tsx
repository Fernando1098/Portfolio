import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ExpandMore, PhoneAndroid } from "@mui/icons-material";
import {InfoSkillItem} from "@/pages";
import {dataSkillsMobile} from "@/data/dataSkillsMobile";
export interface MobileSkillsInterface {}

const MobileSkills: React.FC<MobileSkillsInterface> = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <PhoneAndroid />{" "}
            <Typography sx={{ ml: 1, fontSize: 18 }}>
              Desarrollador Mobile
            </Typography>
          </div>
          <Typography sx={{ ml: 4, fontSize: 14, color: "rgba(0,0,0,0.6)" }}>
            Más de 2 años
          </Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        {dataSkillsMobile.map(({ id, percent, technology }) => (
          <InfoSkillItem key={id} percent={percent} technology={technology} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default MobileSkills;
