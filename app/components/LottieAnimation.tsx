"use client";

import Lottie from "lottie-react";
import automationAnimation from "@/public/automation-animation.json";

const LottieAnimation = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <Lottie animationData={automationAnimation} loop autoplay />
    </div>
  );
};

export default LottieAnimation;
