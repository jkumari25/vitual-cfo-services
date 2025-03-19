// "use client";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import React, { useEffect, useState } from "react";
// import { Switch } from "@headlessui/react";
// import { Button } from "@/components/ui/button";
// import { TbArrowUpRight } from "react-icons/tb";
// import { MdEmail } from "react-icons/md";
// import { IoCall } from "react-icons/io5";
// import { IoLocation } from "react-icons/io5";
// import { motion } from "framer-motion";
// import { titleVariants } from "@/utils/animation";

// function className(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// const page = () => {
//   const [agreed, setAgreed] = useState(false);
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     // Set a timeout to simulate a delay for the transition effect
//     const timer = setTimeout(() => {
//       setLoaded(true);
//     }, 1000); // Adjust the delay time as needed

//     // Clear the timeout on component unmount to prevent memory leaks
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div>
//       <div
//         className={`bg-[url('/assets/2.png')] bg-center bg-cover transition-transform duration-1000 ${
//           loaded ? "scale-95" : "scale-110"
//         }`}
//       >
//         <h1 className="container py-28 text-6xl font-semibold text-white tracking-widest text-center lg:py-36">
//           Get in Touch
//         </h1>
//       </div>
//       {/* Contact Information section start*/}
//       <div className="container flex lg:flex-row flex-col mt-20 items-center justify-around gap-8">
//         <motion.div
//           initial="offscreen"
//           whileInView={"onscreen"}
//           variants={titleVariants}
//           className="w-full flex flex-col items-center justify-center gap-2"
//         >
//           <MdEmail fontSize={60} className="text-primary" />
//           <p className="pt-3 text-2xl font-semibold tracking-wide">Email us</p>
//           <p className="text-xl">contact@example.com</p>
//         </motion.div>
//         <motion.div
//           initial="offscreen"
//           whileInView={"onscreen"}
//           variants={titleVariants}
//           className=" w-full flex flex-col items-center justify-center gap-2"
//         >
//           <IoCall fontSize={60} className="text-primary" />
//           <p className="pt-3 text-2xl font-semibold tracking-wide">
//             Phone Number
//           </p>
//           <p className="text-xl">(229) 555-0109</p>
//           <p className="text-xl">(229) 555-2872</p>
//         </motion.div>
//         <motion.div
//           initial="offscreen"
//           whileInView={"onscreen"}
//           variants={titleVariants}
//           className="w-full flex flex-col items-center justify-center text-center gap-2"
//         >
//           <IoLocation fontSize={60} className="text-primary" />
//           <p className="pt-3 text-2xl font-semibold tracking-wide">
//             Headquarter
//           </p>
//           <p className="text-xl">304, Mahabir Tower, Ranchi-Jharkhand</p>
//         </motion.div>
//       </div>

//       <div className="lg:container w-full flex gap-6 lg:my-40 lg:flex-row flex-col mb-20">
//         {/* Contact form section started */}
//         <div className="px-6 lg:px-8 mt-20 w-full">
//           <div className="mx-auto max-w-2xl text-center">
//             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
//               Contact Sales
//             </h2>
//             <p className="mt-2 text-lg leading-8 text-muted-foreground">
//               Please feel free to ask anything
//             </p>
//           </div>

//           <form className="mx-auto mt-16 max-w-xl sm:mt-20">
//             <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//               <div className="mt-2.5">
//                 <Input type="name" id="firstname" placeholder="First Name" />
//               </div>

//               <div className="mt-2.5">
//                 <Input type="name" id="lastname" placeholder="Last Name" />
//               </div>

//               <div className="sm:col-span-2">
//                 <div className="mt-2.5">
//                   <Input type="name" id="Company" placeholder="Company" />
//                 </div>
//               </div>

//               <div className="sm:col-span-2">
//                 <div className="mt-2.5">
//                   <Input type="name" id="Email" placeholder="Email" />
//                 </div>
//               </div>

//               <div className="sm:col-span-2">
//                 <div className="mt-2.5">
//                   <Textarea placeholder="Type Your Message Here..." />
//                 </div>
//               </div>

//               <Switch.Group as="div">
//                 <div>
//                   <Switch
//                     checked={agreed}
//                     onChange={setAgreed}
//                     className={className(
//                       agreed ? "bg-primary" : "bg-gray-200",
//                       "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                     )}
//                   >
//                     <span className="sr-only">Agree to policies</span>
//                     <span
//                       aria-hidden="true"
//                       className={className(
//                         agreed ? "translate-x-3.5" : "translate-x-0",
//                         "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
//                       )}
//                     />
//                   </Switch>
//                 </div>
//                 <Switch.Label>
//                   By selecting this, you agree to our{" "}
//                   <a href="#" className="font-semibold text-primary">
//                     privacy&nbsp;policy
//                   </a>
//                   .
//                 </Switch.Label>
//               </Switch.Group>

//               <div className="mt-10">
//                 <Button
//                   type="submit"
//                   className="flex w-full items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
//                 >
//                   Let's Talk <TbArrowUpRight className="w-5 h-5 ml-2" />
//                 </Button>
//               </div>
//             </div>
//           </form>
//         </div>

//         {/* Google map section started */}
//         <div className="lg:mt-60 mt-10 lg:h-[80vh] h-[60vh] w-full ">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d58605.2366858085!2d85.28304329893417!3d23.35827080689095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39fa6596407a6b69%3A0xb419e0b663805644!2sExogenous%20Technology!3m2!1d23.358197399999998!2d85.3242432!5e0!3m2!1sen!2sin!4v1712834350882!5m2!1sen!2sin"
//             className="w-full h-full rounded-lg"
//             title="google map"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;

"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useState, useTransition } from "react";
import { Switch } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { TbArrowUpRight } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { motion } from "framer-motion";
import { titleVariants } from "@/utils/animation";
import Swal from "sweetalert2";
import { sendEmail } from "@/utils/send-email";

function className(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Page = () => {
  const [loaded, setLoaded] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    company: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.company ||
      !formData.email ||
      !formData.message
    ) {
      toast.error("Please fill in all fields.");
      return;
    }
    try {
      await sendEmail(formData);
      Swal.fire({
        title: "Message sent successfully",
        icon: "success",
      });
      setFormData({
        firstname: "",
        lastname: "",
        company: "",
        email: "",
        message: "",
      });
    } catch (error) {
      Swal.fire({
        title: "Error sending email",
        icon: "error",
      });
      console.error("Error sending email:", error);
    }
  };

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
        className={`bg-[url('/assets/2.png')] bg-center bg-cover transition-transform duration-1000 ${
          loaded ? "scale-95" : "scale-110"
        }`}
      >
        <h1 className="container py-28 text-6xl font-semibold text-white tracking-widest text-center lg:py-36">
          Get in Touch
        </h1>
      </div>
      {/* Contact Information section start*/}
      <div className="container flex lg:flex-row flex-col mt-20 items-center justify-around gap-8">
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="w-full flex flex-col items-center justify-center gap-2"
        >
          <MdEmail fontSize={60} className="text-primary" />
          <p className="pt-3 text-2xl font-semibold tracking-wide">Email us</p>
          <p className="text-xl">contact@example.com</p>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className=" w-full flex flex-col items-center justify-center gap-2"
        >
          <IoCall fontSize={60} className="text-primary" />
          <p className="pt-3 text-2xl font-semibold tracking-wide">
            Phone Number
          </p>
          <p className="text-xl">(229) 555-0109</p>
          <p className="text-xl">(229) 555-2872</p>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="w-full flex flex-col items-center justify-center text-center gap-2"
        >
          <IoLocation fontSize={60} className="text-primary" />
          <p className="pt-3 text-2xl font-semibold tracking-wide">
            Headquarter
          </p>
          <p className="text-xl">304, Mahabir Tower, Ranchi-Jharkhand</p>
        </motion.div>
      </div>

      <div className="lg:container w-full flex gap-6 lg:my-40 lg:flex-row flex-col mb-20">
        {/* Contact form section started */}
        <div className="px-6 lg:px-8 mt-20 w-full">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Contact Sales
            </h2>
            <p className="mt-2 text-lg leading-8 text-muted-foreground">
              Please feel free to ask anything
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-16 max-w-xl sm:mt-20"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="mt-2.5">
                <Input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First Name"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mt-2.5">
                <Input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Type Your Message Here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* <Switch.Group as="div">
                <div>
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={className(
                      agreed ? "bg-primary" : "bg-gray-200",
                      "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={className(
                        agreed ? "translate-x-3.5" : "translate-x-0",
                        "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                      )}
                    />
                  </Switch>
                </div>
                <Switch.Label>
                  By selecting this, you agree to our{" "}
                  <a href="#" className="font-semibold text-primary">
                    privacy&nbsp;policy
                  </a>
                  .
                </Switch.Label>
              </Switch.Group> */}

              <div className="mt-10">
                <Button
                  type="submit"
                  className="flex w-full items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
                >
                  Let's Talk <TbArrowUpRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </form>
        </div>

        {/* Google map section started */}
        <div className="lg:mt-60 mt-10 lg:h-[80vh] h-[60vh] w-full ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d58605.2366858085!2d85.28304329893417!3d23.35827080689095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39fa6596407a6b69%3A0xb419e0b663805644!2sExogenous%20Technology!3m2!1d23.358197399999998!2d85.3242432!5e0!3m2!1sen!2sin!4v1712834350882!5m2!1sen!2sin"
            className="w-full h-full rounded-lg"
            title="google map"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Page;
