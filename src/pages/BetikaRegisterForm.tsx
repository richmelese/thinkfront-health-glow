import React from 'react';

const BetikaRegisterForm = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      {/* Navigation Bar */}
      <div className="flex overflow-x-auto space-x-4 text-sm font-medium mb-6 pb-2 border-b">
        <span className="text-orange-600">Home</span>
        <span>Live (62)</span>
        <span>Jackpots</span>
        <span>Shikisha Bet (4)</span>
        <span>Aristov</span>
        <span>Ligi Bigi</span>
        <span>Casino</span>
        <span>Promotions (13)</span>
        <span>Virtuals</span>
        <span>Betika Fasta</span>
        <span className="font-bold">Crash Games</span>
        <span>Live Score</span>
        <span>App</span>
      </div>

      {/* Form Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Betika.com/en-ke/register?next=%2Faviator
        </h1>
        <p className="text-gray-600">
          Enter your phone number and password below to Login to your existing account. 
          Otherwise click on Register with the same details to create a new account.
        </p>
      </div>

      {/* Registration Form */}
      <form className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Phone Number</h2>
          <p className="text-gray-500 text-sm mb-1">e.g. 0712 234567</p>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Password</h2>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Confirm Password</h2>
          <input
            type="password"
            placeholder="Confirm your password"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="text-sm text-gray-600">
          <p>
            By clicking Register you confirm to have read in detail, understood and agreed to the 
            Terms and Conditions, the Privacy policy and also that you are over 18 years of age.
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 text-white py-3 px-4 rounded font-bold hover:bg-orange-700 transition-colors"
        >
          Register
        </button>
      </form>

      {/* Existing account prompt */}
      <div className="mt-6 text-center">
        <p className="font-semibold">Already have a registration code?</p>
      </div>
    </div>
  );
};

export default BetikaRegisterForm;