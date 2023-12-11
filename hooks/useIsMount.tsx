"use client";
import { useEffect, useState } from "react";

export default function useIsMount() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return isMounted;
}
