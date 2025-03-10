"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const ResidentialInterior = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Set a timeout to simulate a delay for the transition effect
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000); // Adjust the delay time as needed

    // Clear the timeout on component unmount to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div
        className={`bg-[url('/assets/projects/project-1.jpeg')] bg-center bg-cover transition-transform duration-1000 ${
          loaded ? "scale-95" : "scale-110"
        }`}
      >
        <h1 className="container py-28 text-6xl font-semibold text-primary tracking-widest text-center lg:py-48"></h1>
      </div>

      <div className="container mt-10">
        <h2 className="text-6xl font-bold">Bohemian Haven</h2>
        <p className="text-xl text-gray-800 font-semibold">
          "Designing spaces for the way we live today and tomorrow."
        </p>
      </div>
    </div>
  );
};

export default ResidentialInterior;
