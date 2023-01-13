import React from "react";
import {Contact, Presentation, Skills, Welcome} from "@/pages";
export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return (
    <div>
      <Welcome />
      <Presentation />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
