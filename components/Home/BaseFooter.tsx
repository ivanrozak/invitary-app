import React from "react";
import Container from "../Container";

const BaseFooter = () => {
  return (
    <footer>
      <Container className="mt-8 text-center text-xs">
        <p className="text-gray-500">@2023</p>
        <p>Crafted by invitary teams</p>
      </Container>
    </footer>
  );
};

export default BaseFooter;
