"use client";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PhotoAlbum from "react-photo-album";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const LightBox = () => {
  const [index, setIndex] = useState(-1);
  const photos = [
    {
      src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      width: 800,
      height: 599,
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: 600,
      height: 799,
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      width: 800,
      height: 799,
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      width: 600,
      height: 799,
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      width: 800,
      height: 599,
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
      width: 600,
      height: 799,
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
      width: 800,
      height: 599,
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      width: 800,
      height: 599,
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
      width: 600,
      height: 799,
    },
  ];
  return (
    <>
      <PhotoAlbum
        photos={photos}
        layout="rows"
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
};

export default LightBox;
