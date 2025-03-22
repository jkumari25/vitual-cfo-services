"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TbArrowUpRight } from "react-icons/tb";
import { motion, useScroll, useTransform } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";
import CatalogueSection from "@/components/CatalogueSection";

const page = () => {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Set a timeout to simulate a delay for the transition effect
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000); // Adjust the delay time as needed

    // Clear the timeout on component unmount to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div>
      <div
        className={`bg-[url('/assets/about-bg.png')] bg-center bg-cover transition-transform duration-1000 ${
          loaded ? "scale-95" : "scale-110"
        }`}
      >
        <h1 className="container py-32 text-6xl font-semibold text-black tracking-widest text-center lg:py-36">
          Who are we?
        </h1>
      </div>
      <div className="container">
        <div className="pt-4">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="text-3xl font-semibold text-center lg:p-10 lg:text-5xl"
          >
            How Our Team Ensures Excellence
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="text-2xl text-center font-medium pb-10 mt-5"
          >
            Our Virtual CFO services are led by a team of expert Chartered
            Accountants (CAs), finance professionals, and tax advisors with
            years of experience in:
          </motion.p>
        </div>

        {/* <div className="items-center lg:flex gap-x-8">
          
          <motion.div style={{ scale }} ref={ref} className="w-full">
            <Image
              src="/assets/about-1.jpg"
              width={700}
              height={700}
              className=""
            />
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
          >
            <p className="pb-8 tracking-wide mt-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              consequuntur repellendus cumque iusto praesentium facilis,
              distinctio architecto, voluptas porro cupiditate tenetur, sit
              atque recusandae impedit quos minima nobis! Saepe, at? <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              eveniet esse iste aperiam sed eaque quos porro quibusdam
              laboriosam id provident tempora praesentium cupiditate atque
              veritatis non accusantium, odio reprehenderit.
              <br />
              <br />
              <span className="text-xl font-extrabold tracking-tight">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </span>
              <Button className="inline-flex items-center px-8 py-3 shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
                Read More <TbArrowUpRight className="w-5 h-5 ml-2" />
              </Button>
            </p>
          </motion.div>
        </div> */}
        <CatalogueSection />

        {/* Team Section */}
        <div className="lg:py-20">
          <div className="pt-8 pb-4">
            <motion.h1
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="text-4xl font-bold tracking-wider text-center uppercase"
            >
              Team
            </motion.h1>
          </div>

          <div className="grid py-8 gap-20 lg:grid-cols-3">
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="border-2 border-primary"
            >
              <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3">
                <Image
                  src="/assets/profile2.jpg"
                  width={200}
                  height={200}
                  alt=""
                  className="mx-auto rounded-full"
                />
                <h2 className="py-4 text-2xl font-semibold uppercase">
                  Building Surveys
                </h2>
                <p className="text-sm">
                  Nullam. Ab culpa fusce debitis habitant, officiis mollis, diam
                  atque leo illum, magnis bibendum! Montes at, mattis voluptas,
                  deserunt explicabo praesentium, dolores dolores non!
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className="border-2 border-primary"
            >
              <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3">
                <Image
                  src="/assets/profile1.jpg"
                  width={200}
                  height={200}
                  alt=""
                  className="mx-auto rounded-full"
                />
                <h2 className="py-4 text-2xl font-semibold uppercase">
                  Building Surveys
                </h2>
                <p className="text-sm">
                  Nullam. Ab culpa fusce debitis habitant, officiis mollis, diam
                  atque leo illum, magnis bibendum! Montes at, mattis voluptas,
                  deserunt explicabo praesentium, dolores dolores non!
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="border-2 border-primary"
            >
              <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3">
                <Image
                  src="/assets/profile3.jpg"
                  width={200}
                  height={200}
                  alt=""
                  className="mx-auto rounded-full"
                />
                <h2 className="py-4 text-2xl font-semibold uppercase">
                  Building Surveys
                </h2>
                <p className="text-sm">
                  Nullam. Ab culpa fusce debitis habitant, officiis mollis, diam
                  atque leo illum, magnis bibendum! Montes at, mattis voluptas,
                  deserunt explicabo praesentium, dolores dolores non!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
