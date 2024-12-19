import React from 'react';

const StatisticCard = ({ number, label }) => {
  return (
    <div className="bg-pink-600 text-white py-8 rounded-tr-lg rounded-bl-lg shadow-lg text-center w-[300px] lg:w-[385px] z-10"> {/* rounded-t-lg untuk rounded di atas */}
      <h2 className="text-4xl font-bold">{number}</h2>
      <p className="text-lg mt-2">{label}</p>
    </div>
  );
};

const StatisticCards = ({ stats }) => {
  return (
    <div className="relative z-10 flex justify-center space-x-16 -mt-32">
      {stats.map((stat, index) => (
        <StatisticCard key={index} number={stat.number} label={stat.label} />
      ))}
    </div>
  );
};

export default StatisticCards;