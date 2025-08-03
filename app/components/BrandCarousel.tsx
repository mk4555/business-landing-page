"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const brands = [
  { name: "Google", logo: "/logos/google.svg" },
  { name: "Jira", logo: "/logos/jira.svg" },
  { name: "Shopify", logo: "/logos/shopify.svg" },
  { name: "Stripe", logo: "/logos/stripe.svg" },
  { name: "Meta", logo: "/logos/meta.svg" },
  { name: "Notion", logo: "/logos/notion.svg" },
  { name: "Honey", logo: "/logos/honey.svg" },
  { name: "Survey Monkey", logo: "/logos/surveymonkey.svg" },
];

const BrandCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animation = container.animate(
      [{ transform: "translateX(0)" }, { transform: "translateX(-50%)" }],
      {
        duration: 30000,
        iterations: Infinity,
        easing: "linear",
      }
    );

    return () => animation.cancel();
  }, []);

  const doubledBrands = [...brands, ...brands]; // For seamless loop

  return (
    <section className="relative z-0 pt-12 pb-14 bg-gradient-to-b from-transparent to-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-xl font-medium text-gray-700 mb-8">
          Trusted by top brands
        </h2>

        <div className="relative w-full overflow-hidden">
          {/* Fade masks */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-100 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-100 to-transparent z-10" />

          <div ref={containerRef} className="flex gap-12 w-max">
            {doubledBrands.map((brand, idx) => (
              <div
                key={`${brand.name}-${idx}`}
                className="flex items-center justify-center min-w-[150px]"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={100}
                  height={40}
                  className="grayscale hover:grayscale-0 transition-all duration-300 object-contain h-10 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
