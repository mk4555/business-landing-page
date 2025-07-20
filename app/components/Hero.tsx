import Link from "next/link";
import React from "react";
import Image from "next/image";
const Hero: React.FC = () => {
  return (
    <div className="bg-white border-b-2">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-[32px] sm:items-start ">
        <section className="flex flex-row items-center pt-20 pb-20 text-left ">
          <div className="basis-2/3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
              {"Unlock Your Business's Full Potential"}
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-600">
              {
                "We provide innovative AI solutions to help your business grow and succeed in the automated age. Let's build the future together."
              }
            </p>
            <div className="mt-8 flex justify-start gap-4">
              <Link
                href="/contact"
                className="inline-block rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-blue-700 transition"
              >
                {"Get Started"}
              </Link>
              <Link
                href="/about"
                className="inline-block rounded-md bg-gray-200 px-6 py-3 text-base font-semibold text-gray-800 hover:bg-gray-300 transition"
              >
                {"Learn More"}
              </Link>
            </div>
          </div>
          <div className="flex basis-1/3 justify-center">
            <Image
              width={500}
              height={500}
              src="/hero-main.png"
              alt="An abstract image representing business growth and potential"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
