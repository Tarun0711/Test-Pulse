import React from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ title, description, buttonText, imageSrc,categoryName }) => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate(`/test-series-details/${categoryName}`);
  };
  return (
    <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center">
      {/* Image */}
      <div className="flex justify-center mb-4">
        <img
          src={imageSrc}
          alt={title}
          className="w-16 h-16 object-contain"
        />
      </div>
      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
      {/* Button */}
      <button onClick={handleExploreClick} className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white w-full font-medium py-2 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition duration-300">
        {buttonText}
      </button>
    </div>

  );
};

const CourseCards = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6 ">
      {/* JEE Mains */}
      <CourseCard
        title="JEE Mains"
        description="Prepare for JEE Mains with top-notch study material and strategies."
        buttonText="Explore"
        categoryName="jee-mains" // Add category name for routing

        imageSrc="https://cdn-icons-png.flaticon.com/512/2620/2620787.png" // Replace with a relevant image
      /> 
      {/* JEE Mains + Advanced */}
      <CourseCard
        title="JEE Mains + Advanced"
        description="Comprehensive preparation for JEE Mains and Advanced exams."
        buttonText="Explore"
        categoryName="jee mains and advanced" // Add category name for routing
        imageSrc="https://cdn-icons-png.flaticon.com/512/2620/2620791.png" // Replace with a relevant image
      />

      {/* NEET */}
      <CourseCard
        title="NEET"
        description="Ace NEET with detailed guidance and a structured syllabus."
        buttonText="Explore"
        categoryName="neet" // Add category name for routing

        imageSrc="https://cdn-icons-png.flaticon.com/512/2784/2784458.png" // Replace with a relevant image
      />
    </div>
  );
};

export default CourseCards;
