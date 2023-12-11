import React from "react";
import Container from "../Container";
import CatalogCard from "./CatalogCard";

const Home = () => {
  const themeList = [
    {
      name: "Theme One",
      imgSrc: "/animated-slider/1.png",
      link: "/marry-monday",
    },
    {
      name: "Theme Two",
      imgSrc: "/animated-slider/2.png",
      link: "/diamond-cross",
    },
    {
      name: "Theme Three",
      imgSrc: "/animated-slider/3.png",
      link: "#",
    },
    {
      name: "Theme Four",
      imgSrc: "/animated-slider/4.png",
      link: "#",
    },
    {
      name: "Theme Five",
      imgSrc: "/animated-slider/5.png",
      link: "#",
    },
    {
      name: "Theme Six",
      imgSrc: "/animated-slider/6.png",
      link: "#",
    },
    {
      name: "Theme Seven",
      imgSrc: "/animated-slider/7.png",
      link: "#",
    },
  ];
  return (
    <Container>
      <h3 className="text-2xl mb-6 font-semibold text-center">Catalogue</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {themeList.map((t, i) => (
          <CatalogCard key={i} imgSrc={t.imgSrc} name={t.name} link={t.link} />
        ))}
      </div>
    </Container>
  );
};

export default Home;
