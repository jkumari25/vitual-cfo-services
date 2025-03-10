"use client";
import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Page = () => {
  // Array of all images
  const allImages = [
    { src: "/assets/gallery/bedroom-1.jpeg", category: "residential" },
    { src: "/assets/gallery/gallery-1.jpeg", category: "residential" },
    { src: "/assets/bedroom.jpg", category: "residential" },
    { src: "/assets/gallery/gallery-2.jpeg", category: "commercial" },
    { src: "/assets/gallery/gallery-5.jpeg", category: "commercial" },
    { src: "/assets/gallery/gallery-4.jpeg", category: "commercial" },
    { src: "/assets/gallery/gallery-7.jpeg", category: "residential" },
    { src: "/assets/gallery/gallery-8.jpeg", category: "residential" },
    { src: "/assets/gallery/gallery-9.jpeg", category: "commercial" },
    { src: "/assets/gallery/gallery-10.jpeg", category: "commercial" },
    { src: "/assets/gallery/gallery-16.jpeg", category: "commercial" },
    { src: "/assets/gallery/gallery-11.jpeg", category: "residential" },
    { src: "/assets/gallery/gallery-12.jpeg", category: "commercial" },
    { src: "/assets/gallery/gallery-13.jpeg", category: "residential" },
    { src: "/assets/gallery/gallery-14.jpeg", category: "commercial" },
    { src: "/assets/gallery/gallery-15.jpeg", category: "residential" },
  ];

  // State variables
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredImages, setFilteredImages] = useState(allImages);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Set a timeout to simulate a delay for the transition effect
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000); // Adjust the delay time as needed

    // Clear the timeout on component unmount to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);

  // Event handler for category selection change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    // Filter images based on selected category
    if (category === "") {
      setFilteredImages(allImages);
    } else {
      const filtered = allImages.filter((image) => image.category === category);
      setFilteredImages(filtered);
    }
  };

  const columnsCountBreakPoints = { 350: 1, 750: 3, 900: 4 };
  return (
    <div>
      <div
        className={`bg-[url('/assets/gallery/gallerybg.jpg')] bg-center bg-cover transition-transform duration-1000 ${
          loaded ? "scale-95" : "scale-110"
        }`}
      >
        <h1 className="container py-28 text-6xl font-semibold text-white tracking-widest text-center lg:py-36">
          Gallery
        </h1>
      </div>
      <div className="container mt-10 flex lg:justify-start justify-center gap-8">
        <div
          className="bg-primary text-white px-8 py-3 rounded-lg text-lg"
          onClick={() => handleCategoryChange("residential")}
        >
          Residential Interior
        </div>
        <div
          className="bg-primary text-white px-8 py-3 rounded-lg text-lg"
          onClick={() => handleCategoryChange("commercial")}
        >
          Commercial Interior
        </div>
      </div>
      <div className="container lg:py-20 py-10">
        <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
          <Masonry gutter="16px">
            {/* Mapping filtered images array to render images */}
            {filteredImages.map((image, index) => (
              <div key={index} className="w-full">
                <img
                  src={image.src}
                  alt=""
                  className="w-full rounded-lg hover:scale-90 transition-all"
                />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Page;
