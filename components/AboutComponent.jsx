"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";

const AboutComponent = () => {
  return (
    <div className="container py-12 xl:py-24 h-[auto]">
      <div className="grid lg:grid-cols-2 place-items-center">
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
        >
          {/* aboutfront.png */}
          <Image
            src="/assets/hero-img.png"
            width={900}
            height={500}
            alt="About"
            className="max-md:hidden"
          />
        </motion.div>
        <div className="items-center">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="px-12 py-4 text-3xl font-extrabold leading-tight lg:text-5xl"
          >
            Why Our Virtual CFO Services Stand Out?
          </motion.h2>

          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="px-12 tracking-wider uppercase text-gray-400 mt-3"
          >
            Our Virtual CFO services are not just about bookkeeping and
            compliance; we act as your strategic finance partner to help you:
          </motion.p>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="px-12 pb-4 mt-4"
          >
            Manage your finances efficiently. <br /> Comply with all taxation &
            legal regulations.
            <br /> Plan & optimize your tax liabilities. <br /> Secure funding &
            investment opportunities. <br /> Drive business expansion &
            profitability
          </motion.p>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="px-12 pb-4"
          >
            We ensure that your financial health is strong so you can focus on
            scaling your business
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
