import React from "react";
const Benefits = [
  { id: 1, benefit: "Free Shipping" },
  { id: 2, benefit: "Free Returns" },
  { id: 3, benefit: "30 Day Money Back Guarantee" },
  { id: 4, benefit: "24/7 Customer Support" },
  { id: 5, benefit: "Secure Payment" },
];

function CardQuiz() {
  return (
    <div className="border-2 relative max-w-[250px] mt-10 flex flex-col rounded-xl items-center p-2 px-2">
      <img
        className="w-52 border absolute -top-10 shadow-xl rounded-xl h-24"
        src="https://www.shutterstock.com/image-vector/quiz-thin-line-concept-vector-260nw-663203059.jpg"
        alt=""
      />

      <h1 className="text-2xl font-bold mt-12">Lorem ipsum dolor sit amet.</h1>
      <hr className="text-richblack-600" />

      {/* <p className="text-sm text-richblack-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia,
        praesentium.
      </p> */}
      <div>
        {Benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="flex items-center underline underline-offset-1 text-blue-900 text-xs"
          >
            <svg
              className="w-4 h-4 text-blue-800 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <p>{benefit.benefit}</p>
          </div>
        ))}
      </div>
      <p className="text-green-700 border-y-2 py-2 my-2 text-xl font-bold w-full ">
        {" "}
        Price ₹50
      </p>
      <div className="flex justify-between w-full gap-2">
        <button className="bg-blue-500 hover:bg-blue-800 w-full text-white py-2  rounded-lg">
          Explore
        </button>
        <button className="text-blue-500 border-2 hover:bg-blue-50 w-full py-2 rounded-lg">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default CardQuiz;
