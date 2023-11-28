"use client";
import React from "react";
import Container from "../Container";
import { AnimatePresence, motion } from "framer-motion";

const DCWellcomeScreen = () => {
  return (
    <Container centered>
      <AnimatePresence>
        <motion.div className="text-center">
          <p>Diamond Cross</p>
          <p>Loading</p>
        </motion.div>
      </AnimatePresence>
    </Container>
  );
};

export default DCWellcomeScreen;
