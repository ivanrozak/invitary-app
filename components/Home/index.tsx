import React from "react";
import Container from "../Container";
import CatalogCard from "./CatalogCard";

const Home = () => {
  const themeList = [
    {
      name: "Theme One",
      imgSrc: "/animated-slider/1.png",
    },
    {
      name: "Theme Two",
      imgSrc: "/animated-slider/2.png",
    },
    {
      name: "Theme Three",
      imgSrc: "/animated-slider/3.png",
    },
    {
      name: "Theme Four",
      imgSrc: "/animated-slider/4.png",
    },
  ];
  return (
    <Container>
      <h3 className="text-2xl mb-6">Catalogue</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {themeList.map((t, i) => (
          <CatalogCard key={i} imgSrc={t.imgSrc} name={t.name} />
        ))}
      </div>
    </Container>
  );
};

export default Home;
