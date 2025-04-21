import React from "react";

const RedeemCard = () => {
  return (
      <div className="w-80 bg-white shadow-lg p-2 rounded-lg overflow-hidden">
        {/* Card Content */}
        <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl py-14 p-6 text-center">
          <p className="text-white text-sm mb-2">Redeem</p>
          <h1 className="text-4xl font-bold text-white">Premium</h1>
          <p className="text-white mt-2">
            with <span className="font-bold">Edge Coins</span>
          </p>
        </div>

        {/* Subscription Details */}
        <div className="p-4 flex justify-between items-center">
          <div>
            <p className="text-gray-700 font-semibold text-sm">
              30-Day Premium Subscription
            </p>
            <p className="text-blue-500 text-xs font-medium mt-1">Premium</p>
          </div>
          <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-md">
            <span className="text-yellow-600 font-semibold text-lg">6,000</span>
            <span className="ml-1 text-yellow-500 text-xl">🪙</span>
          </div>
        </div>
      </div>
  );
};

export default RedeemCard;
