import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

function AskDoubt() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileRemove = () => {
    setFile(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold text-richblack-600 mb-4">
        Ask a Doubt
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-richblack-200">
            Subject
          </label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="mt-1 w-full px-3 py-2 bg-white border border-gray-600 rounded-md text-richblack-700 focus:outline-none focus:ring focus:to-blue-500"
            placeholder="Enter subject"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-richblack-200">
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 w-full px-3 py-2 bg-white border border-gray-600 rounded-md text-richblack-700 focus:outline-none focus:ring focus:to-blue-500"
            placeholder="Enter your message"
            rows="4"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-richblack-200">
            Upload File (Optional)
          </label>
          <div className="relative flex items-center">
            <input
              type="file"
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold text-black file:bg-blue-500 file:text-white hover:file:bg-blue-700"
            />
            {file && (
              <IoClose
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500 cursor-pointer"
                onClick={handleFileRemove}
                size={20}
              />
            )}
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AskDoubt;
