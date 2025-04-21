"use client";
import { TypewriterEffectSmooth } from "../UI/TypeWriterEffect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Practice,",
    },
    {
      text:"Learn,",
    },
    {
      text:"and Succeed"
    },
    {
      text: " With ",
    },
    {
      text: "Focus Edge.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    (<div className="flex flex-col items-center justify-center  ">
      <p className="text-neutral-600 dark:text-gray-400 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <div className="relative w-[100%]">
      <TypewriterEffectSmooth  words={words} />
      </div>
      
    </div>)
  );
}
