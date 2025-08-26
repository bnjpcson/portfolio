"use client"; // This is a client-side component

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Define types for the props
interface AosInitializerProps {
  duration?: number; // Optional prop (default value will be 1000)
  easing?: string; // Optional prop (default value will be 'ease-in-out')
  isOnce?: boolean; // Optional prop (default value will be true)
  offset?: number; // Optional prop (default value will be 200)
  delay?: number; // Optional prop (default value will be 0)
}

export default function AosInitializer({
  duration = 1000, // Default value for duration
  easing = "ease-in-out", // Default value for easing
  isOnce = true, // Default value for once only
  offset = 200, // Default value for offset
  delay = 0, // Default value for delay
}: AosInitializerProps) {
  useEffect(() => {
    AOS.init({
      duration: duration, // Animation duration
      easing: easing,
      once: isOnce,
      offset,
      delay,
    });

    AOS.refresh(); // Refresh AOS animations on page load

    // Optional: Cleanup if needed
    return () => AOS.refreshHard();
  }, []); // Run only once when the component is mounted

  return null; // This component doesn't render anything to the DOM
}
