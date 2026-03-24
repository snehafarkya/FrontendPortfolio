"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import TypingText from "../ai/TypingText";
import Image from "next/image";
import hero from '@/public/hero-.webp'

export default function Hero() {
  return (
    <div className="text-center mt-20">
      <Image src={hero} alt="hero image" width={250} height={250} className="mx-auto border bg-transparent rounded-full drop-shadow-2xl shadow-amber-100 shadow-2xl  mt-4"/>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:text-6xl text-2xl font-bold mt-6"
      >
        {portfolioData.role}
      </motion.h1>


      <div className="mt-6 max-w-xl mx-auto text-gray-300" >
        <TypingText text={portfolioData.intro} />
      </div>

    </div>
  );
}