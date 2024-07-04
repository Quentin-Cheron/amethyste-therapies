"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AnimatedLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1200,
    });
  }, []);
  return <>{children}</>;
}

export default AnimatedLayout;
