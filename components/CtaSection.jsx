"use client";
import React from "react";
import { motion } from "framer-motion";
import { desVariants, titleVariants } from "@/utils/animation";
import { Button } from "./ui/button";
import { TbArrowUpRight } from "react-icons/tb";

const CtaSection = () => {
  return (
    <div className="pt-12 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-8">
        <motion.h2
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="lg:text-6xl font-bold tracking-tight text-4xl"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="mt-2 text-lg leading-8 text-muted-foreground border-b pb-4"
        >
          Learn how to grow your business with our expert advice.
        </motion.p>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-[url('/assets/cta-2.jpeg')] bg-center bg-cover opacity-40"></div>
        <div className="relative z-10 mx-auto py-32 flex flex-col items-center tracking-wider">
          <p className="container text-5xl font-semibold text-black tracking-widest text-center ">
            Empower Your Business with Expert Virtual CFO Services
          </p>
          <p className="container text-xl font-semibold text-black tracking-widest text-center pb-8 pt-4">
            Take control of your finances, optimize cash flow, and drive
            sustainable growth with our tailored Virtual CFO solutions.
          </p>
          <Button className="inline-flex items-center px-8 py-3 shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
            Get Started with a Free Consultation{" "}
            <TbArrowUpRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
