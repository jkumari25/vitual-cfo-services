import React from "react";
import { TbArrowNarrowRight } from "react-icons/tb";
import Image from "next/image";

const CatalogueSection = () => {
  const items = [
    {
      id: "01",
      category: "FINANCIAL PLANNING",
      title: "Complex Financial Planning",
      image: "/assets/financial-planning.png",
      description: "Handling complex financial planning & corporate taxation.",
    },
    {
      id: "02",
      category: "BUSINESS MANAGEMENT",
      title: "Industry-wide Business Management",
      image: "/assets/business-management.png",
      description: "Managing businesses across various industries.",
    },
    {
      id: "03",
      category: "TAX LITIGATION",
      title: "Tax Litigation & Regulatory Matters",
      image: "/assets/tax-litigation.png",
      description:
        "Representing clients in tax litigation & regulatory matters.",
    },
    {
      id: "04",
      category: " OPERATIONAL EFFICIENCY",
      title: "Profitability & Efficiency",
      image: "/assets/operational-efficiency.png",
      description: "Driving profitability & operational efficiency.",
    },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 lg:gap-0 divide-gray-300 lg:divide-x">
      {items.map((item) => (
        <div key={item.id} className="relative overflow-hidden group">
          <div>
            <Image
              src={item.image}
              width={380}
              height={100}
              alt=""
              className="w-full"
            />
          </div>

          <div className="absolute top-0 p-8 bg-white text-black bg-opacity-60 backdrop-blur m-12">
            <div className="flex justify-between pb-4">
              <p className="text-sm">{item.category}</p>
              <span className="text-sm">{item.id}</span>
            </div>
            <a href="" className="block text-xl font-semibold">
              {item.title}
            </a>
            <p className="py-4">{item.description}</p>
            <a href="" className="inline-flex items-center font-medium">
              See Details <TbArrowNarrowRight className="ml-2" />
            </a>
          </div>

          <div className="inset-0 bg-tertiary flex-col items-center justify-end md:flex md:absolute gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 group-hover:translate-y-full md:border-b-0 hidden">
            <p className="tracking-wider -rotate-90">{item.category}</p>
            <span>{item.id}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CatalogueSection;
