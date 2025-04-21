import React from "react";

const ProblemsTable = ({ data, category, isShowTag = false }) => {
  const getDisplayText = (text) => {
    const words = text.split(" ");
    const isMobile = window.innerWidth < 768; // Example breakpoint for mobile
    const limit = isMobile ? 3 : 10;
    return words.slice(0, limit).join(" ") + (words.length > limit ? "..." : "");
  };


  return (
    <div className="dark:bg-gray-900 border relative bg-white my-4 dark:text-white overflow-hidden  rounded-lg w-full mx-auto">
      <table className="w-full">
        <thead>
          <tr className="  ">
            <th
              colSpan={4}
              className="text-left py-2 px-6 bg-gray-100 dark:bg-gray-700 "
            >
              {category}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((problem, index) => (
            <tr key={index} className="border-t hover:bg-gray-50  dark:hover:bg-gray-800">
              <td className="py-2 px-6">
                <label class="relative flex items-center cursor-pointer">
                  <input
                    class="sr-only peer"
                    name="futuristic-radio"
                    type="radio"
                  />
                  <div class="w-6 h-6 bg-transparent border-2 border-green-500 rounded-full peer-checked:bg-green-500 peer-checked:border-green-500 peer-hover:shadow-lg peer-hover:shadow-green-500/50 peer-checked:shadow-lg peer-checked:shadow-green-500/50 transition duration-300 ease-in-out"></div>
                </label>
              </td>

              <td className="py-3 flex-col w-[60%] md:text-md text-sm px-4 flex items-start">
              {getDisplayText(problem.question)}
              {isShowTag && (
                <span>
                  {problem.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-200 text-gray-600 py-1 px-2 rounded-full text-xs ml-2">
                      {tag}
                      </span>
                  ))}

                </span>
               ) } 
              </td>
              <td>
                <button className=" md:text-md text-sm  dark:text-white px-3 py-1 rounded">
                  Solution
                </button>
              </td>
              <td className="text-left">
                <span
                  className={`ml-2 text-md capitalize  px-2 py-1 rounded ${
                    problem.level === "easy"
                      ? "text-green-500"
                      : problem.level === "medium"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {problem.level}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProblemsTable;
