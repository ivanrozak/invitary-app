"use client";
import React from "react";
import Container from "../Container";
import { AnimatePresence, motion } from "framer-motion";

const DCWellcomeScreen = () => {
  return (
    <Container centered>
      <AnimatePresence>
        <motion.div>Welcome Screen</motion.div>
      </AnimatePresence>
    </Container>
  );
};

export default DCWellcomeScreen;
