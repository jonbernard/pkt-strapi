"use client";

// import Link from "next/link";
import { DateTime } from "luxon";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";

import Coat from "../../public/coat-bw.svg";
import CoatColor from "../../public/coat-color.svg";

export default function Home() {
  const years = useMemo(() => {
    var end = DateTime.now();
    var start = DateTime.fromISO("1923-10-27");

    var diffInYears = end.diff(start, "years");
    return Math.floor(diffInYears.as("years"));
  }, []);

  return (
    <AnimatePresence>
      <div className="min-h-[100vh] sm:min-h-screen w-screen flex flex-col relative bg-[#F2F3F5] font-inter overflow-hidden">
        <main className="flex flex-col justify-center h-[90%] static md:fixed w-screen overflow-hidden grid-rows-[1fr_repeat(3,auto)_1fr] z-[100] pt-[30px] pb-[320px] px-4 md:px-20 md:py-0">
          <motion.div
            transition={{
              duration: 1,
              ease: [0.075, 0.82, 0.965, 1],
            }}
            data-transition-in
            className="flex md:hidden justify-center"
          >
            <CoatColor className="h-[50dvh]" />
          </motion.div>

          <motion.h6
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="relative md:ml-[-10px] mb-[12px] font-extrabold text-[7vw] md:text-[32px] font-inter text-[#1E2B3A] tracking-[-2px] z-[100]"
          >
            Phi Chapter of Phi Kappa Tau
          </motion.h6>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="relative md:ml-[-10px] md:mb-[37px] font-extrabold text-[12vw] md:text-[84px] font-inter text-[#1E2B3A] leading-[0.9] tracking-[-2px] z-[100]"
          >
            Second Century Fund
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="flex flex-col md:flex-row justify-center z-20 mx-0 mb-0 mt-8 md:mt-0 md:mb-[35px] max-w-2xl md:space-x-8 space-y-8 md:space-y-0"
          >
            <div className="md:w-1/2">
              <h2 className="flex items-center font-semibold text-[1em] text-[#1a2b3b]">
                Lorem ipsum
              </h2>
              <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal">
                Nam arcu mauris, scelerisque nec rhoncus at, faucibus ut eros.
                Integer sit amet purus id nulla rhoncus dapibus. Etiam
                sollicitudin eleifend urna, in blandit ante elementum sed. Proin
                sed nisl feugiat, congue libero a.
              </p>
            </div>
            <div className="md:w-1/2">
              <h2 className="flex items-center font-semibold text-[1em] text-[#1a2b3b]">
                Lorem ipsum
              </h2>
              <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal">
                Mauris accumsan ullamcorper condimentum. Aenean mattis volutpat
                dignissim. Curabitur rutrum nunc at tellus maximus consequat.
                Nulla id gravida leo.
              </p>
            </div>
          </motion.div>

          <div className="flex gap-[15px] mt-8 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.55,
                duration: 0.55,
                ease: [0.075, 0.82, 0.965, 1],
              }}
              className="rounded-full min-w-40 px-4 py-2 text-sm font-semibold transition-all bg-harvard text-white no-underline active:scale-95 scale-100 duration-75"
            >
              Pay your dues
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.65,
                duration: 0.55,
                ease: [0.075, 0.82, 0.965, 1],
              }}
              className="rounded-full min-w-40 px-4 py-2 text-sm font-semibold transition-all flex items-center justify-between bg-[#f5f7f9] text-[#1E2B3A] no-underline active:scale-95 scale-100 duration-75"
              style={{
                boxShadow: "0 1px 1px #0c192714, 0 1px 3px #0c192724",
              }}
            >
              <span className="mr-2">One time donation</span>
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.75 6.75L19.25 12L13.75 17.25"
                  stroke="#1E2B3A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 12H4.75"
                  stroke="#1E2B3A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </div>
        </main>

        <motion.div
          transition={{
            duration: 1,
            ease: [0.075, 0.82, 0.965, 1],
          }}
          style={{
            clipPath:
              "polygon(100px 0,100% 0,calc(100% + 225px) 100%, 480px 100%)",
          }}
          data-transition-in
          className="z-50 md:fixed top-0 right-[-2px] w-[80%] md:w-1/2 h-screen bg-gradient-to-r from-harvard-light to-harvard-dark hidden md:block"
        >
          <motion.div
            initial={{ filter: "blur(20px)", opacity: 0, x: 50, y: -20 }}
            animate={{ filter: "blur(1px)", opacity: 0.1, x: 50, y: 20 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
          >
            <Coat className="h-dvh scale-125" />
          </motion.div>
        </motion.div>

        <div className="h-[60px] bg-grey-dark fixed bottom-0 z-20 w-full flex flex-row items-center justify-evenly">
          {years && (
            <p className="text-white/80 text-base md:text-lg font-semibold md:leading-[60px] whitespace-nowrap flex flex-row">
              {`Making Good Men Better for ${years} years`}
            </p>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
}
