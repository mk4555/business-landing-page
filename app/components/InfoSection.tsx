"use client";
import React, { useEffect } from "react";
import NumberFlow, { continuous } from "@number-flow/react";
const InfoSection: React.FC = () => {
  const [hours, setHours] = React.useState(0);
  useEffect(() => {
    // Simulate fetching data
    setHours(800000);
  }, []);
  return (
    <section className="bg-gray-50 border-b-2">
      <div className="text-center mx-auto max-w-6xl px-(--content-px) py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          {"Why Choose Us?"}
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          {
            "We leverage cutting-edge AI technology to provide tailored solutions that drive efficiency and growth for your business."
          }
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border p-6 rounded-lg shadow-md bg-white">
            <h3 className="text-xl font-bold text-sky-500 mb-2">
              <NumberFlow
                value={hours}
                animated={true}
                spinTiming={{ duration: 700 }}
                plugins={[continuous]}
              />
            </h3>
            <p className="text-gray-600">
              {"business hours saved annually through automated task handling"}
            </p>
          </div>
          <div className="border p-6 rounded-lg shadow-md bg-white">
            <NumberFlow
              value={1000000}
              prefix="$"
              suffix="M in Costs Saved"
              transformTiming={{ duration: 150, easing: "linear(...)" }}
              animated={true}
            />

            <h3 className="text-xl font-bold text-sky-500 mb-2"></h3>
            <p className="text-gray-600">
              {
                "Our AI-driven solution to meet the unique needs of your business, ensuring you stay ahead of the competition."
              }
            </p>
          </div>
          <div className="border p-6 rounded-lg shadow-md bg-white">
            <h3 className="text-xl font-bold text-sky-500 mb-2">
              {"Innovative Solutions"}
            </h3>
            <p className="text-gray-600">
              {
                "Our AI-driven solutions are designed to meet the unique needs of your business, ensuring you stay ahead of the competition."
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
