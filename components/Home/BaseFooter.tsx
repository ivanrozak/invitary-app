import React from "react";
import Container from "../Container";

const BaseFooter = () => {
  return (
    <footer className="mt-8 border-t border-gray-200">
      <Container className="text-center text-xs">
        <p className="text-gray-500">@2023</p>
        <p>Crafted by invitary teams</p>
      </Container>
    </footer>
  );
};

export default BaseFooter;
