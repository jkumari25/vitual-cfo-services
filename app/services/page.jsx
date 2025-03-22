"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { desVariants, titleVariants } from "@/utils/animation";

const projects = [
  {
    id: 1,
    name: "1. Financial Planning & Strategy",
    description:
      "• Business & Financial Roadmap Development \n\n• Budgeting & Forecasting for better financial control \n\n• Cash Flow & Working Capital Management to ensure smooth operations \n\n• Profitability Analysis & Cost Optimization",
    image: "/assets/business-management.png",
    link: "",
    category: "residential",
  },
  {
    id: 2,
    name: "2. Accounting & Bookkeeping",
    description:
      "• Monthly, Quarterly & Annual Bookkeeping \n\n• Financial Statements & MIS Reporting \n\n• Accounts Payable & Receivable Management ",
    image: "/assets/financial-planning.png",
    link: "",
    category: "commercial",
  },
  {
    id: 3,
    name: "3. Taxation & Compliance",
    description:
      "• GST Compliance, Return Filing & Litigation Support \n\n• Income Tax Planning, Compliance & Representation \n\n• Tax Assessments & Appeals ",
    image: "/assets/tax-litigation.png",
    link: "",
    category: "residential",
  },
  {
    id: 4,
    name: "4. Business Structuring & Fundraising",
    description:
      "• Company Incorporation & Entity Structuring \n\n• Investment Readiness & Pitch Deck Preparation \n\n• Fundraising & Due Diligence Support ",
    image: "/assets/operational-efficiency.png",
    link: "",
    category: "residential",
  },
  {
    id: 5,
    name: "5. HR & Payroll Management",
    description:
      "• Payroll Processing & Salary Structuring \n\n• TDS, EPF, ESI Compliance \n\n• HR Policies & Labour Law Advisory",
    image: "/assets/business-management.png",
    link: "",
    category: "residential",
  },
  {
    id: 6,
    name: "6. Business Expansion & Growth Advisory",
    description:
      "• Mergers & Acquisitions (M&A) Support \n\n•  Expansion Strategy & Market Entry Planning \n\n• Risk Management & Internal Control Implementation",
    image: "/assets/financial-planning.png",
    link: "",
    category: "residential",
  },
  {
    id: 7,
    name: "7. Litigation & Representation Services",
    description:
      "• GST & Income Tax Litigation & Representation \n\n• Regulatory Compliance & Dispute Resolution ",
    image: "/assets/operational-efficiency.png",
    link: "",
    category: "residential",
  },
];

const page = () => {
  const [loaded, setLoaded] = useState(false);
  const [filteredImages, setFilteredImages] = useState(projects);

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
        className={`bg-[url('/assets/1.png')] bg-center bg-cover transition-transform duration-1000 ${
          loaded ? "scale-95" : "scale-110"
        }`}
      >
        <h1 className="container lg:py-36 py-10 text-6xl font-semibold tracking-widest text-secondary text-center">
          Our Services
        </h1>
      </div>

      {/* Mission and Vision section start */}
      <div className="w-full text-center">
        <h1 className="container py-14 text-5xl font-semibold tracking-normal text-black text-center">
          Comprehensive Virtual CFO Services
        </h1>
      </div>

      <div className="container lg:h-[500px] h-auto w-full flex lg:flex-row flex-col items-center justify-center bg-tertiary gap-4 mb-28 ">
        <div className="w-full ">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="text-5xl font-semibold pb-10"
          >
            1. Financial Planning & Strategy
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="text-xl leading-8"
          >
            • Business & Financial Roadmap Development <br />• Budgeting &
            Forecasting for better financial control <br />• Cash Flow & Working
            Capital Management to ensure smooth operations <br />• Profitability
            Analysis & Cost Optimization
          </motion.p>
        </div>

        <div className="w-full ">
          <div className="relative lg:h-[500px] h-[400px]">
            <Image
              src="/assets/projects/mission.jpg"
              layout="fill"
              objectFit="cover"
              alt="Mission"
              className="rounded-xl shadow-lg transition-transform  hover:scale-90 hover:shadow-primary "
            />
          </div>
        </div>
      </div>

      <div className="container lg:h-[500px] h-auto w-full flex lg:flex-row flex-col items-center justify-center bg-tertiary gap-4 mb-28 ">
        <div className="w-full ">
          <div className="relative lg:h-[500px] h-[400px]">
            <Image
              src="/assets/projects/mission.jpg"
              layout="fill"
              objectFit="cover"
              alt="Mission"
              className="rounded-xl shadow-lg transition-transform  hover:scale-90 hover:shadow-primary "
            />
          </div>
        </div>

        <div className="w-full ">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="text-5xl font-semibold pb-10"
          >
            2. Accounting & Bookkeeping
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="text-xl leading-8"
          >
            • Monthly, Quarterly & Annual Bookkeeping <br />• Financial
            Statements & MIS Reporting <br />• Accounts Payable & Receivable
            Management
          </motion.p>
        </div>
      </div>

      <div className="container grid lg:grid-cols-3 gap-8 py-8">
        {projects.map((items) => (
          <div
            key={items.id}
            className="relative overflow-hidden rounded-xl group"
          >
            <div>
              <Image
                src={items.image}
                width={480}
                height={280}
                alt=""
                className="w-full"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-white/90 dark:bg-black/40 flex-col items-center justify-end w-96 gap-32 p-12 text-xl transition duration-300 ease-in- translate-y-full from-transparent to-black group-hover:translate-y-0">
              <h1 className="text-2xl font-semibold">{items.name}</h1>

              {items.description?.split("\n").map((line, index) => (
                <p key={index} className="mb-2">
                  {line.trim()}
                </p>
              ))}
              {/* <p className="py-4">{items.description}</p> */}
            </div>
          </div>
        ))}
      </div>

      {/* Vision Section started */}
      {/* <div className="container  h-auto w-full flex lg:flex-row flex-col items-center justify-center  gap-4 mb-28">
        <div className="w-full ">
          <Image
            src="/assets/projects/mission.jpeg"
            width={800} // Increase width
            height={1000} // Increase height
            alt="Vision"
            className="rounded-xl shadow-lg transition-transform  hover:scale-90 hover:shadow-primary"
          />
        </div>
        <div className="w-full ">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="text-5xl font-semibold pb-10"
          >
            Vision
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="text-xl leading-8"
          >
            Our purpose is to craft captivating settings where our clients' life
            stories unfold. We are entrusted with the task of selecting the
            perfect sofa for heart-to-heart conversations, a table where budding
            artists bring their visions to life, and fabrics that stir memories
            decades later. Within these walls, emotions like hope, joy, sadness,
            and laughter resonate. It's both a privilege and a commitment to
            design spaces that amplify life's experiences.
          </motion.p>
        </div>
      </div> */}
    </div>
  );
};

export default page;
