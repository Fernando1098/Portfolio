import React from "react";
import {Presentation, Skills, Welcome} from "@/pages";
export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return (
    <div>
      <Welcome />
      <Presentation />
      <Skills />
    </div>
  );
};

export default Home;
