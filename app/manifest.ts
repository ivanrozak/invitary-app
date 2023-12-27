import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Invitary",
    short_name: "Invitary",
    icons: [
      {
        src: "/android-chrome-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
    ],
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone",
  };
}
