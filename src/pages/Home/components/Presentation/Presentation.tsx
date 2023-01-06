import React from "react";
import { Container } from "@mui/material";
export interface PresentationInterface {}

const Presentation: React.FC<PresentationInterface> = () => {
  return (
    <div
      style={{
        backgroundColor: "#144272",
        color: "#fff",
        marginTop: 40,
        padding: "45px 15px",
      }}
    >
      <h2 style={{ textAlign: "center", marginTop: 10, letterSpacing: 1.5 }}>
        Acerca de mí
      </h2>
      <Container>
        <p
          style={{
            marginTop: 20,
            fontSize: 17,
            lineHeight: 1.6,
            textAlign: "justify",
          }}
        >
          Soy ingeniero en sistemas de información apasionado con la
          programación desde hace 7 años. Me gusta mucho ver los proyectos
          finalizados, pensando en los conocimientos y expereciencias nuevas
          adquiridas en el proceso de desarrollo de cada uno de estos. Trato
          siempre de dar el cien por ciento de mi y sobre todo de entregar
          trabajos de calidad, según lo que el cliente y el usuario final desea.
        </p>
      </Container>
    </div>
  );
};

export default Presentation;
