"use client";
import React from "react";
import Badge from "./Badge";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";

const CompanySection = () => {
  return (
    <div>
      <div className="w-full text-center mb-20px">
        <motion.h1
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="h1"
        >
          Why Choose Us?
        </motion.h1>
      </div>
      <div className="bg-primary dark:bg-tertiary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {/* Badge 1 */}
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="mx-auto flex max-w-s flex-col gap-y-4"
            >
              <dt className="text-white leading-7">
                Led by expert Chartered Accountants (CAs) and finance
                professionals.
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                <Badge endCountNum={44} endCountText="million" />
              </dd>
            </motion.div>

            {/* Badge 2 */}
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className="mx-auto flex max-w-s flex-col gap-y-4"
            >
              <dt className="text-white leading-7">
                Scalable Virtual CFO solutions for startups, MSMEs & large
                enterprises.
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                <Badge endCountNum={119} endCountText="trillion" />
              </dd>
            </motion.div>

            {/* Badge 3 */}
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="mx-auto flex max-w-s flex-col gap-y-4"
            >
              <dt className="text-white leading-7">
                Strategic financial planning to boost profitability & ensure
                compliance.
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                <Badge endCountNum={45000} endCountText="+" />
              </dd>
            </motion.div>

            {/* Badge 4 */}
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="mx-auto flex max-w-s flex-col gap-y-4"
            >
              <dt className="text-white leading-7">
                Flexible payment terms for easy cash flow management.
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                <Badge endCountNum={45000} endCountText="+" />
              </dd>
            </motion.div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default CompanySection;
