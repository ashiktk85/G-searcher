import { useState } from "react";

export default function LanguageSwitch() {
  const [isGerman, setIsGerman] = useState(false);

  return (
    <div
      onClick={() => setIsGerman(!isGerman)}
      className={`w-20 h-8 rounded-full flex items-center px-1 cursor-pointer transition-colors duration-300 
        ${isGerman ? "bg-yellow-400" : "bg-blue-500"}`}
    >
      <div
        className={`w-10 h-6 bg-white rounded-full flex items-center justify-center font-semibold text-sm
            transition-transform duration-300
            ${isGerman ? "translate-x-8" : "translate-x-0"}`}
      >
        {isGerman ? "Deu" : "Eng"}
      </div>
    </div>
  );
}
