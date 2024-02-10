import React, { useEffect, useState } from "react";

const HeroTypeWriter = ({ words, speed }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const currentWord = words[currentWordIndex];

  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex <= currentWord.length) {
        setCurrentText(currentWord.slice(0, charIndex));
        charIndex++;
      } else {
        // word typed out, clear and move to the next word
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentWordIndex((prevIndex) =>
            prevIndex === words.length - 1 ? 0 : prevIndex + 1
          );
        }, 1000);
      }
    }, speed);
    return () => {
      clearInterval(typingInterval);
    };
  }, [currentWord, speed, words]);

  return (
    <div className="flex items-center justify-center ">
      <p
        className="text-[#915EFF] font-extrabold leading-[90px] sm:leading-[120px]
         tracking-[4px] sm:tracking-[8px] lg:tracking-[15px]
         text-[20px] sm:text-[30px] lg:text-[40px]
        "
      >
        {currentText}
      </p>
    </div>
  );
};

export default HeroTypeWriter;
