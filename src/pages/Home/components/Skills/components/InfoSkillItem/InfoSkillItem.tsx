import React from "react";
export interface InfoSkillItemInterface {
  percent: number;
  technology: string;
}

const InfoSkillItem: React.FC<InfoSkillItemInterface> = ({
  percent,
  technology,
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <h2 style={{ fontSize: 14, letterSpacing: 1 }}>{technology}</h2>
        <span style={{ color: "rgba(0,0,0,0.6)" }}>{percent}%</span>
      </div>
      <div
        style={{
          backgroundColor: "#e9e9e9",
          height: "8px",
          borderRadius: "25px",
        }}
      >
        <span
          style={{
            width: `${percent}%`,
            height: "8px",
            backgroundColor: "#144272",
            display: "block",
            borderRadius: "25px",
          }}
        ></span>
      </div>
    </>
  );
};

export default InfoSkillItem;
