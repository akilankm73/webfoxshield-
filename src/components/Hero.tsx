"use client";
import React, { useState } from "react";

const sampleData = [
  {
    visa: "1234 5678 9012 3456",
    accNo: "00123456789",
    aadhar: "1234 5678 9012",
    pan: "ABCDE1234F",
  },
  {
    visa: "2345 6789 0123 4567",
    accNo: "00987654321",
    aadhar: "2345 6789 0123",
    pan: "FGHIJ5678K",
  },
  {
     visa: "2345 6789 0123 4567",
    accNo: "00987654321",
    aadhar: "2345 6789 0123",
    pan: "FGHIJ5678K",
  },
  {
     visa: "2345 6789 0123 4567",
    accNo: "00987654321",
    aadhar: "2345 6789 0123",
    pan: "FGHIJ5678K",
  }
];

const Hero = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    console.log("clicked")
    setDropdownOpen(prev => !prev);
  }

  return (
    <div className="relative min-h-screen w-full">
      {/* You can put your Spotlights / background here */}

      {/* Logo and heading area */}
      <div className="absolute top-0 left-0 p-4 z-10">
        <img
          src="./webfoxshield.png"
          alt="Web Fox Shield Logo"
          className="w-[10px] h-[10px] md:w-[150px] md:h-[150px]"
        />
        <h1 className="heading mt-150 top-200 right-1000 p-400">
          Guard Your Digital Life{" "}
          <span className="text-purple">With Proactive Browser Security</span>
        </h1>
      </div>

      {/* Main content area */}
      <div className="flex flex-col items-center justify-start pt-36 px-4 relative z-20">
        <div className="max-w-3xl w-full mt-[180px]">
          <p className="text-center md:text-left text-white text-base md:text-lg mb-8">
            Our system uses advanced threat monitoring to secure your sensitive
            data, protecting it from unauthorized access and cyber threats.
          </p>

          <div className="bg-[#0D0033] bg-opacity-90 shadow-md rounded-xl p-4 md:p-6 w-full">
            {/* Button + toggle */}
            <div className="flex items-center justify-between rounded-full border border-gray-300 dark:border-gray-600 p-3 md:p-4">
              <span className="text-white">Get Report</span>
              <button
                type="button"
                className="flex items-center bg-purple-600 text-white rounded-full px-4 py-2 focus:outline-none"
                onClick={toggleDropdown}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transition-transform ${
                    dropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                > 
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* Dropdown */}
            {dropdownOpen && (
              <div className="mt-4 bg-gray-100 dark:bg-gray-700 p-2 md:p-4 rounded-lg overflow-x-auto relative">
                <button
                  onClick={toggleDropdown}
                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 w-8 h-8 flex items-center justify-center focus:outline-none z-10"
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <table className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg">
                  <thead>
                    <tr className="bg-gray-200 dark:bg-gray-900 text-left">
                      <th className="p-2 md:p-4 border-b border-gray-300 dark:border-gray-600 text-xs md:text-base">
                        Credit Card
                      </th>
                      <th className="p-2 md:p-4 border-b border-gray-300 dark:border-gray-600 text-xs md:text-base">
                        Account number
                      </th>
                      <th className="p-2 md:p-4 border-b border-gray-300 dark:border-gray-600 text-xs md:text-base">
                        Aadhar
                      </th>
                      <th className="p-2 md:p-4 border-b border-gray-300 dark:border-gray-600 text-xs md:text-base">
                        PAN Card
                      </th>
                      <th className="p-2 md:p-4 border-b border-gray-300 dark:border-gray-600 text-xs md:text-base">
                        UPI ID
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleData.map((data, idx) => (
                      <tr key={idx}>
                        <td className="p-2 md:p-4 border-b border-gray-300 dark:border-gray-600 text-xs md:text-base">
                          {data.visa}
                        </td>
                        <td className="p-2 md:p-4 border-b border-gray-300 dark:border-gray-600 text-xs md:text-base">
                          {data.accNo}
                        </td>
                        <td className="p-2 md:p-4 border-b border-gray-300 dark:border-gray-600 text-xs md:text-base">
                          {data.aadhar}
                        </td>
                        <td className="p-2 md:p-4 border-b border-gray-300 dark:border-gray-600 text-xs md:text-base">
                          {data.pan}
                        </td>
                        <td className="p-2 md:p-4 border-b border-gray-300 dark:border-gray-600 text-xs md:text-base">
                          {/* blank for now */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;